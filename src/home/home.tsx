import React from 'react'
import { useHistory } from "react-router-dom"
import './home.css'
import Footer from '../footer'
import wesAtSANS from '../assets/photos/wes-at-sans.jpg'
import wesWithStarfox from '../assets/photos/wes-with-starfox-2.jpg'
import wesWithCamera from '../assets/photos/wes-photographer.jpg'
import wesWithZipline from '../assets/photos/zipline-team-1.png'
import wesPortrait from '../assets/photos/wes-portrait.png'
import rogueSquadron from '../assets/photos/rogue-squadron.png'


const Home = () => {
    const history = useHistory()
    const navigateToPassions = () => history.push("/passions")
    const navigateToPortfolio = () => history.push("/portfolio")
    const navigateToContact = () => history.push("/contact")
    const navigateToS31 = () => history.push("/section-31")
    const navigateToDIUx = () => history.push("/diux")
    const navigateToRS = () => history.push("/rogue-squadron")

    return <div className="body">
        <div className="homeIntroGrid">
            <img className="homeIntroImage" src={wesPortrait} alt="Wesley's Portrait" />
            <h1 className="homeIntroHeader">{'My passion & focus is agile software development.'}</h1>
            <p className="homeIntroText">{'I strive to build & lead effective, diverse, and collaborative product teams to design & deliver a product with our users that we couldn’t have imagined alone. If you want to learn more about working together, feel free to'} <a className="lightTextLink" href="/contact">contact me.</a></p>
        </div>
        <div className="grayContainer">
            <h1 className="grayTitle">I also do portrait photography. And I like to hack things.</h1>
            <img className="grayImg" src={wesAtSANS} alt="Wes at SANS" />
            <p className="imgNotes">I am a US Air Force Cyberwarfare Officer by trade. I get a good kick out of pen-testing my home devices and participating in Capture-the-Flag events to test my skills.</p>
            <img className="grayImg1" src={wesWithCamera} alt="Wes with his Sony a7iii" />
            <p className="imgNotes1">I love capturing priceless moments on my camera and sharing the stories of amazing people that I meet around the world. I’d be honored to photograph your special occasion.</p>
            <button className="button grayButton" onClick={navigateToPassions}>SEE MY PASSIONS</button>
        </div>
        <div className="whiteFlex">
            <h1 className="onLightBg">My projects</h1>
            <p className="onLightBg">It's a wonderful opportunity to work with people who are so passionate about their craft and to enable them to achieve new heights. Take a look at my latest projects that I've been a part of.</p>
            <div className="centerContainer3">
                <img className="portfolioImage" src={wesWithStarfox} alt="Section 31" onClick={navigateToS31}/>
                <img className="portfolioImage" src={rogueSquadron} alt="Rogue Squadron" onClick={navigateToRS}/>
                <img className="portfolioImage" src={wesWithZipline} alt="DIU" onClick={navigateToDIUx}/>
            </div>
            <button className="button" onClick={navigateToPortfolio}>SEE MORE PROJECTS</button>
        </div>
        <div className="callToActionFlex">
            <h3 className="onLightBg">PRODUCT MANAGER | CYBER SECURITY PROFESSIONAL | PORTRAIT PHOTOGRAPHER</h3>
            <h1 className="onLightBg">Ready to build the next great thing together?</h1>
            <button className="button" onClick={navigateToContact}>CONTACT ME TODAY</button>
        </div>
        <Footer/>
    </div>
}

export default Home 