import React from 'react'
import { useHistory } from "react-router-dom"
import logo from './logo-small.png'
import github from './github-logo-32px.png'
import linkedin from './linkedin-logo.png'

const NavBar = () => {

  const history = useHistory();

  function navigateToHome(){
    history.push("/");
  }

  function navigateToProjects(){
    history.push("/projects");
  }

  function navigateToPhotography(){
    history.push("/photography");
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

  return (
    <div className="navBar">
      <div className= "split left">
        <div className="button" onClick={navigateToHome}>
          <img src={logo} alt="chewy logo" />
        </div>
        <div className="button" onClick={navigateToProjects}>Projects</div>
        <div className="button" onClick={navigateToPhotography}>Photography</div>
        <div className="button" onClick={navigateToResume}>Resume</div>
      </div>
      <div className= "split right">
        <div className="button" onClick={navigateToLinkedIn}>
          <img src={linkedin} alt="linkedin" />
        </div>
        <div className="button" onClick={navigateToGitHub}>
          <img src={github} alt="github" />
        </div>
      </div>
    </div>
  )
}

export default NavBar