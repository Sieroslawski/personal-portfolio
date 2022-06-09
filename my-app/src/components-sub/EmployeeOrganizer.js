import React from 'react'
import tablet from '../images/tablet.png'
import { useEffect } from 'react'
import ParticleBackground from '../components/Particles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import ReactTooltip from 'react-tooltip';
import 'animate.css';

function EmployeeOrganizer() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section>
    <div className="projects-wrapper">
      <header className="projects-header animate__animated animate__fadeIn">
      <h1>Employee Organizer</h1>
      <a href="https://github.com/Sieroslawski/Employee-Organizer" target="_blank" rel="noopener noreferrer" data-tip data-for="git"><FontAwesomeIcon icon={brands('github-alt')} size="3x"/></a>
      <ReactTooltip id="git" place="bottom" effect="solid">View Repository</ReactTooltip>     
      </header>     
      <img src={tablet} className="tablet-img" className="fullscreen-img animate__animated animate__fadeIn" id="employee-org-img"/>            
      <article className="project-overview animate__animated animate__fadeIn">
        <h1>Overview</h1>
        <p>Employee-Organizer was the final project I developed for our C# courses. This command line program allows you to
          perform CRUD operations using LINQ queries with Microsoft's Entity Framework to organize the employees in an organization, as well as create new employees.
        </p>
      </article>
      <article className="project-features animate__animated animate__fadeIn">
         <h1>Features</h1>
         <ul>
           <li>Create, read, update, delete employees in an database.</li>
           <li>View all organizations, view all employees within each organization</li>          
         </ul>
      </article>
      <article className="project-tech animate__animated animate__fadeIn">     
      <p><svg fill="none" height="42px" viewBox="204.925 153.577 757.617 860.543" width="42px" xmlns="http://www.w3.org/2000/svg">
      <path d="m962.541 407.983c0-14.237-3.034-27.074-9.336-37.811-6.068-10.736-15.171-19.605-27.307-26.607-100.829-58.117-201.891-116.233-302.72-174.35-27.308-15.638-53.449-15.171-80.523.7-40.145 23.574-241.336 138.873-301.086 173.65-24.741 14.237-36.644 36.177-36.644 64.652v351.033c0 14.004 3.034 26.374 8.869 37.111 6.069 10.97 15.405 20.306 27.775 27.541 59.984 34.777 260.941 149.843 301.086 173.65 27.074 15.868 53.448 16.568 80.523.7 100.829-58.35 201.891-116.233 302.72-174.35 12.603-7.235 21.706-16.338 27.774-27.541 5.835-10.737 8.869-23.107 8.869-37.111z" fill="#9a4993"/>
      <path d="m584.667 582.333-371.34 213.794c6.069 10.97 15.405 20.306 27.775 27.542 59.984 34.776 260.941 149.842 301.086 173.649 27.074 15.872 53.449 16.572 80.523.7 100.829-58.35 201.891-116.233 302.72-174.349 12.603-7.236 21.706-16.338 27.774-27.542z" fill="#6a1577"/><path d="m474.735 645.584c21.707 37.811 62.318 63.252 108.765 63.252 46.913 0 87.758-25.674 109.231-63.952l-108.064-62.551z" fill="#6a1577"/>
      <path d="m962.542 407.983c0-14.237-3.035-27.074-9.336-37.811l-368.539 212.161 369.005 213.795c5.835-10.737 8.87-23.107 8.87-37.111z" fill="#813084"/><g fill="#fff">
      <path d="m692.731 644.884c-21.472 38.044-62.317 63.952-109.231 63.952-46.68 0-87.291-25.441-108.764-63.252-10.503-18.438-16.572-39.444-16.572-62.084 0-69.32 56.016-125.336 125.336-125.336 46.213 0 86.592 25.207 108.298 62.551l109.464-63.018c-43.645-75.154-124.869-125.802-217.995-125.802-139.107 0-251.605 112.732-251.605 251.605 0 45.513 12.136 88.459 33.376 125.336 43.412 75.388 125.102 126.269 218.462 126.269 93.594 0 175.284-51.114 218.696-126.969zm138.406-120.901h-24.974v120.668h24.974zm55.316 0h-24.974v120.668h24.974z"/>
      <path d="m906.759 544.289h-120.668v24.974h120.668zm0 55.082h-120.668v24.974h120.668z"/></g></svg></p>
      <p><FontAwesomeIcon icon={solid('database')}  size="3x" className="sql-icon"/></p> 
      </article>
    </div>
    <ParticleBackground className="particles"/>  
  </section>
  )
}

export default EmployeeOrganizer