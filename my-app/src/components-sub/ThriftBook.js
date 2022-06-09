import React from 'react'
import { useEffect } from 'react'
import ParticleBackground from '../components/Particles'
import fullScreen from '../images/thriftbook-desktop.png'
import phone from '../images/thriftbook-phone.png'
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import ReactTooltip from 'react-tooltip';
import 'animate.css';

function ThriftBook() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section>
    <div className="projects-wrapper animate__animated animate__fadeIn" id="pj">
    <ScrollToTop smooth color="#5cb85c"/>
      <header className="projects-header">
      <h1>ThriftBook</h1>
      <a href="https://github.com/tingdeng86/ThriftBook_phase2" target="_blank" rel="noopener noreferrer" data-tip data-for="git"><FontAwesomeIcon icon={brands('github-alt')} size="3x"/></a>     
      <ReactTooltip id="git" place="bottom" effect="solid">View Repository</ReactTooltip>      
      </header>
      <img src={fullScreen} className="fullscreen-img animate__animated animate__fadeIn" id="full-screen"/>
       <img src={phone}  id="phone-img"/>         
      <article className="project-overview animate__animated animate__fadeIn">
        <h1>Overview</h1>
        <p>This is a project developed by my self and three other students using MVC with Razer Pages in ASP.net + SQL backend with CSS + Bootstrap for styling. 
          It's a fully functioning used book store that uses paypal to allow you to purchase books, and contains all other features you would find in an online store.</p>
      </article>
      <article className="project-features animate__animated animate__fadeIn">
         <h1>Features</h1>
         <ul>
           <li>Email and user registration features.</li>
           <li>Paypal integration.</li>
           <li>Invoicing system + download to CSV file</li>
           <li>Sort books by genre, author and price.</li>
           <li>View lists of all customers.</li>
           <li>Book rating system.</li>
           <li>Search inventory feature.</li>
           <li>Fully functioning add to cart system.</li>
           <li>Manager area for administrative functions that aren't visible to the user</li>
           <li>Fully responsive.</li>
         </ul>
      </article>
      <article className="project-tech animate__animated animate__fadeIn">    
      <p><FontAwesomeIcon icon={brands('js')}  size="3x" className="js-icon"/></p>
      <p><svg width="52px" height="52px" enable-background="new 0 0 504 504" id="Layer_1" version="1.1" viewBox="0 0 504 504">
      <path d="M454.6,256.6c-9.2,58.5-27.1,75.6-58.8,114.9c-31.7,33.3-77.3,88.9-141.9,85.8  c-58.5-9.2-75.6-27.1-114.9-58.8c-33.3-31.7-88.9-77.3-85.8-141.9c9.2-58.5,27.1-75.6,58.8-114.9c31.7-33.3,77.3-88.9,141.9-85.8  c58.5,9.2,75.6,27.1,114.9,58.8C402.1,146.4,457.7,192,454.6,256.6z" fill="#3765AF"/><g>
      <path d="M137,282.4h-23.2l-3.2,12H89.8l24.8-72.8h22.2l24.8,72.8h-21.3L137,282.4L137,282.4z M132.7,266.7   l-7.3-26.2l-7.2,26.2H132.7L132.7,266.7z M153.2,270.3l19.4-1.4c0.5,3.5,1.3,6.1,2.6,7.9c2.1,2.9,5.1,4.4,9,4.4   c2.9,0,5.1-0.7,6.7-2.3c1.5-1.5,2.4-3.3,2.4-5.2c0-1.9-0.7-3.6-2.3-5.1c-1.5-1.5-5-2.9-10.4-4.2c-8.9-2.2-15.3-5.2-19.1-8.8   c-3.8-3.6-5.7-8.4-5.7-14c0-3.7,1-7.3,2.9-10.6c2-3.3,4.9-5.9,8.8-7.8c3.9-1.9,9.3-2.8,16.2-2.8c8.4,0,14.9,1.7,19.2,5.2   c4.4,3.5,7,8.9,7.8,16.5l-19.2,1.3c-0.5-3.3-1.5-5.7-3.2-7.2c-1.6-1.5-3.9-2.2-6.7-2.2c-2.4,0-4.2,0.5-5.4,1.6   c-1.2,1.1-1.8,2.5-1.8,4c0,1.2,0.5,2.2,1.5,3.1c1,1,3.3,1.8,6.8,2.6c8.9,2.1,15.2,4.3,19.1,6.5c3.8,2.2,6.7,4.8,8.4,8.1   c1.7,3.2,2.6,6.8,2.6,10.8c0,4.6-1.2,8.9-3.6,12.9c-2.4,3.9-5.6,6.9-9.8,8.9c-4.2,2-9.5,3-15.9,3c-11.2,0-19-2.4-23.2-7.2   C156.3,283.7,153.8,277.7,153.2,270.3L153.2,270.3z M212,221.6h33.8c7.4,0,12.9,1.9,16.6,5.8c3.6,3.8,5.5,9.4,5.5,16.5   c0,7.4-2,13.1-6,17.2c-4,4.1-10.1,6.2-18.3,6.2h-11.1v27.1H212V221.6L212,221.6z M232.4,252.6h5c3.9,0,6.7-0.7,8.3-2.3   c1.5-1.5,2.4-3.5,2.4-5.7s-0.7-4.3-2.1-5.8s-3.9-2.4-7.7-2.4h-5.8V252.6L232.4,252.6z" fill="#FFFFFF"/>
      <path d="M276,293.6v-62.1h8.3v8.8c4-6.8,9.8-10.2,17.3-10.2c3.3,0,6.3,0.6,9,2s4.8,3.1,6.2,5.3   c1.4,2.2,2.3,4.7,2.9,7.7c0.4,1.9,0.5,5.4,0.5,10.2v38.1h-9.2v-37.7c0-4.3-0.4-7.5-1.1-9.6c-0.7-2.1-2-3.8-3.8-5.1   c-1.8-1.3-4-1.9-6.5-1.9c-3.9,0-7.3,1.5-10.2,4.3c-2.8,2.8-4.3,8.2-4.3,16.2v33.9L276,293.6L276,293.6z M371.5,273.6l9.5,1.4   c-1.5,6.4-4.3,11.3-8.3,14.8c-4.1,3.5-9.3,5.3-15.6,5.3c-7.9,0-14.2-2.8-18.9-8.4c-4.6-5.6-7-13.4-7-23.5c0-10.5,2.4-18.5,7-24.3   c4.7-5.7,10.8-8.7,18.3-8.7c7.3,0,13.2,2.8,17.8,8.5c4.6,5.7,6.9,13.6,6.9,23.8c0,0.6,0,1.5-0.1,2.8h-40.6c0.4,6.8,2,12,5.1,15.7   c3,3.6,6.8,5.5,11.4,5.5c3.4,0,6.3-1,8.7-3C368.2,281.3,370.1,278,371.5,273.6L371.5,273.6z M341.2,256.6h30.4   c-0.4-5.2-1.5-9.1-3.5-11.8c-2.9-4-6.7-6.1-11.4-6.1c-4.2,0-7.7,1.6-10.7,4.8C343.1,246.8,341.6,251.2,341.2,256.6L341.2,256.6z    M412.7,284.2l1.4,9.3c-2.6,0.6-4.9,0.9-6.9,0.9c-3.4,0-5.9-0.6-7.7-1.8c-1.8-1.2-3.1-2.8-3.9-4.7c-0.7-1.9-1.1-6.1-1.1-12.4v-35.7   H365v-8.2h29.4v-15.4l9.2-6.3v21.7h9.3v8.2h-9.3V276c0,3,0.2,4.9,0.5,5.7c0.4,0.8,0.8,1.5,1.5,2.1c0.7,0.5,1.8,0.7,3.1,0.7   C409.7,284.6,411.1,284.5,412.7,284.2L412.7,284.2z" fill="#FFFFFF"/>
      <path d="M262.3,277.5c4,0,7.4,3.4,7.4,7.5c0,4.1-3.3,7.5-7.4,7.5c-4,0-7.4-3.4-7.4-7.5   C254.9,280.9,258.2,277.5,262.3,277.5L262.3,277.5z" fill="#FFFFFF"/></g></svg></p>
      <p><svg fill="none" height="42px" viewBox="204.925 153.577 757.617 860.543" width="42px" xmlns="http://www.w3.org/2000/svg">
      <path d="m962.541 407.983c0-14.237-3.034-27.074-9.336-37.811-6.068-10.736-15.171-19.605-27.307-26.607-100.829-58.117-201.891-116.233-302.72-174.35-27.308-15.638-53.449-15.171-80.523.7-40.145 23.574-241.336 138.873-301.086 173.65-24.741 14.237-36.644 36.177-36.644 64.652v351.033c0 14.004 3.034 26.374 8.869 37.111 6.069 10.97 15.405 20.306 27.775 27.541 59.984 34.777 260.941 149.843 301.086 173.65 27.074 15.868 53.448 16.568 80.523.7 100.829-58.35 201.891-116.233 302.72-174.35 12.603-7.235 21.706-16.338 27.774-27.541 5.835-10.737 8.869-23.107 8.869-37.111z" fill="#9a4993"/>
      <path d="m584.667 582.333-371.34 213.794c6.069 10.97 15.405 20.306 27.775 27.542 59.984 34.776 260.941 149.842 301.086 173.649 27.074 15.872 53.449 16.572 80.523.7 100.829-58.35 201.891-116.233 302.72-174.349 12.603-7.236 21.706-16.338 27.774-27.542z" fill="#6a1577"/><path d="m474.735 645.584c21.707 37.811 62.318 63.252 108.765 63.252 46.913 0 87.758-25.674 109.231-63.952l-108.064-62.551z" fill="#6a1577"/>
      <path d="m962.542 407.983c0-14.237-3.035-27.074-9.336-37.811l-368.539 212.161 369.005 213.795c5.835-10.737 8.87-23.107 8.87-37.111z" fill="#813084"/><g fill="#fff">
      <path d="m692.731 644.884c-21.472 38.044-62.317 63.952-109.231 63.952-46.68 0-87.291-25.441-108.764-63.252-10.503-18.438-16.572-39.444-16.572-62.084 0-69.32 56.016-125.336 125.336-125.336 46.213 0 86.592 25.207 108.298 62.551l109.464-63.018c-43.645-75.154-124.869-125.802-217.995-125.802-139.107 0-251.605 112.732-251.605 251.605 0 45.513 12.136 88.459 33.376 125.336 43.412 75.388 125.102 126.269 218.462 126.269 93.594 0 175.284-51.114 218.696-126.969zm138.406-120.901h-24.974v120.668h24.974zm55.316 0h-24.974v120.668h24.974z"/>
      <path d="m906.759 544.289h-120.668v24.974h120.668zm0 55.082h-120.668v24.974h120.668z"/></g></svg></p>
      <p><FontAwesomeIcon icon={solid('database')}  size="3x" className="sql-icon"/></p>
      <p><FontAwesomeIcon icon={brands('html5')}  size="3x" className="html5-icon"/></p>
      <p><FontAwesomeIcon icon={brands('css3')}  size="3x" className="css-icon"/></p>
      </article>
    </div>
    <ParticleBackground className="particles"/>  
  </section>
  )
}

export default ThriftBook