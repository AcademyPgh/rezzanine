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
          <NavLink to="/visit/">Plan Your Visit</NavLink>
          <NavLink to="/games/">Games</NavLink>
          <NavLink to="/events/">Events</NavLink>
          <NavLink to="/community/">Community</NavLink>
          <NavLink to="/faq/">FAQ</NavLink>
          <NavLink to="/conduct/">Code of Conduct</NavLink>
        </nav>
        <div className="navlogo"><img className="testypoo"  src="/images/headerlogo.png"  /></div>
        
      </header>
    )
}