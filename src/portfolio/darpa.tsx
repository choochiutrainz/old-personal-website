import React from 'react'
import Footer from '../footer'
import DARPATeam from '../assets/photos/darpa-usafa-team.png'
import DARPALogo from '../assets/logos/darpa-logo.jpg'
import DARPADrone from '../assets/photos/darpa-drone-1.png'
import DARPADisplay from '../assets/photos/darpa-display.png'
import DARPAJamming from '../assets/photos/darpa-jamming.jpg'

const DARPA = () => {
    return <div className="body">
        <div className="overviewContainer">
            <h1 className="overviewHeader">The Swarmin' Story</h1>
            <p className="overviewSubHeader">The average F-22 Raptor costs $150M, the F-35 Lightning II $100M, and the Ford Class Supercarrier $13B. All far too high a price to pay if lost under any circumstance. The US Armed Forces needed a cheaper, more sustainable way to support ground troops and project power. DARPA took inspiration from the honey bee: cheap, expendable drones that behave as a single collective to swarm {'&'} overwhelm any objective.</p>
            <img className="projectImage" src={DARPATeam} alt="USAFA Swarm Challenge Team" />
            <p className="projectText">There's plenty of research behind making swarms of drones fundamentally usable and demo-able, but we've yet to experiment on how to tactically use and apply them to scenarios. And thus, DARPA organized the Service Academies Swarm Challenge, with us as the US Air Force Academy team.</p>
        </div>
        <div className="detailsContainer">
            <div className="detailsText">
                <h2>The DARPA Swarn Unmanned Aerial Systems (UAS) Challenge included:</h2>
                <h3>A combination of fixed-wing and rotary wing drones</h3>
                <h3>Each Service Academy team developing their own swarm tactics {'&'} techniques</h3>
                <h3>A <a className="darkTextLink" href="https://www.youtube.com/watch?v=RZ-CKA4fUhg">capstone live-fly event</a> featuring air-to-air battles between each teams' swarms</h3>
                <p>You can read more about the competition <a className="darkTextLink" href="https://www.darpa.mil/news-events/2017-05-11">here.</a></p>
            </div>
            <img className="detailsImg" src={DARPADisplay} alt="Swarm Virtual Display" />
            <img className="detailsImg1" src={DARPAJamming} alt="Wes Jamming Drones" />
            <img className="detailsImg2" src={DARPADrone} alt="Rotary Drone" />
            <div className="endNotes">
                <p>My partner, 1st Lt Kyle Hubert, and I were studying for our Computer {'&'} Network Security degrees at the time, and we took issue with the competition moderators' decision to waive security requirements and ban use of cyber techniques in the event. So as we helped develop the team develop our strategy and code the drone behaviors, we also penetration tested and reverse engineered the drones and experimented with various exploits against them, from Man-in-the-Middle (MITM) attacks to social engineering against our opposing teams.</p>
                <p>During the live-fly exercise at Camp Roberts, CA, we sneakily set up one of our antennas and launched our attacks against our opposing teams. Within seconds, several opposing drones suddenly started landing right where they were hovering as our drones pressed the attack. The opposing team, unaware of what was truly happening, went into a panic and lost their team cohesion.</p>
                <p>We demonstrated that even with the latest and greatest technology in hand, we could still lose a fight if we deprioritize security. In a contested environment, an opposing force would do anything to gain an advantage or nullify ours, and so we shouldn't limit the actions of red teams so that we can learn the most valuable lessons and be best prepared for the real world. As a result, DARPA allowed cybersecurity actions and hardening on its drones in the 2nd year of the Swarm Challenge. We did get some real stern admonishments from our leadership, though. But we still graduated, and we got some good laughs. Worth it.</p>
            </div>
        </div>
        <h1 className="onLightBg">About DARPA</h1>
        <div className="orgContainer">
            <p><img className="orgLogo" src={DARPALogo} alt="DARPA logo" /><a className="darkTextLink" href="https://www.darpa.mil">The Defense Advanced Research Projects Agency (DARPA)</a> is a Department of Defense (DoD) agency dedicated to creating breakthrough technologies and capabilities for national security.</p>
            <p>Where other organizations focus on incremental advances, DARPA explicitly strives for transformational change by making pivotal investments in emerging, leading-edge technologies.</p>
            <p>DARPA also plays an invaluable role in solving problems that serve more than the Department of Defense directly, from <a className="darkTextLink" href="https://www.darpa.mil/news-events/2020-05-27">securing the US semiconductor supply chain</a> to <a className="darkTextLink" href="https://www.darpa.mil/work-with-us/covid-19">covid-19 detection.</a></p>
        </div>
        <Footer/>
    </div>
}

export default DARPA