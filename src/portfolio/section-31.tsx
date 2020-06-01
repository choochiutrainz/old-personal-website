import React from 'react'
import Footer from '../footer'
import SureFireHome from '../assets/photos/starfox-homepage.png'
import StarfoxLogo from '../assets/logos/starfox-watermark.png'
import S31Logo from '../assets/logos/S31-logo.png'
import starfoxDemo from '../assets/photos/wes-demoing-starfox.jpg'
import starfoxTeam from '../assets/photos/wes-with-starfox-4.jpg'
import starfoxTeam1 from '../assets/photos/wes-with-starfox-3.jpg'

const Section31 = () => {
    return <div className="body">
        <div className="overviewContainer">
            <h1 className="overviewHeader"><img className="iconImg" src={StarfoxLogo} alt="Starfox Wordmark" /></h1>
            <p className="overviewSubHeader">According to NASA, there are over 8000 man-made objects orbiting Earth today, 3000 of them satellites. Future efforts like SpaceX's Starlink Satellite 'Train' and Lockheed Martin's Space Fence will soon multiply that number. In this already congested environment, the Department of Defense (DoD) needed a way to safely send RF energy into space and communicate with their satellites with minimal risk of interfering with other satellites. Other projects that tried to answer this were slow, bureaucratic, and using antiquated paradigms {'&'} technologies.</p>
            <img className="projectImage" src={SureFireHome} alt="SureFire Homepage" />
            <p className="projectText">SureFire (formerly called "Starfox") is a web app built and maintained by the Starfox team. It allows units around the world to more easily {'&'} quickly submit, process, and track deconfliction requests between multiple partners to send RF energy into space. As its 1st Product Manager, I had to prioritize the unique mission needs between a dozen units {'&'} multiple user groups while balancing technical complexity {'&'} business priorities to lead the team to success.</p>
        </div>
        <div className="detailsContainer">
            <div className="detailsText">
                <h2>We commit to building SureFire with the following principles:</h2>
                <h3>Agile Software Development</h3>
                <h3>{'Continuous Integration & Deployment'}</h3>
                <h3>Minimal request turnaround time to downrage personnel</h3>
                <h3>Built with current industry code standards</h3>
                <h3>Modern, intuitive UI's that our users love and can effortlessly onboard to</h3>
            </div>
            <img className="detailsImg" src={starfoxDemo} alt="Wes demo'ing Starfox"></img>
            <img className="detailsImg1" src={starfoxTeam1} alt="Starfox PMs and Designers"></img>
            <img className="detailsImg2" src={starfoxTeam} alt="Starfox team"></img>
            <div className="endNotes">
                <p>The Starfox team stood up in May 2019, deployed its MVP within 52 working days, and obtained user adoption just before Christmas 2019. It continues to build and iterate to further trim turnaround time and to maximize accuracy {'&'} convenience.</p>
            </div>
        </div>
        <h1 className="onLightBg">About Section 31</h1>
        <div className="orgContainer">
            <p><img className="orgLogo" src={S31Logo} alt="S31 logo" /><a className="darkTextLink" href="https://www.linkedin.com/company/section-thirty-one/">Section 31</a> is a software development start-up under the Space and Missile Systems Center of the US Space Force. Its mission is to create a digital US Space Force where extraordinary software propels space dominance.</p>
            <p>It is initially focused on modernizing SDA capabilities and deprecating currenty legacy SSA systems, but will grow to encompass the greater SDA/ESBMC2 enterprise over time. Above all else, we commit to continuously delivering impactful software that Space Operators love.</p>
            <p>Section 31 is a Star Trek reference to an unacknowledged Starfleet Intelligence organization that makes allowances for "bending the rules" during times of extraordinary threats. They operate on the basis that extraordinary threates warrant extraordinary measures to accomplish the mission.</p>
        </div>
        <div className="callToActionFlex">
            <h2 className="onLightBg">Check out my next project: <a className="darkTextLink" href="/rogue-squadron">Dowding</a></h2>
        </div>
        <Footer/>
    </div>
}

export default Section31