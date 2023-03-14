import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import NavLink from "./NavLink";
const header = document.querySelector('#header');
const root = createRoot(header);
root.render( /*#__PURE__*/React.createElement(Header, null));
export default function Header(props) {
  const [open, setOpen] = useState();
  return /*#__PURE__*/React.createElement("header", {
    className: open && 'open'
  }, /*#__PURE__*/React.createElement("div", {
    className: "hamburger-helper",
    onClick: () => {
      setOpen(!open);
    },
    tabIndex: "0",
    role: "button"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hamburger"
  }, "Menu")), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement(NavLink, {
    to: "/"
  }, "Home"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/visit/"
  }, "Plan Your Visit"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/games/"
  }, "Games"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/events/"
  }, "Events"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/community/"
  }, "Contact & Community"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/faq/"
  }, "FAQ"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/conduct/"
  }, "Code of Conduct")), /*#__PURE__*/React.createElement("div", {
    className: "navlogo"
  }, /*#__PURE__*/React.createElement("img", {
    className: "testypoo",
    src: "/images/headerlogo.png"
  })));
}