
import './App.css';
import Navbar from './elements/navbar';
import Home from './home/home';
import About from './about/about';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"





function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>

    </Routes>



   </Router>
  );
}

export default App;
