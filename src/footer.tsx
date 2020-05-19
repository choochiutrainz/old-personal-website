import React from 'react'
import { useHistory } from "react-router-dom"

const Footer = () => {

  const history = useHistory()

  const navigateToHome = () =>
    history.push("/") 

  const navigateToPortfolio = () =>
    history.push("/portfolio")

  const navigateToPassions = () =>
    history.push("/passions")

  const navigateToResume = () => 
    history.push("/resume")

  const navigateToContact = () => 
    history.push("/contact") 

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