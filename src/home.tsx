import React from 'react'
import { useHistory } from "react-router-dom"
import './home.css'
import wesInSpace from './wes-in-space.jpg'
import wesAtSANS from './wes-at-sans.jpg'

const Home = () => {

    const history = useHistory();
    
    function navigateToPassions(){
        history.push("/passions");
    }
    
    function navigateToPortfolio(){
        history.push("/portfolio");
    }
    
    function navigateToContact(){
        history.push("/contact");
    }

    return <div className="body">
        <div className="homeIntroFlex">
            <img className="lgImg" src={wesInSpace} alt="Wes in Space" />
            <div className="rightContainer">
                <h1 className="lgDarkBg">My passion and focus is agile software development.</h1>
                <p className="medDarkBg">I strive to build and lead effective, diverse, and collaborative product teams to design & deliver a product with our users that we couldn’t have imagined alone. If you want to learn more about working together, feel free to contact me</p>
            </div>
        </div>
        <div className="grayFlex">
            <h1 className="onLightBg">I also do portrait photography. And I like to hack things.</h1>
            <div className="centerContainer2">
                <div className="leftContainer2">
                    <img className="medImg" src={wesAtSANS} alt="Wes at SANS" />
                    <p className="onLightBg">I am a US Air Force Cyberwarfare Officer by trade. I get a good kick out of pen-testing my home devices and participating in Capture-the-Flag (CTF) events to test my skills.</p>
                </div>
                <div className="rightContainer2">
                    <img className="medImg" src={wesAtSANS} alt="Wes at SANS" />
                    <p className="onLightkBg">I love capturing priceless moments on my camera and sharing the stories of amazing people that I meet around the world. I’d be honored to photograph your special occasion.</p>
                </div>
            </div>
            <button className="button" onClick={navigateToPassions}>SEE MY PASSIONS</button>
        </div>
        <div className="whiteFlex">
            <h1 className="onLightBg">My projects</h1>
            <p className="onLightBg">It's a wonderful opportunity to work with people who are so passionate about their craft and to enable them to achieve new heights. Take a look at my latest projects that I've been a part of.</p>
            <div className="centerContainer3">
                <img className="medImg" src={wesAtSANS} alt="Wes at SANS" />
                <img className="medImg" src={wesAtSANS} alt="Wes at SANS" />
                <img className="medImg" src={wesAtSANS} alt="Wes at SANS" />
            </div>
            <button className="button" onClick={navigateToPortfolio}>SEE MORE PROJECTS</button>
        </div>
        <div className="callToActionFlex">
            <h3 className="onLightBg">PRODUCT MANAGER | CYBER SECURITY PROFESSIONAL | PORTRAIT PHOTOGRAPHER</h3>
            <h1 className="onLightBg">Ready to build the next great thing together?</h1>
            <button className="button" onClick={navigateToContact}>CONTACT ME TODAY</button>
        </div>
    </div>
}

export default Home 