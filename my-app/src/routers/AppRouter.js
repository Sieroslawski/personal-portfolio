import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import PageHome from '../PageHome';

function AppRouter() {
  return (
      <BrowserRouter>
      <div className="wrapper">
         <PageHome/>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
