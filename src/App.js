import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from "./Home/Home"
import About from './About/About'; 
import Contact from './Contact/Contact'; 
import Service from './Servicepage/Service'; 
import Navbar from './Navbar/Navbar'; 

import Footer from './Footer/Footer';   






function App() {
  return (
    <div className="App">

      <Navbar/>
      
      <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/about' element={ <About/>} />
          <Route path='/service' element={ <Service/>} />
          
          <Route path='/contact' element={ <Contact/>} />
       
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
