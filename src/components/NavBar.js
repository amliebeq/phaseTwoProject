import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <NavLink
            to='/'
            exact>
                Home
            </NavLink>
            <NavLink
            to='/dictionary'
            exact>
                Dictionary
            </NavLink>
            <NavLink
            to='/add-new'
            exact>
                Add a New Term
            </NavLink>
        </div>
    )
}

export default NavBar