import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import 'animate.css';
import movieManiaReact from '../images/movie-mania.jpeg';
import employeeOrganizer  from '../images/eo.png'
import weatherimg from '../images/wv.jpeg'
import books from '../images/books.png'
import ps from '../images/ps.png'
import am from '../images/am.jpeg';
import cat from '../images/cat.jpeg';

function Projects() {



  useEffect(() => {
    window.scrollTo(0, 0)   
  }, [])

  return (
   <section className="projects">
    <h1 id="projects-header">Projects</h1>
   <div className="cards-wrapper animate__animated animate__fadeIn">     
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <MDBCardImage src={movieManiaReact} fluid alt='...' />    
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Movie Mania</MDBCardTitle>
        <MDBCardText>
          A movie viewer application written in React.
        </MDBCardText>
        <NavLink to="/movie-mania"><MDBBtn href='/movie-mania' color='success'>Details</MDBBtn></NavLink>  
      </MDBCardBody>
    </MDBCard>
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage  src={cat} fluid alt='...'/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Rate-Meow</MDBCardTitle>
        <MDBCardText>
         A serverless app for rating cats using AWS + DynamoDB, where users can comment and create posts.
        </MDBCardText>
        <NavLink to="/rate-meow"><MDBBtn href='/rate-meow' color='success'>Details</MDBBtn></NavLink>
      </MDBCardBody>
    </MDBCard>  
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={employeeOrganizer} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Employee Organizer</MDBCardTitle>
        <MDBCardText>
          Used LINQ queries and C# to create an employee management system with a SQLite database.
        </MDBCardText>
        <NavLink to="/employee-organizer"><MDBBtn href='/employee-organizer' color='success'>Details</MDBBtn></NavLink>
      </MDBCardBody>
    </MDBCard>
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={weatherimg} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Weather Viewer</MDBCardTitle>
        <MDBCardText>
          A weather viewing application written in vanilla Javascript.
        </MDBCardText>
        <NavLink to="/weather-viewer"><MDBBtn href='/weather-viewer' color='success'>Details</MDBBtn></NavLink>
      </MDBCardBody>
    </MDBCard>
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={books} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>ThriftBook</MDBCardTitle>
        <MDBCardText>
          An MVC project created by four students with a multitude of features.
        </MDBCardText>
        <NavLink to="/thrift-book"><MDBBtn href='/thrift-book' color='success'>Details</MDBBtn></NavLink>
      </MDBCardBody>
    </MDBCard>
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={ps} fluid alt='...'/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Produce - Supplier</MDBCardTitle>
        <MDBCardText>
          A program to manage suppliers and produce written in Angular, with a C# backend.
        </MDBCardText>
        <NavLink to="/produce-supplier"><MDBBtn href='/produce-supplier' color='success'>Details</MDBBtn></NavLink>
      </MDBCardBody>
    </MDBCard>
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage  src={am} fluid alt='...'/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Angular-Movies</MDBCardTitle>
        <MDBCardText>
          Another movie-viewing application, but written in Angular.
        </MDBCardText>
        <NavLink to="/angular-movies"><MDBBtn href='/angular-movies' color='success'>Details</MDBBtn></NavLink>
      </MDBCardBody>
    </MDBCard>
 
    </div>
    
   </section>
  )
}

export default Projects