import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './home'
import Navbar from './navBar'
import Footer from './footer'
import './App.css'
import Passions from './passions/passions'
import Resume from './resume/resume'
import Portfolio from './portfolio/portfolio'
import Contact from './contact/contact'

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/passions' component={Passions} /> 
          <Route path='/resume' component={Resume} />      
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>      
  )
}

export default App;
