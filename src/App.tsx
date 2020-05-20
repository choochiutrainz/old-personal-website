import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Redirect } from 'react-router-dom';
import './App.css'
import Navbar from './navBar'
import Error from './error'
import Home from './home/home'
import Passions from './passions/passions'
import Resume from './resume/resume'
import Portfolio from './portfolio/portfolio'
import Contact from './contact/contact'
import DARPA from './portfolio/darpa'
import Section31 from './portfolio/section-31'
import UASMedical from './portfolio/uas-medical-resupply'
import RogueSquadron from './portfolio/rogue-squadron'

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
          <Route path='/darpa' component={DARPA} />
          <Route path='/section-31' component={Section31} />
          <Route path='/rogue-squadron' component={RogueSquadron} />
          <Route path='/uas-medical-resupply' component={UASMedical} />
          <Route path='/error' component={Error} />
          <Route path='*' render={() => <Redirect to={{pathname: "/error"}} />} />
        </Switch>
      </Router>      
  )
}

export default App;
