import React from 'react'
import { useEffect } from 'react'
import tablet from '../images/weather-tablet.png'
import ParticleBackground from '../components/Particles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import ScrollToTop from "react-scroll-to-top";
import ReactTooltip from 'react-tooltip';
import 'animate.css'

function WeatherViewer() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section>
    <div className="projects-wrapper" id="wv">
    <ScrollToTop smooth color="#5cb85c"/>
      <header className="projects-header animate__animated animate__fadeIn">
      <h1>Weather Viewer</h1>
      <a href="https://github.com/Sieroslawski/weatherwebsite" target="_blank" rel="noopener noreferrer" data-tip data-for="git"><FontAwesomeIcon icon={brands('github-alt')} size="3x"/></a>
      <a href="https://628a82225a97cd13bf54ec97--cosmic-capybara-c75a2b.netlify.app/sevenday.html" data-tip data-for="website"><FontAwesomeIcon icon={solid('paperclip')}  size="3x"/></a>
      <ReactTooltip id="git" place="bottom" effect="solid">View Repository</ReactTooltip>
       <ReactTooltip id="website" place="bottom" effect="solid">Live Site</ReactTooltip>
      </header>         
      <img src={tablet} className="tablet-img" className="fullscreen-img animate__animated animate__fadeIn" id="employee-org-img"/>       
      <article className="project-overview animate__animated animate__fadeIn">
        <h1>Overview</h1>
        <p>Weather-Viewer is a project I created when I was teaching myself vanilla javascript, CSS, and a bit about APIs during the first wave of COVID during lockdowns. 
          This program allows you to query the openweather API and view weather data hourly, current weather and for the next 7 days, as well as convert from celsius to fahreinheit.
          No guides or tutorials were used when creating this, I simply started coding and using Google until it was a completed project.</p>
      </article>
      <article className="project-features animate__animated animate__fadeIn">
         <h1>Features</h1>
         <ul>
           <li>View current weather</li>
           <li>View hourly weather for the next 24 hours</li>
           <li>View next 7 days</li>
           <li>Convert tempuratures between Celcius and Fahreinheit</li>           
         </ul>
      </article>
      <article className="project-tech animate__animated animate__fadeIn">
      <p><FontAwesomeIcon icon={brands('html5')}  size="3x" className="html5-icon"/></p>    
      <p><FontAwesomeIcon icon={brands('js')}  size="3x" className="js-icon"/></p>
      <p><FontAwesomeIcon icon={brands('css3')}  size="3x" className="css-icon"/></p>    
      </article>
    </div>
    <ParticleBackground className="particles"/>  
  </section>
  )
}

export default WeatherViewer