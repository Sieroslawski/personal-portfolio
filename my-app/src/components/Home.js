import React from 'react'
import Footer from '../components/Footer';

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
      </section>
    
  )
}
export default Home