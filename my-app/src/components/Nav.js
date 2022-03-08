import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import PageAbout from '../pages/PageAbout'

function Nav() {
  return (
    <nav>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
    </ul>
    </nav>
  )
}

export default Nav