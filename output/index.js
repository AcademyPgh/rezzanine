import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./header";
console.log("help me");
const header = document.querySelector('#header');
const root = createRoot(header);
root.render( /*#__PURE__*/React.createElement(Header, null));