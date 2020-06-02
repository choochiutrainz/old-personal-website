import React from 'react'
import { useHistory } from "react-router-dom"
import Footer from '../footer'
import './resume.css'
import wesInSpace from '../assets/photos/wes-in-space.jpg'

const Resume = () => {
    const history = useHistory()
    
    const navigateToContact = () => 
        history.push("/contact")


    return <div className="body">
        <div className="resumeContainer">
            <div className= "skills">
                <img className="smallImg" src={wesInSpace} alt="Wes in Space" />
                <h1 className="sectionTitle">SKILLS</h1>
                <h3 className="sectionSubTitle">Product Management</h3>
                <p className="sectionText">Agile Product Management</p>
                <p className="sectionText">Lean Startup</p>

                <h3 className="sectionSubTitle">Software Engineering</h3>
                <p className="sectionText">Extreme Programming</p>
                <p className="sectionText">CI / CD</p>
                <p className="sectionText">TDD</p>

                <h3 className="sectionSubTitle">Cyber Security</h3>
                <p className="sectionText">Penetration Testing</p>
                <p className="sectionText">Reverse Engineering</p>

                <h3 className="sectionSubTitle">Design</h3>
                <p className="sectionText">Prototyping</p>
                <p className="sectionText">Usability Testing</p>
                <p className="sectionText">User Interview</p>

                <h3 className="sectionSubTitle">Languages/Frameworks</h3>
                <p className="sectionText">ReactJS</p>
                <p className="sectionText">TypeScript</p>
                <p className="sectionText">Google Apps Script</p>
                <p className="sectionText">Python</p>
                <p className="sectionText">C / C++</p>
                <p className="sectionText">Go</p>

                <h3 className="sectionSubTitle">Tools</h3>
                <p className="sectionText">MS Visual Studio Code</p>
                <p className="sectionText">Adobe Creative Suite</p>
                <p className="sectionText">Figma</p>
                <p className="sectionText">Kali Linux</p>
                <p className="sectionText">Metasploit</p>
            </div>
            <div className= "experience">
                <div className="statement">
                    <h1 className="yellowText">WESLEY "CHEWY" CHIU</h1>
                    <h3 className="sectionText">I am an outcome-oriented Product Manager on a mission to find and tackle the next great opportunity with a talented, inspiring team. I enjoy bike-packing, playing table-tennis, rock climbing, and capturing priceless moments on camera.</h3>
                </div>
                <h1 className="sectionTitle">EXPERIENCE</h1>
                <h3 className="sectionSubTitle">DEPUTY FLIGHT COMMANDER || 17th Intelligence Squadron || Langley AFB || Feb '20 - Present</h3>
                <p className="sectionText">Looking to modernize tools and software used by the intelligence and cyber warfare
    communities to maximize mission effectivness and minimize productivity waste. Consulted
    other software development units on applying agile principles and fundamentals to their
    unique business problem set. Facilitated multiple workshops to use agile principles to
    better collaborate, experiment, and iterate on ideas and processes.</p>

                <h3 className="sectionSubTitle">PRODUCT MANAGER || Section 31 || Santa Monica || May '19 - Feb '20</h3>
                <p className="sectionText">Led and delivered new RF Deconfliction analysis tool to replace outdated legacy software.
    Prioritized unique mission needs between a dozen units and multiple user groups while
    balancing technical complexity and business priorities. Implemented best practices to
    encourage product context sharing between all PMs in this new Air Force start up.</p>

                <h3 className="sectionSubTitle">SOFTWARE ENGINEER || Defense Innovation Unit || Mountain View || Nov '18 - May '19</h3>
                <p className="sectionText">Developed and deployed new airspace situational awareness tool to detect multiple types of
    small commercial drones realtime. Balanced unique mission and legal needs between users
    from NORAD, U.S. Secret Service, and FBI. First learned and applied agile principles with XP
    methodology. Assisted in penetration testing and hardening commercial drones for DoD use.</p>

                <h3 className="sectionSubTitle">PRODUCT MANAGER || Defense Innovation Unit || Mountain View || Feb '18 - Nov '18</h3>
                <p className="sectionText">Led multiple pathfinder projects to rapidly apply commercial innovations to DoD problems.
    Adapted commercial solutions to unique warfighter needs with a focus on user centered
    design. Enabled a community of non-traditional start ups and businesses to sign rapid
    prototyping contracts with military entities within 60 days on average after project initiation.</p>

                <h3 className="sectionSubTitle">PENETRATION TESTER || DARPA Swarm Drone Challenge || Colorado Springs || Oct '16 - Mar '17</h3>
                <p className="sectionText">Was part of the US Air Force Academy team to develop and code tactics, techniques, and behaviors for drones that act as a collective swarm. Also penetration tested the drones provided by DARPA and exploited vulnerabilities during a live-fly event to demonstrate the importance of cyber security in emerging technologies and showcase how one can use cyberwarfare to gain an tactical advantage over a more technologically advanced foe.</p>
                
                <h3 className="sectionSubTitle">SOFTWARE ENGINEERING INTERN || National Reconnaissance Office (NRO) || Chantilly || May '16 - Aug '16</h3>
                <p className="sectionText">{'Was part of the External Cloud Office at the NRO Headquarters to introduce & integrate an AWS hosted service called the Commercial Cloud Service (C2S) to the NRO. Assisted U.S. partner intelligence agencies & international allies on transitioning to the C2S environment. Developed & deployed basic scripts to minimize time spent on migrating data, provisioning accounts, & transitioning operations to C2S.'}</p>

                <h3 className="sectionSubTitle">SOFTWARE REVERSE ENGINEERING INTERN || National Reconnaissance Office || Denver || May '15 - Aug '15 </h3>
                <p className="sectionText">{'Developed & deployed apps for data aggregation and signals intelligence development that replaced manual excel process with a 80% decrease in processing time. Reverse engineered various communication technologies to enable signals collection and analysis.'}</p>

                <h1 className="sectionTitle">{'EDUCATION & CERTIFICATIONS'}</h1>
                <p className="sectionText">OFFENSIVE SECURITY CERTIFIED PROFESSIONAL || In Progress || Offensive Security</p>
                <p className="sectionText">SECURITY+ || 2018 || CompTIA</p>
                <p className="sectionText">WIRELESS ETHICAL HACKER || 2017 || SANS Institute</p>
                <p className="sectionText">COMPUTER AND NETWORK SECURITY, B.S. || 2017 || U.S. Air Force Academy</p>
                <p className="sectionText">MANDARIN CHINESE MINOR || 2017 || U.S. Air Force Academy</p>
            </div>
        </div>
        <div className="callToActionFlex">
            <h3 className="onLightBg">PRODUCT MANAGER | CYBER SECURITY PROFESSIONAL | PORTRAIT PHOTOGRAPHER</h3>
            <h1 className="onLightBg">Ready to build the next great thing together?</h1>
            <button className="button" onClick={navigateToContact}>CONTACT ME TODAY</button>
        </div>
        <Footer/>
    </div>
}

export default Resume