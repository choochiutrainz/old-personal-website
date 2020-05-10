import React, { Component } from 'react'
import { FaAlignRight } from 'react-icons/fa'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import logo from './logo-small.png'
import Home from './home'
import './App.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Photography from './photography/photography'
import Resume from './resume/resume'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);


const App = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
    <AppBar position="static">
    <Toolbar>
        <IconButton><img src={logo} alt="logo"onClick={() => { console.log('clicked it!')}}/></IconButton>
        <Button color="inherit" href="/photography">Photography</Button>
        <Button color="inherit" href="/resume">Resume</Button>
    </Toolbar>
    </AppBar>
    <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/photography' component={Photography} /> 
          <Route path='/resume' component={Resume} />      
        </Switch>
      </Router>
    </div>      
  )
}

export default App;
