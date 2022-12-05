import React from "react";
import { createRoot } from "react-dom/client";
import NavLink from "./NavLink";

const header = document.querySelector('#header');
const root = createRoot(header);
root.render(<Header />);


export default function Header(props) {
    return (
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="">Hours & Pricing</NavLink>
          <NavLink to="">Events</NavLink>
          <NavLink to="">Community</NavLink>
          <NavLink to="/food/">Food</NavLink>
          <NavLink to="">FAQ</NavLink>
        </nav>
      </header>
    )
}