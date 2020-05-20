import React from 'react'
import { useHistory } from "react-router-dom"
import wesAtSANS from '../assets/photos/wes-at-sans.jpg'
import wesHoldingUAS from '../assets/photos/wes-holding-uas.jpg'
import wesWithStarfox from '../assets/photos/wes-with-starfox-2.jpg'

import Footer from '../footer'
import './portfolio.css'

const Portfolio = () => {

    const history = useHistory()
    
    const navigateToContact = () => 
        history.push("/contact")

    const navigateToS31 = () =>
        history.push("/section-31")

    const navigateToDARPA = () =>
        history.push("/darpa")

    const navigateToRS = () =>
        history.push("/rogue-squadron")

    const navigateToUAS = () =>
        history.push("/uas-medical-resupply")

    return <div className="body">
        <div className="introFlex">
            <h1 className="lgDarkBg">I'm always looking to solve the next big challenge</h1>
            <p className="medDarkBg">I’ve centered my career around solving compelling problems and producing real, tangible value to both the business and the end user with an inspiring team. There’s no problem that I can’t tackle. Here are some of the amazing projects that show how I made that happen.</p>
            <div className="portfolioImgFlex">
                <img className="portfolioImage" src={wesWithStarfox} alt="Wes with Starfox" onClick={navigateToS31}/>
                <img className="portfolioImage" src={wesAtSANS} alt="Wes at SANS" onClick={navigateToRS}/>
                <img className="portfolioImage" src={wesHoldingUAS} alt="Wes holding a UAS" onClick={navigateToDARPA}/>
            </div>
        </div>
        <div className="callToActionFlex">
            <h1 className="onLightBg">Like what you see?</h1>
            <p className="onLightBg">Now that you've seen what I've done and what I can do, please feel free to contact me. I can't wait to hear your story and begin ours!</p>
            <button className="button" onClick={navigateToContact}>CONTACT ME TODAY</button>
        </div>
        <Footer/>
    </div>
}

export default Portfolio