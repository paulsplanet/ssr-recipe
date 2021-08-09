import React from "react";
import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToSting(
    <div>Hello Server Side Rendering</div>
);

console.log(html);