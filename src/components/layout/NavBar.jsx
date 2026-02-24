import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.scss";


const NavBar = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive})=> (isActive ? "active" : "")} >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/play" className={({ isActive})=> (isActive ? "active" : "") } >Play</NavLink>
                </li>
                <li>
                    <NavLink to="/score" className={({ isActive})=> (isActive ? "active" : "") } > Score </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
