import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import NavLink from "./NavLink";

const header = document.querySelector('#header');
const root = createRoot(header);
root.render(<Header />);


export default function Header(props) {
  const [open, setOpen] = useState();

    return (
      <header className={open && 'open'}>
        <div 
          className="hamburger-helper" 
          onClick={() => {setOpen(!open)}} 
          tabIndex="0" 
          role="button">
          <div className="hamburger">Menu</div>
        </div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pricing/">Hours & Pricing</NavLink>
          <NavLink to="/games/">Games</NavLink>
          <NavLink to="/events/">Events</NavLink>
          <NavLink to="/community/">Community</NavLink>
          <NavLink to="/food/">Food</NavLink>
          <NavLink to="/faq/">FAQ</NavLink>
          <NavLink to="/codeofconduct/">Code of Conduct</NavLink>
        </nav>
      </header>
    )
}