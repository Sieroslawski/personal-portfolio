import Home from '../components/Home';
import Nav from '../components/Nav'
import Footer from '../components/Footer';


function PageHome() {
  return (       
      <div className="App">
       <Nav/>
       <div className="test">
       <Home/>
       <Footer/>
       </div>
      </div>        
  );
}

export default PageHome;
