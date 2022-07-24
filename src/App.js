
import './App.css';
import Home from './home/home';
import About from './about/about';
import Contact from "./contact/contact"
import Menu from "./menu/menu" 

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"





function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/menu' element={<Menu/>} ></Route>

    </Routes>



   </Router>
  );
}

export default App;
