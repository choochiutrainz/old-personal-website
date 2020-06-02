import React from 'react'
import Footer from '../footer'
import ZiplineTeam from '../assets/photos/zipline-team.jpg'
import ZiplineLoading from '../assets/photos/zipline-loading.jpg'
import ZiplineRecovery from '../assets/photos/zipline-recovery.jpg'
import ZiplineRecovery1 from '../assets/photos/zipline-recovery-1.jpg'
import DIULogo from '../assets/logos/DIU-logo.png'


const DIUx = () => {
    return <div className="body">
        <div className="overviewContainer">
            <h1 className="overviewHeader">The Lore</h1>
            <p className="overviewSubHeader">A wounded person's chances of survival increase nearly threefold if they receive a blood transfusion within an hour of being injured. Unfortunately, blood supplies are typically so far that that it's unlikely to deliver the blood or evacuate that person in time, especially in combat zones or disaster locations. Then we thought, "what if we used drones to do that?"</p>
            <img className="projectImage" src={ZiplineTeam} alt="Zipline Team" />
            <p className="projectText">Drones cost less to procure {'&'} maintain, put fewer lives at risk, and much more quickly deploy {'&'} deliver supplies to wherever needed. We had to add them to the toolbox. I helped with the project as a junior Product Manager to ideate adapting commercial technology to national defense applications, guide private companies through the Department of Defense's (DoD) complex acquisitions process, and mediate between companies {'&'} frontline personnel to balance mission needs {'&'} business priorities.</p>
        </div>
        <div className="detailsContainer">
            <div className="detailsText">
                <h2>We sought out a solution that fulfilled these critical values in mind:</h2>
                <h3>Rapid Prototyping</h3>
                <h3>Commercially viable, mature technology</h3>
                <h3>User-Centered Design</h3>
                <h3>Other Transaction contracts</h3>
            </div>
            <img className="detailsImg" src={ZiplineLoading} alt="Loading a drone" />
            <img className="detailsImg1" src={ZiplineRecovery} alt="Recovering a drone" />
            <img className="detailsImg2" src={ZiplineRecovery1} alt="Zipline recovery system" />
            <div className="endNotes">
                <p>Since the project's inception, a dozen companies have pitched their ideas, and three companies were invited to provide a full proposal to us and the end-users. One of the main contenders, <a className="darkTextLink" href="https://www.flyzipline.com/">Zipline</a>, which already has a <a className="darkTextLink" href="https://www.youtube.com/watch?v=jEbRVNxL44c">mature operation in Rwanda</a>, has most recently participated in a <a className="darkTextLink" href="https://www.forbes.com/sites/sebastienroblin/2019/10/22/will-blood-bearing-delivery-drones--transform-disaster-relief-and-battlefield-medicine/#31fca2386252">joint exercise</a> with the U.S. Marine Corps and the Australian Defence Force.</p>
            </div>
        </div>
        <h1 className="onLightBg">About DIU</h1>
        <div className="orgContainer">
            <p><img className="orgLogo" src={DIULogo} alt="DIU logo" />The <a className="darkTextLink" href="https://www.diu.mil">Defense Innovation Unit (DIU)</a> is a fast-moving Department of Defense (DoD) organization that contracts with commercial companies to solve national security problems with commercial talent and innovation.</p>
            <p>It is the only DoD organization focused exclusively on fielding and scaling commercial technology across the U.S. Armed Forces to help solve critical problems. It has been lowering barriers to entry into the defense market for commercial companies driving innovation in emerging and foundational technology areas.</p>
            <p>By focusing on the fundamental problem and the tangible value that solving it would bring to the end user, we've created a new way for businesses to bring modern technology to the DoD at commercial speeds that the on-the-ground user actually loves and values.</p>

        </div>
        <div className="callToActionFlex">
            <h2 className="onLightBg">Check out my next project: <a className="darkTextLink" href="https://choochiutrain.com/streetcode-academy">Streetcode Academy</a></h2>
        </div>
        <Footer/>
    </div>
}

export default DIUx