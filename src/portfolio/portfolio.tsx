import React from 'react'
import { useHistory } from "react-router-dom"
import wesAtSANS from '../wes-at-sans.jpg'
import './portfolio.css'

const Portfolio = () => {

    const history = useHistory();
    
    function navigateToContact(){
        history.push("/contact");
    }

    return <div className="body">
        <div className="introFlex">
            <h1 className="lgDarkBg">I'm always looking to solve the next big challenge</h1>
            <p className="medDarkBg">I’ve centered my career around solving compelling problems and producing real, tangible value to both the business and the end user with an inspiring team. There’s no problem that I can’t tackle. Here are some of the amazing projects that show how I made that happen.</p>
            <div className="portfolioImgFlex">
                <img className="portfolioImage" src={wesAtSANS} alt="Wes at SANS" />
                <img className="portfolioImage" src={wesAtSANS} alt="Wes at SANS" />
                <img className="portfolioImage" src={wesAtSANS} alt="Wes at SANS" />
            </div>
        </div>
        <div className="callToActionFlex">
            <h1 className="onLightBg">Like what you see?</h1>
            <p className="onLightBg">Now that you've seen what I've done and what I can do, please feel free to contact me. I can't wait to hear your story and begin ours!</p>
            <button className="button" onClick={navigateToContact}>CONTACT ME TODAY</button>
        </div>
    </div>
}

export default Portfolio