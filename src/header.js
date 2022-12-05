import React from "react";
import { createRoot } from "react-dom/client";

const header = document.querySelector('#header');
const root = createRoot(header);
root.render(<Header />);


export default function Header(props) {
    return (
      <header>
        <div><a href="/hours/">Hours & Pricing</a></div>
        <div><a href="">Events</a></div>
        <div><a href="">Community</a></div>
        <div><a href="">Food</a></div>
        <div><a href="">FAQ</a></div>
      </header>
    )
}