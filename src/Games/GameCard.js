import React from "react";

export default function GameCard(props) {

    return (
        <div>
            <div class="backing"></div>
            <img 
                src={props.image} 
                alt={props.name} 
                title={props.name}
            />
        </div>

    )
}