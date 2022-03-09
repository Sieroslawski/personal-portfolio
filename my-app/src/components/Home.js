import React from 'react'
import Footer from '../components/Footer';
import ParticleBackground from './Particles';

function Home() {
  return (
      <section>
         <div className="content-wrapper">           
             <h1>Adrian Sieroslawski</h1>
             <p>Full-Stack Web Developer.</p>         
         <div className="button-links">
         <a href="https://github.com/Sieroslawski">Github</a>
         <a href="https://www.linkedin.com/in/adrian-sieroslawski-7aa411228/">LinkedIn</a>       
         </div>        
         <div className="footer">         
        <Footer/>
        </div>
        
         </div>
         <ParticleBackground className="particles"/>
      </section>
    
  )
}
export default Home