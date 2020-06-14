import React from 'react'
import { useHistory } from "react-router-dom"
import Footer from '../footer'
import './passions.css'
import wesWithParents from '../assets/photos/wes-with-parents.jpg'
import birthday from '../assets/photos/birthday.jpg'
import rockclimbing from '../assets/photos/rockclimbing.jpg'
import dressPhotoshoot from '../assets/photos/dress-photoshoot.jpg'
import birdHouse from '../assets/photos/bird-house.jpg'
import manzanar from '../assets/photos/manzanar-internment-camp.png'
import wedding from '../assets/photos/wedding.jpg'
import ferrisWheel from '../assets/photos/ferris-wheel.jpg'
import newYear from '../assets/photos/new-year.jpg'
import grandma from '../assets/photos/grandma.jpg'
import getty from '../assets/photos/getty.jpg'
import chineseNewYear from '../assets/photos/chinese-new-year.jpg'


const Passions = () => {
    const history = useHistory()
    const navigateToResume = () => history.push("/resume")

    return <div className="body">
        <div className="introContainer">
            <h1 className="introHeader">A few fun facts about myself</h1>
            <img className="introImg1" src={wesWithParents} alt="Wes with parents" />
            <p className="introNotes">I’m a U.S. Air Force Cyberwarfare Officer at Langley AFB near Hampton, VA. I love bikepacking, rockclimbing, and capturing special moments on camera. I have two cats named <a className="hiddenTextLink" href="/cats">Byakko and Tofu,</a> I like a good IPA, my favorite food is Taiwanese beef noodle soup, and I had to get stitches on my head...once, thankfully.</p>
        </div>
        <h1 className="passionsHeader">Here are some special memories that I had so much fun capturing</h1>
        <div className="photosContainer">
            <div className="photosColumn">
                <img className="horizontalPhoto" src={birthday} alt="birthday"/>
                <img className="verticalPhoto" src={manzanar} alt="Manzanar Internment Camp" />
                <img className="horizontalPhoto" src={ferrisWheel} alt="Ferris Wheel" />
                <img className="horizontalPhoto" src={getty} alt="Getty Museum" />
            </div>
            <div className="photosColumn">
                <img className="horizontalPhoto" src={birdHouse} alt="Birdhouse" />
                <img className="horizontalPhoto" src={wedding} alt="Wedding" />
                <img className="horizontalPhoto" src={rockclimbing} alt="Rockclimbing" />
                <img className="verticalPhoto" src={chineseNewYear} alt="Chinewe New year" />
                
            </div>
            <div className="photosColumn">
                <img className="verticalPhoto" src={dressPhotoshoot} alt="Dress photoshoot" />
                <img className="horizontalPhoto" src={grandma} alt="grandma" />
                <img className="verticalPhoto" src={newYear} alt="Chinese New Year" />
            </div>
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