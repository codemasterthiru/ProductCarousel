import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { ProductCarousel } from "./ProductCarousel";

function App() {
  return (
    <div className="App">
      <h1>Product Carousel</h1>
      <h2>codemasterthiru :)</h2>
      <ProductCarousel />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
