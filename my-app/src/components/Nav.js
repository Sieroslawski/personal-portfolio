import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">About Me</NavLink></li>
        <li><NavLink to="/">Projects</NavLink></li>
    </ul>
  )
}

export default Nav