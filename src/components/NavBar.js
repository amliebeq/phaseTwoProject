import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <NavLink
            to='/dictionary'
            exact>
                Dictionary
            </NavLink>
        </div>
    )
}

export default NavBar