import React from 'react'
import fullScreen from '../images/full.png'
import tablet from '../images/tablet.png'
import phone from '../images/phone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function ProduceSupplier() {
  return (
    <section>
    <div className="projects-wrapper">
      <header className="projects-header">
      <h1>Produce-Supplier</h1>
      <a href="https://github.com/Sieroslawski" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={brands('github-alt')} size="3x"/></a>
      <a href="#"><FontAwesomeIcon icon={solid('paperclip')}  size="3x"/></a>
      </header>
      <img src={fullScreen} className="fullscreen-img"/>
      <img src={tablet} className="tablet-img"/>  
      <img src={phone} className="phone-img"/>        
      <article className="project-overview">
        <h1>Overview</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
      <p><FontAwesomeIcon icon={brands('html5')}  size="3x" className="html5-icon"/></p>
      <p><FontAwesomeIcon icon={brands('sass')}  size="3x" className="sass-icon"/></p>
      <p><FontAwesomeIcon icon={brands('js')}  size="3x" className="js-icon"/></p>
      <p><FontAwesomeIcon icon={brands('react')}  size="3x" className="react-icon"/></p>
      </article>
    </div>
  </section>
  )
}

export default ProduceSupplier