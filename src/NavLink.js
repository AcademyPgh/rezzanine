import React from "react"

export default function NavLink(props) {
    if (window.location.pathname == props.to) {
        return <div className="active-navlink">{props.children}</div>
    } else {
        return <div><a href={props.to} class>{props.children}</a></div>
    }
}