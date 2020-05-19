import React from 'react'
import { useHistory } from "react-router-dom"
import Footer from '../footer'
import wesWithParents from '../assets/photos/wes-with-parents.jpg'

const Passions = () => {

    const history = useHistory()
    
    const navigateToResume = () =>
        history.push("/resume")

    return <div className="body">
        <div className="introFlex">
            <h1 className="lgDarkBg">A few fun facts about myself</h1>
            <img className="lgImg" src={wesWithParents} alt="Wes with parents" />
            <p className="centerText medDarkBg">I’m a U.S. Air Force Cyberwarfare Officer at Langley AFB near Hampton, VA. I love bikepacking, rockclimbing, and capturing special moments on camera. I have two cats named Byakko and Tofu, I like a good IPA, my favorite food is Taiwanese beef noodle soup, and I had to get stitches on my head...once, thankfully.</p>
        </div>
        <div className="whiteFlex">
            <h1 className="onLightBg">Here are some special memories that I had so much fun capturing</h1>
        </div>
        <div className="callToActionFlex">
            <h2 className="onLightBg">Want to learn more about my main hustle?</h2>
            <p className="onLightBg">Feel free to dive deeper into what I’ve accomplished and what I can bring to you and your team.</p>
            <button className="button" onClick={navigateToResume}>VIEW MY RESUME</button>
        </div>
        <Footer/>
    </div>
}

export default Passions