import React from 'react'
import { useHistory } from "react-router-dom"
import chewy from './chewy-logo.png'
import github from './github-logo.png'
import linkedin from './linkedin-logo.png'

const NavBar = () => {

  const history = useHistory();

  function navigateToHome(){ history.push("/") }

  function navigateToPortfolio(){
    history.push("/portfolio");
  }

  function navigateToPassions(){
    history.push("/passions");
  }

  function navigateToResume(){
    history.push("/resume");
  }

  function navigateToGitHub(){
    window.open("https://github.com/choochiutrainz", "_blank");
  }

  function navigateToLinkedIn(){
    window.open("https://www.linkedin.com/in/choochiutrain", "_blank");
  }

  function navigateToContact(){
    history.push("/contact");
  }

  return (
    <div className="navBar container">
      <div className="header">
        <div className='leftGroup'>
          <img className='iconButton' onClick={navigateToHome} src={chewy} alt="Home" />
        </div>
        <div className="centerGroup">
          <div className="navBarButton" onClick={navigateToPortfolio}>Portfolio</div>
          <div className="navBarButton" onClick={navigateToPassions}>Passions</div>
          <div className="navBarButton" onClick={navigateToResume}>Resume</div>
        </div>
        <div className='rightGroup'>
          <div className="navBarButton" onClick={navigateToContact}>Contact</div>
          <img className="iconButton" onClick={navigateToGitHub} src={github} alt="GitHub" />
          <img className="iconButton" onClick={navigateToLinkedIn} src={linkedin} alt="LinkedIn" />
        </div>
      </div>
      <div className="headerText">
        <h1>Leading teams to build working software that people love.</h1>
        <p>Welcome to choochiutrain.com, the Internet home for Wesley Chiu.</p>
        <button className="button" onClick={navigateToContact}>HIRE ME TODAY</button>
      </div>
    </div>
  )
}

export default NavBar