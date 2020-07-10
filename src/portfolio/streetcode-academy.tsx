import React from 'react'
import { useHistory } from "react-router-dom"
import Footer from '../footer'
import streetcodeTeam from '../assets/photos/streetcode-team.png'
import streetcodeLiveLogo from '../assets/logos/streetcode-live-logo.png'
import streetCode from '../assets/photos/streetcode.png'
import streetCode1 from '../assets/photos/streetcode-1.png'
import streetCode2 from '../assets/photos/streetcode-2.png'

const Streetcode = () => {
    const history = useHistory()
    const navigateToDARPA = () => history.push("/darpa")

    return <div className="body">
        <div className="overviewContainer">
            <h1 className="overviewHeader">How I got involved</h1>
            <p className="overviewSubHeader">While living in Silicon Valley, I saw the world's leading hotbed of innovation and genius. But I also saw an environment that still struggles with <a className="lightTextLink" href="https://www.cnbc.com/2018/06/20/silicon-valleys-diversity-problem-is-its-achilles-heel.html">diversity and unconscious bias.</a> Tech giants like Google, Apple, and Facebook still have a white majority, especially in leadership positions. Their overall workforce are typically less than 10% black, 5% hispanic, 30% asian, or 25% women. The vast majority of companies that I worked with while at the Defense Innovation Unit were run {'&'} staffed by white men.</p>
            <img className="projectImage" src={streetcodeTeam} alt="The Streetcode Team" />
            <p className="projectText">We need strong diversity to stay ahead as a nation in this extremely competitive innovation {'&'} tech sphere. Underprivileged communities, especially those of color, lacked the resources {'&'} opportunities to learn the technical skills and find the networks essential succeeding in Silicon Valley's tech industry. That's when I ran into <a className="lightTextLink" href="https://www.streetcode.us/">Streetcode Academy.</a></p>
        </div>
        <div className="detailsContainer">
            <div className="detailsText">
                <h2>We investigate the untapped genius of our community by:</h2>
                <h3>Providing free high-quality, quarterly tech education classes</h3>
                <h3>Teaching fundamental coding practices and programming skills</h3>
                <h3>Nurturing a strong entrepreneurship mindset</h3>
                <h3>{'Expanding each individual\'s creativity'}</h3>
            </div>
            <img className="detailsImg" src={streetCode} alt="Streetcode"></img>
            <img className="detailsImg1" src={streetCode1} alt="Streetcode"></img>
            <img className="detailsImg2" src={streetCode2} alt="Streetcode"></img>
            <div className="endNotes">
                <p>I joined Streetcode Academy as a volunteer instructor for 2 of their <a className="darkTextLink" href="https://www.streetcode.us/live">courses</a>, where I taught children aged 7-12 basic programming and nurtured their curiosity to explore technology.</p>
                <p>In the Jr. Game Design course, I taught first-time coders how to use Scratch, a block-based language, to learn the basics of programming and Game Design, and how to build out several apps and games.</p>
                <p>In the Engineering Design course, I taught budding engineers the design process so they can explore their ideas and turn them into physical products. Much of waht they created involved circuitry, 3D printing, and vinyl cutting.</p>
            </div>
        </div>
        <h1 className="onLightBg">About Streetcode Academy</h1>
        <div className="orgContainer">
            <p><img className="orgLogo" src={streetcodeLiveLogo} alt="Streetcode Academy Logo" /><a className="darkTextLink" href="https://www.streetcode.us/">Streetcode Academy</a> is a nonprofit that is more than another coding class. It is a community-based ecosystem in East Palo Alto to bridge the digital divide in Silicon Valley and empower underprivileged communities with the skills, mindsets, and networks to diversify and succeed in the tech industry.</p>
            <p>It operates with a very special model of connecting young people to their talents, to jobs, and to a bright future through a support system of leaders from their own community.</p>
            <p>Streetcode offers many classes that teach not only modern coding skills but also non-programming related topics, such as entrepreneurship, computer literacy, and more. Above all, Streetcode strives to instill an undying curiosity towards technology in all of its students.</p>
        </div>
        <div className="callToActionFlex">
            <h2 className="onLightBg">Check out my next project: <button className="transparentButton" onClick={navigateToDARPA}>DARPA Swarm Drone Challenge</button></h2>
        </div>
        <Footer/>
    </div>
}

export default Streetcode