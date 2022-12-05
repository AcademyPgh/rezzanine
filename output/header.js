import React from "react";
import { createRoot } from "react-dom/client";
import NavLink from "./NavLink";
const header = document.querySelector('#header');
const root = createRoot(header);
root.render( /*#__PURE__*/React.createElement(Header, null));
export default function Header(props) {
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement(NavLink, {
    to: "/"
  }, "Home"), /*#__PURE__*/React.createElement(NavLink, {
    to: ""
  }, "Hours & Pricing"), /*#__PURE__*/React.createElement(NavLink, {
    to: ""
  }, "Events"), /*#__PURE__*/React.createElement(NavLink, {
    to: ""
  }, "Community"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/food/"
  }, "Food"), /*#__PURE__*/React.createElement(NavLink, {
    to: ""
  }, "FAQ")));
}