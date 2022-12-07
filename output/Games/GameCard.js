import React from "react";
export default function GameCard(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    class: "backing"
  }), /*#__PURE__*/React.createElement("img", {
    src: props.image,
    alt: props.name,
    title: props.name
  }));
}