import React from 'react'
import fullScreen from '../images/ps-desktop.png'
import { useEffect } from 'react'
import ParticleBackground from '../components/Particles'
import ScrollToTop from "react-scroll-to-top";
import phone from '../images/ps-phone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import ReactTooltip from 'react-tooltip';
import 'animate.css';

function ProduceSupplier() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section>
    <div className="projects-wrapper animate__animated animate__fadeIn" id="ps">
    <ScrollToTop smooth color="#5cb85c"/>
      <header className="projects-header">
      <h1>Produce-Supplier</h1>
      <a href="https://github.com/Sieroslawski/ProduceSupplier-Backend" target="_blank" rel="noopener noreferrer" data-tip data-for="backend"><FontAwesomeIcon icon={brands('github-alt')} size="3x"/></a>
      <a href="https://github.com/Sieroslawski/ProduceSupplier-Frontend" target="_blank" rel="noopener noreferrer" data-tip data-for="frontend"><FontAwesomeIcon icon={brands('github-alt')} size="3x"/></a>
      <ReactTooltip id="backend" place="bottom" effect="solid">Backend</ReactTooltip>
      <ReactTooltip id="frontend" place="bottom" effect="solid">Frontend</ReactTooltip>
      </header>
      <img src={fullScreen} className="fullscreen-img" id="full-screen"/>
       <img src={phone}  id="phone-img"/>            
      <article className="project-overview">
        <h1>Overview</h1>
        <p>Implemented an ASP.NET Core API backend (with SQL) 
          and an Angular frontend to create a functional and user-friendly customer ordering management system to perform CRUD operations.</p>
      </article>
      <article className="project-features">
         <h1>Features</h1>
         <ul>
           <li>Create, read, update, delete produce in the database</li>
           <li>Create, read, update, delete suppliers in the database</li>
           <li>Fully responsive</li>         
         </ul>
      </article>
      <article className="project-tech">
      <p><FontAwesomeIcon icon={brands('angular')}  size="3x" className="angular-icon"/></p>
      <p><svg width="42px" height="42px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" >
	    <g>
		  <polygon fill="#007ACC" transform="translate(128.000000, 128.000000) scale(1, -1) translate(-128.000000, -128.000000) " points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256"></polygon>
		  <path d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z" fill="#FFFFFF" transform="translate(101.634640, 176.142993) rotate(-180.000000) translate(-101.634640, -176.142993) "></path>
		  <path d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z" fill="#FFFFFF" transform="translate(194.578507, 176.190240) scale(1, -1) translate(-194.578507, -176.190240) "></path>
	    </g>
      </svg></p>
      <p><svg fill="none" height="42px" viewBox="204.925 153.577 757.617 860.543" width="42px" xmlns="http://www.w3.org/2000/svg">
      <path d="m962.541 407.983c0-14.237-3.034-27.074-9.336-37.811-6.068-10.736-15.171-19.605-27.307-26.607-100.829-58.117-201.891-116.233-302.72-174.35-27.308-15.638-53.449-15.171-80.523.7-40.145 23.574-241.336 138.873-301.086 173.65-24.741 14.237-36.644 36.177-36.644 64.652v351.033c0 14.004 3.034 26.374 8.869 37.111 6.069 10.97 15.405 20.306 27.775 27.541 59.984 34.777 260.941 149.843 301.086 173.65 27.074 15.868 53.448 16.568 80.523.7 100.829-58.35 201.891-116.233 302.72-174.35 12.603-7.235 21.706-16.338 27.774-27.541 5.835-10.737 8.869-23.107 8.869-37.111z" fill="#9a4993"/>
      <path d="m584.667 582.333-371.34 213.794c6.069 10.97 15.405 20.306 27.775 27.542 59.984 34.776 260.941 149.842 301.086 173.649 27.074 15.872 53.449 16.572 80.523.7 100.829-58.35 201.891-116.233 302.72-174.349 12.603-7.236 21.706-16.338 27.774-27.542z" fill="#6a1577"/><path d="m474.735 645.584c21.707 37.811 62.318 63.252 108.765 63.252 46.913 0 87.758-25.674 109.231-63.952l-108.064-62.551z" fill="#6a1577"/>
      <path d="m962.542 407.983c0-14.237-3.035-27.074-9.336-37.811l-368.539 212.161 369.005 213.795c5.835-10.737 8.87-23.107 8.87-37.111z" fill="#813084"/><g fill="#fff">
      <path d="m692.731 644.884c-21.472 38.044-62.317 63.952-109.231 63.952-46.68 0-87.291-25.441-108.764-63.252-10.503-18.438-16.572-39.444-16.572-62.084 0-69.32 56.016-125.336 125.336-125.336 46.213 0 86.592 25.207 108.298 62.551l109.464-63.018c-43.645-75.154-124.869-125.802-217.995-125.802-139.107 0-251.605 112.732-251.605 251.605 0 45.513 12.136 88.459 33.376 125.336 43.412 75.388 125.102 126.269 218.462 126.269 93.594 0 175.284-51.114 218.696-126.969zm138.406-120.901h-24.974v120.668h24.974zm55.316 0h-24.974v120.668h24.974z"/>
      <path d="m906.759 544.289h-120.668v24.974h120.668zm0 55.082h-120.668v24.974h120.668z"/></g></svg></p>
      <p><FontAwesomeIcon icon={brands('css3')}  size="3x" className="css-icon"/></p>
      <p><FontAwesomeIcon icon={solid('database')}  size="3x" className="sql-icon"/></p>
      </article>
    </div>
    <ParticleBackground className="particles"/>  
  </section>
  )
}

export default ProduceSupplier