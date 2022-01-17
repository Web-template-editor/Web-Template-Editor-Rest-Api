import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,
Route,
Switch}from 'react-router-dom';
import Header from './Components/Header';
import Project from './Components/Project';
import Details from './Components/Details';
import Home from './Components/Home';
import './Components/components.css';
import Media from './Components/Media';
import Welcome from './Components/Welcome';
import './App.css';

function App(){

  
    return(
      <div class='container'>
      <Router>
      <Header/>
      <Home/>
        <Switch>
        
          <Route path='/project'><Project/></Route>
          <Route path='/Details'><Details/></Route>
          <Route path='/Media'><Media/></Route>
          <Route path='/Welcome'><Welcome/></Route>
         


       
        </Switch>
      </Router>
        
      </div>
    )
  }

export default App;