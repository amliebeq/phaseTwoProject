import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinkStyling = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease'
}

const navBarStyling = {
    backgroundColor: '#5F6860',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px'
}

const activeLinkStyling = {
    color: '#FFA500'
}  

function NavBar() {
    return (
        <nav style={navBarStyling}>
            <NavLink
            to='/'
            exact
            style={navLinkStyling}
            activeStyle={activeLinkStyling}>
                Home
            </NavLink>
            <NavLink
            to='/dictionary'
            exact
            style={navLinkStyling}
            activeStyle={activeLinkStyling}>
                Dictionary
            </NavLink>
            <NavLink
            to='/add-new'
            exact
            style={navLinkStyling}
            activeStyle={activeLinkStyling}>
                Add a New Term
            </NavLink>
        </nav>
    )
}

export default NavBar