import React from 'react'
import { useHistory } from "react-router-dom"
import chewy from './assets/logos/chewy-logo.png'
import github from './assets/logos/github-logo.png'
import linkedin from './assets/logos/linkedin-logo.png'
import { render } from '@testing-library/react'

const NavBar = () => {

  const history = useHistory();

  const navigateToHome = () =>
    history.push("/") 

  const navigateToPortfolio = () =>
    history.push("/portfolio")

  const navigateToPassions = () =>
    history.push("/passions")

  const navigateToResume = () => 
    history.push("/resume")

  const navigateToGitHub = () => 
    window.open("https://github.com/choochiutrainz", "_blank")

  const navigateToLinkedIn = () => 
    window.open("https://www.linkedin.com/in/choochiutrain", "_blank")

  const navigateToContact = () => 
    history.push("/contact") 

  const downloadResume = () => {
  }

  const getPageHeader = () => {
    switch (window.location.pathname) {
      case "/":
        return <div>
          <h1>Leading teams to build working software that people love.</h1>
          <p>Welcome to choochiutrain.com, the Internet home for Wesley Chiu.</p>
          <button className="button" onClick={navigateToContact}>HIRE ME TODAY</button>
        </div>
        break

      case "/portfolio":
        return <div><h1>See what you can expect from me.</h1></div>
        break

      case "/passions":
        return <div><h1>{'Check out my Passions & Hobbies.'}</h1></div>
        break
      
      case "/resume":
        return <div>
          <h1>Learn more about My Story.</h1>
          <button className="button" onClick={downloadResume}>DOWNLOAD RESUME</button>
          </div>
        break

      case "/contact":
        return <div><h1>Let's connect today!</h1></div>
        break

      default:
        break
    }
  }

  const getHeaderBackground = () => {
    switch (window.location.pathname) {
      case "/":
        return 'homeBackground'
        break

      case "/portfolio":
        return 'portfolioBackground'
        break

      case "/passions":
        return 'passionsBackground'
        break

      case "/resume":
        return 'resumeBackground'
        break

      case "/contact":
        return 'contactBackground'
        break

      default:
        break
    }
  }

  return (
    <div className={`navBar headerContainer ${getHeaderBackground()}`}>
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
      <div className="headerText">{getPageHeader()}</div>
  </div>
  )
}

export default NavBar