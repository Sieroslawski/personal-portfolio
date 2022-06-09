import React from 'react'
import { useEffect } from 'react'
import fullScreen from '../images/full-generic.png'
import phone from '../images/cat-phone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollToTop from "react-scroll-to-top";
import ParticleBackground from '../components/Particles'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import ReactTooltip from 'react-tooltip';
import 'animate.css';

function RateMeow() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section>
     <div className="projects-wrapper">
     <ScrollToTop smooth color="#5cb85c"/>
       <header className="projects-header animate__animated animate__fadeIn">
       <h1>Rate Meow</h1>
       <a href="https://github.com/Sieroslawski/cat-adoption-app" target="_blank" rel="noopener noreferrer"  data-tip data-for="git"><FontAwesomeIcon icon={brands('github-alt')} size="3x"/></a>
       <a href="https://master.d1t1iw51a60mr9.amplifyapp.com/" target="_blank" data-tip data-for="website"><FontAwesomeIcon icon={solid('paperclip')}  size="3x"/></a>
       <ReactTooltip id="git" place="bottom" effect="solid">View Repository</ReactTooltip>
       <ReactTooltip id="website" place="bottom" effect="solid">Live Site</ReactTooltip>
       </header>
       <img src={fullScreen} className="fullscreen-img animate__animated animate__fadeIn" id="full-screen"/>       
       <img src={phone} className="phone-img animate__animated animate__fadeIn" id="phone-img"/>        
       <article className="project-overview animate__animated animate__fadeIn">
         <h1>Overview</h1>
         <p>A serverless app for rating cats using AWS + DynamoDB, where users can comment and create posts, created with Amplify.</p>
       </article>
       <article className="project-features animate__animated animate__fadeIn">
          <h1>Features</h1>
          <ul>
            <li>Two different resources for CRUD operations, using NodeJS and DynamoDB.</li>
            <li>Used an S3 bucket to store image data.</li>
            <li>Used DynamoDB (NoSQL) to create tables and do CRUD operations on them.</li>
            <li>Added user Auth with Amazon Cognito through Amplify.</li>
            <li>A Fully responsive React frontend.</li>
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

export default RateMeow