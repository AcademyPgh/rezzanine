import React from "react";
export default function NavLink(props) {
  if (window.location.pathname == props.to) {
    return /*#__PURE__*/React.createElement("div", {
      className: "active-navlink"
    }, props.children);
  } else {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: props.to,
      class: true
    }, props.children));
  }
}