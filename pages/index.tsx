import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Tracery from "tracery-grammar";
import Head from "next/head";

import source from "../mbc.js";
import Point from "../components/point";

const grammar = Tracery.createGrammar(source);

const transitionTime = 650;

const Index = () => {
  const [phrase, setPhrase] = useState("Je conjecte...");
  const getNewPhrase = () => {
    setPhrase(grammar.flatten("#origin#"));
  };

  useEffect(getNewPhrase, []);

  return (
    <div className="container">
      <Head>
        <title>Mathieu Bot-Côté</title>
      </Head>

      <div className="photo" />
      <div className="content">
        <TransitionGroup className="container-bockerie">
          <CSSTransition
            key={phrase}
            timeout={transitionTime}
            classNames="fade"
          >
            <div className="bockerie">
              <div className="shift">
                <Point />
              </div>
              <p>{phrase}</p>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <button onClick={getNewPhrase}>Mais encore?</button>
        <footer>
          <p className="credit">
            Une niaiserie de <a href="https://louis-andre.net">Louis-André</a>,
            très inspirée par{" "}
            <a href="https://twitter.com/PierreLuc/status/1054490233809584128">
              le montage original de Pierre-Luc Racine
            </a>
            .
          </p>
          <p className="credit">
            Photo par{" "}
            <a href="https://www.lefigaro.fr/vox/societe/mathieu-bock-cote-l-amour-au-wokistan-20210917">
              Le Figaro
            </a>
            .
          </p>
        </footer>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          background-color: black;
          margin: 0;
        }
      `}</style>

      <style jsx>{`
        .container {
          background-color: #eee;
          font-size: 20px;
          height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .photo {
          margin: 8px auto;
          width: 100%;
          height: 50vh;
          max-height: 50vh;
          flex: 1;
          max-width: 40rem;
          border-radius: 4px;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);

          background: url(/mbc-figaro.webp) center no-repeat;
          background-size: cover;
        }

        .shift {
          text-align: center;
          margin: -48px auto 0;
          height: 34px;
          z-index: 2;
        }

        .content {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin: 0 auto 0;
        }

        .container-bockerie {
          min-height: 10rem;
          position: relative;
        }

        .bockerie {
          margin: -4px 16px 0;
          max-width: 30rem;
          min-height: 10rem;
          position: absolute;

          z-index: 1;
        }

        .bockerie p {
          font-weight: 300;
          line-height: 1.35;
          background-color: white;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          margin: 0;
          padding: 16px;
        }

        button {
          appearance: none;
          background-color: #fff;
          border: solid 1px #c77;
          border-radius: 8px;
          color: #633;
          display: block;
          padding: 8px 16px;
          font-size: 16px;
          max-width: 20rem;
          margin: 11rem auto 16px;
        }

        button:hover {
          background-color: #eee;
        }

        button:active {
          background-color: #ddd;
        }

        footer {
          color: #444;
          font-size: 12px;
          text-align: center;
          margin: 4px 0 12px;
        }

        footer p {
          margin: 4px;
        }

        .credit a {
          color: #c77;
        }

        @media (max-width: 660px) {
          .photo {
            margin: 8px;
            max-width: calc(100vw - 16px);
          }

          .container {
            margin: 0;
          }

          .bockerie {
            font-size: 16px;
          }
        }

        /* Transitions */

        .fade-enter {
          opacity: 0;
          transform: translateY(-20px) scale(0.9);
        }
        .fade-enter-active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .fade-exit {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .fade-exit-active {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }

        .fade-enter-active,
        .fade-exit-active {
          transition: opacity ${transitionTime / 2}ms,
            transform ${transitionTime}ms cubic-bezier(0.33, 1.335, 0.435, 0.95);
        }
      `}</style>
    </div>
  );
};

export default Index;
