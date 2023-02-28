import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    width: "auto",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  }

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}  

function NavBar() {
    return (
        <div style={center}>
            <NavLink
            to='/'
            exact
            style={linkStyles}>
                Home
            </NavLink>
            <NavLink
            to='/dictionary'
            exact
            style={linkStyles}>
                Dictionary
            </NavLink>
            <NavLink
            to='/add-new'
            exact
            style={linkStyles}>
                Add a New Term
            </NavLink>
        </div>
    )
}

export default NavBar