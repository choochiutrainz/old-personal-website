import React from 'react'
import { useHistory } from "react-router-dom"
import chewy from './assets/logos/chewy-logo.png'
import github from './assets/logos/github-logo.png'
import linkedin from './assets/logos/linkedin-logo.png'


const NavBar = () => {

  const history = useHistory()
  const navigateToHome = () => history.push("/") 
  const navigateToPortfolio = () => history.push("/portfolio")
  const navigateToPassions = () => history.push("/passions")
  const navigateToResume = () => history.push("/resume")
  const navigateToGitHub = () => window.open("https://github.com/choochiutrainz", "_blank")
  const navigateToLinkedIn = () => window.open("https://www.linkedin.com/in/choochiutrain", "_blank")
  const navigateToContact = () => history.push("/contact") 
  const downloadResume = () => window.open("https://drive.google.com/file/d/15nBlevzEoOrFK-5z5diM_UopkqjlSCD_/view?usp=sharing", "_blank")

  const getPageHeader = () => {
    switch (window.location.pathname) {
      case "/":
        return <div>
          <h1>Leading teams to build working software that people love.</h1>
          <h4>Welcome to choochiutrain.com, the Internet home for Wesley Chiu.</h4>
          <button className="button" onClick={navigateToContact}>HIRE ME TODAY</button>
        </div>

      case "/portfolio":
        return <div className="onLightBg"><h1>See what you can expect from me.</h1></div>

      case "/passions":
        return <div className="onLightBg"><h1>{'Check out my Passions & Hobbies.'}</h1></div>
      
      case "/resume":
        return <div>
          <h1>Learn more about My Story.</h1>
          <button className="button" onClick={downloadResume}>DOWNLOAD RESUME</button>
          </div>

      case "/contact":
        return <div><h1>Let's connect today!</h1></div>

      case "/error":
        return <div>
          <h1 className="onLightBg">Oops! I can't seem to find the page you're looking for.</h1>
          <h4 className="onLightBg">May I make it up to you and take you back to the home page?</h4>
          <button className="button" onClick={navigateToHome}>TAKE ME HOME!</button>
          </div>

      default:
        break
    }
  }

  const getHeaderBackground = () => {
    switch (window.location.pathname) {
      case "/":
        return 'homeBackground'

      case "/portfolio":
        return 'portfolioBackground'

      case "/passions":
        return 'passionsBackground'

      case "/resume":
        return 'resumeBackground'

      case "/contact":
        return 'contactBackground'

      case "/error":
        return 'errorBackground'

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