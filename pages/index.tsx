import { useEffect, useState } from "react";
import Tracery from "tracery-grammar";
import Head from "next/head";

import source from "../mbc.js";
import Point from "../components/point";

const grammar = Tracery.createGrammar(source);

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
      <div className="shift">
        <Point />
      </div>
      <div className="content">
        <p className="bockerie">{phrase}</p>
        <button onClick={getNewPhrase}>Mais encore?</button>
        <p className="credit">
          Inspiré par{" "}
          <a href="https://twitter.com/PierreLuc/status/1054490233809584128">
            le montage de Pierre-Luc Racine
          </a>
        </p>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
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
          margin: 0 auto;
          width: 100%;
          height: 50vh;
          max-height: 50vh;

          background: url(/mbc-figaro.webp) center no-repeat;
          background-size: cover;
        }

        .shift {
          margin: -40px auto 0;
          height: 36px;
          z-index: 2;
        }

        .content {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin: 0 auto 0;
        }

        .bockerie {
          background-color: white;
          font-weight: 300;
          line-height: 1.35;
          padding: 16px;
          margin: -4px 16px 0;
          border-radius: 6px;
          max-width: 30rem;

          box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        button {
          display: block;
          padding: 8px 16px;
          font-size: 16px;
          max-width: 20rem;
          margin: auto auto 16px;
        }

        .credit {
          color: #444;
          font-size: 12px;
          text-align: center;
          margin: 4px 0 12px;
        }

        .credit a {
          color: #c77;
        }

        @media (max-width: 600px) {
          .bockerie {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
