import React from 'react'
import { useHistory } from "react-router-dom"
import chewy from './assets/logos/chewy-logo.png'
import github from './assets/logos/github-logo.png'
import linkedin from './assets/logos/linkedin-logo.png'
import dowding from './assets/logos/dowding-608px.png'
import starfoxLogo from './assets/logos/starfox-logo.png'
import DIULogo from './assets/logos/DIU-logo.png'
import streetcodeLogo from './assets/logos/streetcode-logo.jpg'
import swarmChallengeLogo from './assets/logos/swarm-challenge-logo.png'
import playButton from './assets/play-button.png'
import { url } from 'inspector'


const NavBar = () => {
  const history = useHistory()
  const navigateToHome = () => history.push("/") 
  const navigateToPortfolio = () => history.push("/portfolio")
  const navigateToPassions = () => history.push("/passions")
  const navigateToResume = () => history.push("/resume")
  const navigateToGitHub = () => window.open("https://github.com/choochiutrainz", "_blank")
  const navigateToLinkedIn = () => window.open("https://www.linkedin.com/in/choochiutrain", "_blank")
  const navigateToContact = () => history.push("/contact") 
  const downloadResume = () => window.open("https://drive.google.com/file/d/1t7xzj6kOU7h9LV7isqMURVoI_PXs3Oav/view", "_blank")
  const playRSVideo = () => window.open("https://www.youtube.com/watch?v=8ONrb1ddTRg&feature=emb_title")
  const playS31Video = () => window.open("https://drive.google.com/file/d/1I01UTW66S8Azc7Z0uqIlL-gfCTFxlqAc/view")
  const playDIUVideo = () => window.open("https://www.youtube.com/watch?v=FeSCEalMOL8")
  const playStreetcodeVideo = () => window.open("https://vimeo.com/249009796")
  const playDARPAVideo = () => window.open("https://www.youtube.com/watch?v=ufidH_M0RqQ")

  const getPageHeader = () => {
    switch (window.location.pathname) {
      case "/":
        return <div>
          <h1>Leading teams to build working software that people love.</h1>
          <h3>Welcome to choochiutrain.com, the Internet home for Wesley Chiu.</h3>
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
          <h3 className="onLightBg">May I make it up to you and take you back to the <a className="darkTextLink" href="/">home page?</a></h3>
          </div>

      case "/cats":
        return <div><h1 className="lgDarkBg">Oh hi!</h1></div>

      case "/rogue-squadron":
        return <div>
          <h1 className="onLightBg"><img className="iconImg" src={dowding} alt="Dowding logo" />Dowding</h1>
          <h3 className="onLightBg">The US Military's largest detection network for drone incursions.</h3>
          <h3 className="onLightBg"><img className="playButton" onClick={playRSVideo} src={playButton} alt="Play button"/>Watch Video</h3>
          </div>

      case "/section-31":
        return <div>
          <h1 className="whiteText"><img className="iconImg" src={starfoxLogo} alt="Starfox Logo"/>SureFire</h1>
          <h3 className="whiteText">Modernizing the US Space Force's RF Deconfliction capabilities to promote a safe space environment.</h3>
          <h3 className="whiteText"><img className="playButton" onClick={playS31Video} src={playButton} alt="Play button"/>Watch Video</h3>
        </div>

      case "/diux":
        return <div>
          <h1 className="onLightBg"><img className="iconImg" src={DIULogo} alt="DIU Logo"/>Drone Medical Resupply</h1>
          <h3 className="onLightBg">{'Using drones to deliver lifesaving blood & medical supplies to the front line.'}</h3>
          <h3 className="onLightBg"><img className="playButton" onClick={playDIUVideo} src={playButton} alt="Play button"/>Watch Video</h3>
        </div>

      case "/streetcode-academy":
        return <div>
          <img className="iconImg" src={streetcodeLogo} alt="Streetcode Academy Logo" />
          <h3><mark className="grayHighlight">Empowering underprivileged communities to fulfill their full potential in the tech industry.</mark></h3>
          <h3 className="onLightBg"><img className="playButton" onClick={playStreetcodeVideo} src={playButton} alt="Play button"/><mark className="grayHighlight">Watch Video</mark></h3>
        </div>      

      case "/darpa":
        return <div>
          <h1 className="onLightBg"><img className="iconImg" src={swarmChallengeLogo} alt="DARPA UAS Swarm Logo"/>DARPA Swarm UAS Challenge</h1>
          <h3 className="onLightBg"><mark className="tanHighlight">{'Trailblazing swarm drone tactics & technologies to dominate the future battlefield.'}</mark></h3>
          <h3 className="onLightBg"><img className="playButton" onClick={playDARPAVideo} src={playButton} alt="Play button"/><mark className="tanHighlight">Watch Video</mark></h3>
        </div>

      default:
        break
    }
  }

  const getHeaderBackground = () => {
    switch (window.location.pathname) {
      case "/": return 'homeBackground'

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

      case "/cats":
        return 'catsBackground'

      case "/section-31":
        return 'section31Background'

      case "/rogue-squadron":
        return 'rogueSquadronBackground'

      case "/streetcode-academy":
        return 'streetcodeBackground'

      case "/darpa":
        return 'darpaBackground'

      default:
        break
    }
  }

  const getPageVideo = () => {
    switch (window.location.pathname) {
      case "/rogue-squadron":
        return 

      case "/diux":
        return

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