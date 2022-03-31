import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import WeatherViewer from '../components-sub/WeatherViewer'

function PageWeatherViewer() {
  return (
    <div>
      <Nav/>
      <WeatherViewer/>
      <Footer/>
    </div>
  )
}

export default PageWeatherViewer