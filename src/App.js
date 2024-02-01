import React from "react";
import ReactDOM from "react-dom/client";

const element = (
  <div>
    <h1>hey</h1>
    <h1>hey2</h1>
  </div>
);
console.log(element);

const Element = () => (
  <div>
    {element}
    <h1>Lalit</h1>
  </div>
);

// Import createRoot from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Element />);
