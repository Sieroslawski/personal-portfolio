import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import MovieMania from '../components-sub/MovieMania';

function PageMovieMania() {
  return (
    <div>
        <Nav/>
        <MovieMania/>
        <Footer/>
    </div>
  )
}

export default PageMovieMania