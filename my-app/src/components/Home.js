import React from 'react'
import Footer from '../components/Footer';
import ParticleBackground from './Particles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import 'animate.css';

function Home() {
  return (
      <section>
         <div className="content-wrapper animate__animated animate__fadeIn">
         <div className="home-text">           
             <h1>Adrian <font color="#5cb85c">Sieroslawski</font></h1>
             <p><font color="#5cb85c">Full-Stack</font> Web Developer<font color="#5cb85c">.</font></p>
         </div>                      
         <div className="button-links">
         <a href="https://github.com/Sieroslawski" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={brands('github-alt')} /> Github</a>
         <a href="https://www.linkedin.com/in/s-adrian/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={brands('linkedin')} /> LinkedIn</a>
         <a href="mailto:adrian.sieroslawski@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={solid('envelope')} /> Email</a>      
         </div>        
         <div className="footer">                 
        </div>        
         </div>       
         <Footer/>
         <ParticleBackground className="particles"/>
      </section>
    
  )
}
export default Home