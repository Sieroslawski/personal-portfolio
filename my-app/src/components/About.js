import React from 'react'
import image from '../images/Adrian Sieroslawski (1).jpg'

function About() {
  return (
    <section>
        <div className="about-wrapper">                     
        <div className="description">
        <h1 className="title-description">About Me</h1>       
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <div className="skill-container">         
            <h2 className="title-description">Skills</h2>
            <p>HTML5</p>
            <p>CSS</p>
            <p>SCSS</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Angular</p>
            <p>Typescript</p>
            <p>C#</p>
            <p>ASP.NET</p>
            <p>SQL</p>
            <p>AWS</p>           
        </div>
        </div>
        <div className="headshot">
            <img src={image}></img> 
        </div>                      
    </div>
    </section>
  )
}

export default About