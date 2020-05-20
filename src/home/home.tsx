import React from 'react'
import { useHistory } from "react-router-dom"
import './home.css'
import Footer from '../footer'
import wesInSpace from '../assets/photos/wes-in-space.jpg'
import wesAtSANS from '../assets/photos/wes-at-sans.jpg'
import wesHoldingUAS from '../assets/photos/wes-holding-uas.jpg'
import wesWithStarfox from '../assets/photos/wes-with-starfox-2.jpg'
import wesWithCamera from '../assets/photos/wes-photographer.jpg'


const Home = () => {

    const history = useHistory()
    const navigateToPassions = () => history.push("/passions")
    const navigateToPortfolio = () => history.push("/portfolio")
    const navigateToContact = () => history.push("/contact")
    const navigateToS31 = () => history.push("/section-31")
    const navigateToDARPA = () => history.push("/darpa")
    const navigateToRS = () => history.push("/rogue-squadron")

    return <div className="body">
        <div className="homeIntroGrid">
            <img className="homeIntroImage" src={wesInSpace} alt="Wes in Space" />
            <h1 className="homeIntroHeader">{'My passion & focus is agile software development.'}</h1>
            <p className="homeIntroText">{'I strive to build & lead effective, diverse, and collaborative product teams to design & deliver a product with our users that we couldn’t have imagined alone. If you want to learn more about working together, feel free to contact me'}</p>
        </div>
        <div className="grayFlex">
            <h1 className="onLightBg">I also do portrait photography. And I like to hack things.</h1>
            <div className="centerContainer2">
                <div className="leftContainer2">
                    <img className="medImg" src={wesAtSANS} alt="Wes at SANS" />
                    <p className="onLightBg">I am a US Air Force Cyberwarfare Officer by trade. I get a good kick out of pen-testing my home devices and participating in Capture-the-Flag (CTF) events to test my skills.</p>
                </div>
                <div className="rightContainer2">
                    <img className="medImg" src={wesWithCamera} alt="Wes with his Sony a7iii" />
                    <p className="onLightkBg">I love capturing priceless moments on my camera and sharing the stories of amazing people that I meet around the world. I’d be honored to photograph your special occasion.</p>
                </div>
            </div>
            <button className="button" onClick={navigateToPassions}>SEE MY PASSIONS</button>
        </div>
        <div className="whiteFlex">
            <h1 className="onLightBg">My projects</h1>
            <p className="onLightBg">It's a wonderful opportunity to work with people who are so passionate about their craft and to enable them to achieve new heights. Take a look at my latest projects that I've been a part of.</p>
            <div className="centerContainer3">
                <img className="portfolioImage" src={wesWithStarfox} alt="Wes with Starfox" onClick={navigateToS31}/>
                <img className="portfolioImage" src={wesAtSANS} alt="Wes at SANS" onClick={navigateToRS}/>
                <img className="portfolioImage" src={wesHoldingUAS} alt="Wes holding a UAS" onClick={navigateToDARPA}/>
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