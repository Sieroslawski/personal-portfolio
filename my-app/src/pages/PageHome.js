import Home from '../components/Home';
import Nav from '../components/Nav'
import Footer from '../components/Footer';


function PageHome() {
  return (       
      <div className="App">
       <Nav/>
       <Home/>
       <Footer></Footer>
      </div>        
  );
}

export default PageHome;
