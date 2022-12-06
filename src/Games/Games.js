import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import GameCard from "./GameCard";

const games = document.querySelector('#games');
const root = createRoot(games);
root.render(<Games />);



export default function Games() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("/images/games/games.json")
            .then(response => response.json())
            .then(data => setImages(data));
    })

    return (
        <div class="game-cards">
            {images.map(image => <GameCard image={`/images/games/${image}`} />)}
        </div>
    )
}
