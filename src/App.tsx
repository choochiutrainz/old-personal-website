import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './home'
import Navbar from './navBar'
import './App.css'
import Photography from './photography/photography'
import Resume from './resume/resume'
import Projects from './projects/projects'

const App = () => {

  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/photography' component={Photography} /> 
          <Route path='/resume' component={Resume} />      
          <Route path='/projects' component={Projects} />
        </Switch>
      </Router>      
  )
}

export default App;
