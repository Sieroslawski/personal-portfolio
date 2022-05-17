import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageProjects from '../pages/PageProjects';
import PageError from '../pages/PageError';
import PageMovieMania from '../pages-sub/PageMovieMania';
import PageAngularMovies from '../pages-sub/PageAngularMovies';
import PageEmployeeOrganizer from '../pages-sub/PageEmployeeOrganizer';
import PageProduceSupplier from '../pages-sub/PageProduceSupplier';
import PageThriftBook from '../pages-sub/PageThriftBook';
import PageWeatherView from '../pages-sub/PageWeatherViewer';
import PageRateMeow from '../pages-sub/PageRateMeow';

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes> 
        <Route path="/" element={<PageHome/>}/>
        <Route path="/about" element={<PageAbout/>}/>
        <Route path="/projects" element={<PageProjects/>}/>
        <Route path="/movie-mania" element={<PageMovieMania/>}/>
        <Route path="/angular-movies" element={<PageAngularMovies/>}/>
        <Route path="/employee-organizer" element={<PageEmployeeOrganizer/>}/>
        <Route path="/produce-supplier" element={<PageProduceSupplier/>}/>
        <Route path="/thrift-book" element={<PageThriftBook/>}/>
        <Route path="/weather-viewer" element={<PageWeatherView/>}/>
        <Route path="/rate-meow" element={<PageRateMeow/>}/>
        <Route path="*" element={<PageError/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
