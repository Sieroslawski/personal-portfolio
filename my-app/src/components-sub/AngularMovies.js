import React from 'react'
import { useEffect } from 'react'
import fullScreen from '../images/angular-movies-desktop.png'
import phone from '../images/angular-movies-phone.png'
import ParticleBackground from '../components/Particles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import ReactTooltip from 'react-tooltip';
import 'animate.css';

function AngularMovies() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section>
     <div className="projects-wrapper">
       <header className="projects-header animate__animated animate__fadeIn">
       <h1>Angular Movies</h1>
       <a href="https://github.com/Sieroslawski/Angular-Movies" target="_blank" rel="noopener noreferrer" data-tip data-for="git"><FontAwesomeIcon icon={brands('github-alt')} size="3x"/></a>
       <a href="https://main--merry-fox-b557fc.netlify.app/home" target="_blank" data-tip data-for="website"><FontAwesomeIcon icon={solid('paperclip')}  size="3x"/></a>
       <ReactTooltip id="git" place="bottom" effect="solid">View Repository</ReactTooltip>
       <ReactTooltip id="website" place="bottom" effect="solid">Live Site</ReactTooltip>
       </header>
       <img src={fullScreen} className="fullscreen-img animate__animated animate__fadeIn" id="full-screen"/>       
       <img src={phone} className="phone-img animate__animated animate__fadeIn" id="phone-img"/>        
       <article className="project-overview animate__animated animate__fadeIn">
         <h1>Overview</h1>
         <p>Angular-Movies is a program that I developed in SSD as the final project of our Angular classes.
           Angular-Movies queries the TMBD api to obtain all movies within the last 30 days and allows you to sort them by genre.
           With this project I was able to utilize my skills in Typescript and gain more experience with Angular doing two-way data-binding,
           and learn about the subscribe method to pass data.</p>
       </article>
       <article className="project-features animate__animated animate__fadeIn">
          <h1>Features</h1>
          <ul>
            <li>Sort by genre</li>
            <li>Fully responive</li>
            <li>Pagination</li>          
          </ul>
       </article>
       <article className="project-tech animate__animated animate__fadeIn">
       <p><FontAwesomeIcon icon={brands('angular')}  size="3x" className="angular-icon"/></p>
       <p><FontAwesomeIcon icon={brands('html5')}  size="3x" className="html5-icon"/></p>
       <p><FontAwesomeIcon icon={brands('css3')}  size="3x" className="css-icon"/></p>           
       </article>
     </div>
     <ParticleBackground className="particles"/>  
   </section>
  )
}

export default AngularMovies