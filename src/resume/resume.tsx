import React from 'react'
import './resume.css'
//import portrait from './Wesley_Chiu_Portrait.PNG'
//<img src={portrait} alt="Chewy's portrait" />

function downloadFile(){
    window.location.href= "/Wesley_Chiu_Resume.pdf"
}

const Resume = () => {
    return <div className="Resume">
        <header className="Resume-header">
            <h1>Resume</h1>
        </header>
        <div className= "left-pane">
            
            <h3>Mobile</h3>
            <p>(949) 923-7510</p>
            <h3>Email</h3>
            <p>violinwesley@gmail.com</p>

            <h2>SKILLS</h2>
            <h3>Product Management</h3>
            <p>Agile Product Mgt</p>
            <p>Lean Startup</p>

            <h3>Software Engineering</h3>
            <p>Extreme Programming</p>
            <p>CI / CD</p>
            <p>TDD</p>

            <h3>Cyber Security</h3>
            <p>Penetration Testing</p>
            <p>Reverse Engineering</p>

            <h3>Languages/Frameworks</h3>
            <p>ReactJS</p>
            <p>TypeScript</p>
            <p>TypeScript</p>
            <p>Google Apps Script</p>
            <p>Python</p>
            <p>C / C++</p>
            <p>Go</p>

            <h3>Tools</h3>
            <p>IntelliJ</p>
            <p>Adobe Creative Suite</p>
            <p>Figma</p>
            <p>Kali / Metasploit</p>
            <p>Kismet / Wireshark</p>
            
        </div>
        <div className= "right-pane">
            <h1>WESLEY "CHEWY" CHIU</h1>
            <p>I am a Product Manager on a mission to find and tackle the next great opportunity with a
talented, inspiring team. I enjoy riding my bicycle, playing table tennis, and capturing
priceless moments on camera.</p>

            <h2>EXPERIENCE</h2>
            <h3>CYBER WARFARE OFFICER || 17th Intelligence Squadron || Langley AFB || Feb '20 - Present</h3>
            <p>Looking to modernize tools and software used by the intelligence and cyber warfare
communities to maximize mission effectivness and minimize productivity waste. Consulted
other software development units on applying agile principles and fundamentals to their
unique business problem set. Facilitated multiple workshops to use agile principles to
better collaborate, experiment, and iterate on ideas and processes.</p>

            <h3>PRODUCT MANAGER || Section 31 || Santa Monica || May '19 - Feb '20</h3>
            <p>Led and delivered new RF Deconfliction analysis tool to replace outdated legacy software.
Prioritized unique mission needs between a dozen units and multiple user groups while
balancing technical complexity and business priorities. Implemented best practices to
encourage product context sharing between all PMs in this new Air Force start up.</p>

            <h3>SOFTWARE ENGINEER || Defense Innovation Unit || Mountain View || Nov '18 - May '19</h3>
            <p>Developed and deployed new airspace situational awareness tool to detect multiple types of
small commercial drones realtime. Balanced unique mission and legal needs between users
from NORAD, U.S. Secret Service, and FBI. First learned and applied agile principles with XP
methodology. Assisted in penetration testing and hardening commercial drones for DoD use.</p>

            <h3>PRODUCT MANAGER || Defense Innovation Unit || Mountain View || Feb '18 - Nov '18</h3>
            <p>Led multiple pathfinder projects to rapidly apply commercial innovations to DoD problems.
Adapted commercial solutions to unique warfighter needs with a focus on user centered
design. Enabled a community of non-traditional start ups and businesses to sign rapid
prototyping contracts with military entities within 60 days on average after project initiation.</p>

            <h3>SOFTWARE ENGINEER INTERN || Nat'I Reconnaissance Office || Chantilly || May '17 - Aug '17</h3>
            <p>Developed and deployed apps for data aggregation and signals intelligence development that
replaced manual excel process with a 80% decrease in processing time. Reverse
engineered various communication technologies to enable signals collection and analysis.</p>

            <h2>EDUCATION AND CERTIFICATIONS</h2>
            <h3>OFFENSIVE SECURITY CERTIFIED PROFESSIONAL || In Progress || Offensive Security</h3>
            <h3>SECURITY+ || 2018 || CompTIA</h3>
            <h3>WIRELESS ETHICAL HACKER || 2017 || SANS Institute</h3>
            <h3>COMPUTER AND NETWORK SECURITY, B.S. || 2017 || U.S. Air Force Academy</h3>
            <button className="Resume-button" onClick={downloadFile}>Download</button>
        </div>
    </div>
}

export default Resume