import React from 'react'

function MovieMania() {
  return (
   <section>
     <div className="projects-wrapper">
       <header className="projects-header">
       <h1>Movie Mania</h1>
       <a href="#">Github link here</a>
       <a href="#">Website link here</a>
       </header>
       <img src="https://static01.nyt.com/images/2017/09/01/books/review/31PEPE2/31PEPE2-jumbo.jpg"/>       
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