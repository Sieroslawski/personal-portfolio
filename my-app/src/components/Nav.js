import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className="header-wrapper">
    <a href="/">AS</a>
    <nav>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
    </ul>
    </nav>
    </div>
  )
}

export default Nav  