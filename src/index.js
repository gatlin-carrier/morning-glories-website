import React from "react";
import ReactDOM from "react-dom";
import Card from "../src/Card/Card";
import Tachyons from "tachyons";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="bg-white black-80 tc pv4 avenir">
        <div className="w5 center">
          <img src="https://uploads.codesandbox.io/uploads/user/b0d7c27c-f93e-4b74-a248-015259f0b3e8/H-XY-icon-above-font.svg" />
        </div>
        <h2 className="mt2 mb0 f6 fw4 ttu tracked">
          Where Southern meets fashion
        </h2>
        <nav className="bt bb tc mw7 center mt4">
          <a
            className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
            href="/"
          >
            Home
          </a>
          <a
            className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
            href="/portfolio"
          >
            Gallery
          </a>
          <a
            className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
            href="/shop"
          >
            Shop
          </a>
          <a
            className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
            href="/about"
          >
            About
          </a>
          <a
            className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
            href="/contact"
          >
            Contact
          </a>
        </nav>
      </header>
      <Card />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
