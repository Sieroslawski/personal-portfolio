import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const NavUnlisted = styled.li`
  .header-li {     
    li {
     text-decoration: underline;
     text-decoration-thickness: 5px;     
     color: #5cb85c;     
    }
  }
`;

function Nav() {
  return (
      <header>
    <div className="header-wrapper">
    <a href="/" id="initials">A<font color="#5cb85c">S</font></a>
    <NavUnlisted>
    <nav>
    <ul>    
        <NavLink to="/" className={(navData => (navData.isActive ? "header-li" : 'none'))}><li>Home</li></NavLink>
        <NavLink to="/about" className={(navData => (navData.isActive ? "header-li" : 'none'))}><li>About</li></NavLink>
        <NavLink to="/projects" className={(navData => (navData.isActive ? "header-li" : 'none'))}><li>Projects</li></NavLink>
    </ul>
    </nav>
    </NavUnlisted>
    </div>
    </header>
  )
}

export default Nav  