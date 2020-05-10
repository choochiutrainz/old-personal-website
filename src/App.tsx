import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './home'
import Navbar from './navBar'
import './App.css'
import Photography from './photography/photography'
import Resume from './resume/resume'

const App = () => {

  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/photography' component={Photography} /> 
          <Route exact path='/resume' component={Resume} />      
        </Switch>
      </Router>      
  )
}

export default App;
