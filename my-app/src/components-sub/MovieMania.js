import React from 'react'
import { useEffect } from 'react'
import fullScreen from '../images/full.png'
import phone from '../images/phone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import ParticleBackground from '../components/Particles'
import ReactTooltip from 'react-tooltip';
import 'animate.css';

function MovieMania() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
   <section>
     <div className="projects-wrapper animate__animated animate__fadeIn" id="movie-mania">
       <header className="projects-header">
       <h1>Movie Mania</h1>
       <a href="https://github.com/Sieroslawski/Movie-Application" target="_blank" rel="noopener noreferrer" data-tip data-for="git"><FontAwesomeIcon icon={brands('github-alt')} size="3x"/></a>
       <a href="https://main--jolly-lolly-86adff.netlify.app/" target="_blank" data-tip data-for="website"><FontAwesomeIcon icon={solid('paperclip')}  size="3x"/></a>
       <ReactTooltip id="git" place="bottom" effect="solid">View Repository</ReactTooltip>
       <ReactTooltip id="website" place="bottom" effect="solid">Live Site</ReactTooltip>
       </header>
       <img src={fullScreen} className="fullscreen-img" id="full-screen"/>
       <img src={phone}  id="phone-img"/>          
       <article className="project-overview">
         <h1>Overview</h1>
         <p>Movie-Mania is a project I developed for the final portion of our front-end React courses in SSD. 
           Movie-Mania allows you to get movies using the TMDB API and sort by different genres and add them to your favorites using local storage as well as remove them.</p>
       </article>
       <article className="project-features">
          <h1>Features</h1>
          <ul>
            <li>Add / Remove from favorites using local storage.</li>            
            <li>Sort by genre.</li>
            <li>Fully responive.</li>
            <li>Display a message if a movie doesn't have a poster.</li>
            <li>Search bar for movies, not visible in images as it was added in later.</li>
          </ul>
       </article>
       <article className="project-tech" id="pt-mm">
       <p><FontAwesomeIcon icon={brands('html5')}  size="3x" className="html5-icon"/></p>
       <p><FontAwesomeIcon icon={brands('sass')}  size="3x" className="sass-icon"/></p>
       <p><FontAwesomeIcon icon={brands('js')}  size="3x" className="js-icon"/></p>
       <p><FontAwesomeIcon icon={brands('react')}  size="3x" className="react-icon"/></p>       
       </article>
     </div>
     <ParticleBackground className="particles"/>  
   </section>
  )
}

export default MovieMania