import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

function Projects() {
  return (
   <section className="projects">
    <h1 id="projects-header">Projects</h1>
   <div className="cards-wrapper">     
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Movie Mania</MDBCardTitle>
        <MDBCardText>
          A movie viewer application written in React.
        </MDBCardText>
        <MDBBtn href='#' color='success'>Details</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Employee Organizer</MDBCardTitle>
        <MDBCardText>
          Used LINQ queries and C# to create an employee management system with a SQLite database.
        </MDBCardText>
        <MDBBtn href='#' color='success'>Details</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Weather Viewer</MDBCardTitle>
        <MDBCardText>
          A weather viewing application written in vanilla Javascript.
        </MDBCardText>
        <MDBBtn href='#' color='success'>Details</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>ThriftBook</MDBCardTitle>
        <MDBCardText>
          An MVC project created by four students with a multitude of features.
        </MDBCardText>
        <MDBBtn href='#' color='success'>Details</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Produce - Supplier</MDBCardTitle>
        <MDBCardText>
          A program to manage suppliers and produce written in Angular, with a C# backend.
        </MDBCardText>
        <MDBBtn href='#' color='success'>Details</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard style={{ maxWidth: '22rem' }} className="card-component">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Angular-Movies</MDBCardTitle>
        <MDBCardText>
          Another movie-viewing application, but written in Angular.
        </MDBCardText>
        <MDBBtn href='#' color='success'>Details</MDBBtn>
      </MDBCardBody>
    </MDBCard>  
    </div>
   </section>
  )
}

export default Projects