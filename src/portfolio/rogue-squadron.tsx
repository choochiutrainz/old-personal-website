import React from 'react'
import { useHistory } from "react-router-dom"
import Footer from '../footer'
import Dowding from '../assets/photos/dowding-web.png'
import RSLogo from '../assets/logos/rogue-squadron-logo.png'

const RogueSquadron = () => {
    const history = useHistory()
    const navigateToDIUx = () => history.push("/diux")

    return <div className="body">
        <div className="overviewContainer">
            <h1 className="overviewHeader">The Dowding Story</h1>
            <p className="overviewSubHeader">In early 2017, the Islamic State was using comercially available drones to drop grenades on coalition troops almost every day, sometimes flying as many as 12 drones at once. The Department of Defense (DoD) needed a quality UAS red team and a modern solution for detecting drones to protect friendly forces and the general populace. That's where Dowding came in.</p>
            <img className="projectImage" src={Dowding} alt="Dowding Logo"></img>
            <p className="projectText">Dowding is capable of fusing various data sources into one Common Operating Picture that anyone, from law enforcement to national defense forces, could use to detect and track drone incursions in realtime. I helped build it as a Software Engineer.</p>
        </div>
        <div className="detailsContainer">
            <div className="detailsText">
                <h2>We envisioned Dowding with the following principles:</h2>
                <h3>Agile Software Development</h3>
                <h3>{'Continuous Integration & Deployment'}</h3>
                <h3>Cloud-based</h3>
                <h3>Mobile-Centric</h3>
                <h3>Built with a modern tech stack</h3>
                <h3>Clean, minimal UI's that our users love</h3>
            </div>
            <div className="endNotes">
                <p>{'We demo-ed our MVP to numerous DoD stakeholders, and they enthusiastically supported the project. I helped rewrite the server from scratch using NodeJS, TypeScript, PostgreSQL, Docker, Vault, MapBox, and Swagger. This was where I first truly learned & practiced agile software development principles.'}</p>
                <p>(Fun Fact: Dowding was named for the <a className="darkTextLink" href="https://en.wikipedia.org/wiki/Dowding_system">Dowding System,</a> the world’s first integrated air defense system that helped win the Battle of Britain)</p>
            </div>
        </div>
        <h1 className="onLightBg">About Rogue Squadron</h1>
        <div className="orgContainer">
            <p><img className="orgLogo" src={RSLogo} alt="Rogue Squadron logo" /><a className="darkTextLink" href="https://www.linkedin.com/company/diux-rogue-squadron">Rogue Squadron</a> is the DoD's premier UAS/Counter-UAS team. It was born to solve a DoD-wide problem of detecting, penetration testing, and hardening commercially available drones for national defense and law enforcement. The DoD had several programs related to drones, but they were bureaucratic, slow, strictly education/research focused, and/or using old paradigms {'&'} technologies.</p>
            <p>We're the only organization with the resources and capability to meet the immediate operational needs around drones, and we have been providing support to over 200 organizations across the Department of Defense, the Department of Homeland Security, the Department of Interior, the Department of Justice, and allied partners.</p>
            <p>RS was originally part of the Defense Innovation Unit Experimental (DIUx), now the <a className="darkTextLink" href="https://www.diu.mil">Defense Innovation Unit</a>. In March 2020, RS went through a <a className="darkTextLink" href="https://dds.mil/dds-acquires-rogue-squadron/">successful acquisition</a> by the Defense Digital Service (DDS).</p>
        </div>
        <div className="callToActionFlex">
            <h2 className="onLightBg">Check out my next project: <button className="transparentButton" onClick={navigateToDIUx}>UAS Medical Resupply</button></h2>
        </div>
        <Footer/>
    </div>
}

export default RogueSquadron