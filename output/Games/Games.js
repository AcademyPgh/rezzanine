import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import GameCard from "./GameCard";
const games = document.querySelector('#games');
const root = createRoot(games);
root.render( /*#__PURE__*/React.createElement(Games, null));
export default function Games() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("/images/games/games.json").then(response => response.json()).then(data => setImages(data));
  });
  return /*#__PURE__*/React.createElement("div", {
    class: "game-cards"
  }, images.map(image => /*#__PURE__*/React.createElement(GameCard, {
    image: `/images/games/${image}`
  })));
}