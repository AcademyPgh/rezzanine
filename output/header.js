import React from "react";
import { createRoot } from "react-dom/client";
const header = document.querySelector('#header');
const root = createRoot(header);
root.render( /*#__PURE__*/React.createElement(Header, null));
export default function Header(props) {
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "/hours/"
  }, "Hours & Pricing")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "Events")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "Community")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "/food/"
  }, "Food")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "FAQ")));
}