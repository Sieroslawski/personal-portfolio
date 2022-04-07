import React from 'react'
import { useEffect } from 'react'
import fullScreen from '../images/angular-movies-desktop.png'
import phone from '../images/angular-movies-phone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
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
       <a href="https://github.com/Sieroslawski" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={brands('github-alt')} size="3x"/></a>
       <a href="#"><FontAwesomeIcon icon={solid('paperclip')}  size="3x"/></a>
       </header>
       <img src={fullScreen} className="fullscreen-img animate__animated animate__fadeIn" id="full-screen"/>       
       <img src={phone} className="phone-img animate__animated animate__fadeIn" id="phone-img"/>        
       <article className="project-overview animate__animated animate__fadeIn">
         <h1>Overview</h1>
         <p>Angular-Movies is a program that I developed in SSD as the final project of our Angular classes. 
           Angular-Movies queries the TMBD api to obtain all movies within the last 30 days and allows you to sort them by genre.</p>
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
   </section>
  )
}

export default AngularMovies