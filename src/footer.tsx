import React from 'react'
import { useHistory } from "react-router-dom"

const Footer = () => {
  const history = useHistory()
  const navigateToHome = () => history.push("/") 
  const navigateToPortfolio = () => history.push("/portfolio")
  const navigateToPassions = () => history.push("/passions")
  const navigateToResume = () => history.push("/resume")
  const navigateToContact = () => history.push("/contact") 


  const getCallToAction = () => {
    switch (window.location.pathname) {
      case "/":
        return <div>
          <h3 className="onLightBg">PRODUCT MANAGER | CYBER SECURITY PROFESSIONAL | PORTRAIT PHOTOGRAPHER</h3>
          <h1 className="onLightBg">Ready to build the next great thing together?</h1>
          <button className="button" onClick={navigateToContact}>CONTACT ME TODAY</button>
        </div>
  
      case "/portfolio":
        return <div>
          <h1 className="onLightBg">Like what you see?</h1>
          <p className="onLightBg">Now that you've seen what I've done and what I can do, please feel free to contact me. I can't wait to hear your story and begin ours!</p>
          <button className="button" onClick={navigateToContact}>CONTACT ME TODAY</button>
        </div>
  
      case "/passions":
        return <div>
          <h2 className="onLightBg">Want to learn more about my main hustle?</h2>
          <p className="onLightBg">Feel free to dive deeper into what I’ve accomplished and what I can bring to you and your team.</p>
          <button className="button" onClick={navigateToResume}>VIEW MY RESUME</button>
        </div>
  
      case "/resume":
        return <div>
          <h3 className="onLightBg">PRODUCT MANAGER | CYBER SECURITY PROFESSIONAL | PORTRAIT PHOTOGRAPHER</h3>
          <h1 className="onLightBg">Ready to build the next great thing together?</h1>
          <button className="button" onClick={navigateToContact}>CONTACT ME TODAY</button>
        </div>
  
      case "/contact":
        return <h2 className="onLightBg">Hi there! Contact form is still in the works. For now, please shoot me an email at wesley.y.chiu@gmail.com. Thanks!</h2>
  
      case "/error":
        return <div></div>

      case "/section-31":
        return <h2 className="onLightBg">Check out my next project: <a className="darkTextLink" href="https://choochiutrain.com/rogue-squadron">Dowding</a></h2>

      case "/rogue-squadron":
        return <h2 className="onLightBg">Check out my next project: <a className="darkTextLink" href="https://choochiutrain.com/diux">UAS Medical Resupply</a></h2>
  
      case "/diux":
        return <h2 className="onLightBg">Check out my next project: <a className="darkTextLink" href="https://choochiutrain.com/streetcode-academy">Streetcode Academy</a></h2>

      case "/streetcode-academy":
        return <h2 className="onLightBg">Check out my next project: <a className="darkTextLink" href="https://choochiutrain.com/darpa">DARPA Swarm Drone Challenge</a></h2>

      default:
        break
    }
  }

  return (
    <div className="footer">
      <h2>Let’s write the next great success story together.</h2>
      <button className="footerButton" onClick={navigateToHome}>Home</button>
      <button className="footerButton" onClick={navigateToPortfolio}>Portfolio</button>
      <button className="footerButton" onClick={navigateToPassions}>Passions</button>
      <button className="footerButton" onClick={navigateToResume}>Resume</button>
      <button className="footerButton" onClick={navigateToContact}>Contact</button>
    </div>
  )
}

export default Footer