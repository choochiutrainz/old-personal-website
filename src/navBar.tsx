import React from 'react'
import { useHistory } from "react-router-dom"
import logo from './logo-small.png'
import github from './github-logo-32px.png'

const NavBar = () => {

  const history = useHistory();

  function navigateToHome(){
    history.push("/");
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

  return (
    <div className="navBar">
      <div className="button" onClick={navigateToHome}>
        <img src={logo} alt="chewy logo" />
      </div>
      <div className="button" onClick={navigateToPhotography}>Photography</div>
      <div className="button" onClick={navigateToResume}>Resume</div>
      <div className="button" onClick={navigateToGitHub}>
        <img src={github} alt="chewy's github" />
      </div>      
    </div>
  )
}

export default NavBar