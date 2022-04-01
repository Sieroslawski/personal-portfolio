import React from 'react'
import fullScreen from '../images/full.png'
import tablet from '../images/tablet.png'
import phone from '../images/phone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function MovieMania() {
  return (
   <section>
     <div className="projects-wrapper">
       <header className="projects-header">
       <h1>Movie Mania</h1>
       <a href="https://github.com/Sieroslawski" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={brands('github-alt')} size="3x"/></a>
       <a href="#"><FontAwesomeIcon icon={solid('paperclip')}  size="3x"/></a>
       </header>
       <img src={fullScreen} className="fullscreen-img"/>
       <img src={tablet} className="tablet-img"/>  
       <img src={phone} className="phone-img"/>        
       <article className="project-overview">
         <h1>Overview</h1>
         <p>A description of the project.</p>
       </article>
       <article className="project-features">
          <h1>Features</h1>
          <ul>
            <li>feature 1</li>
            <li>feature 2</li>
            <li>feature 3</li>
            <li>feature 4</li>
            <li>feature 5</li>
          </ul>
       </article>
       <article className="project-tech">
         <p>insert icons here</p>
       </article>
     </div>
   </section>
  )
}

export default MovieMania