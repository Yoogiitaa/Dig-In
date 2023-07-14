
import './App.css';
 //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './screens/Home'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  

} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/Login' element={<Login/>} />
          <Route exact path='/Createuser' element={<Signup/>} />
                  
                  
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
