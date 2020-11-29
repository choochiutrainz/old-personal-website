import React from 'react'
import Footer from '../footer'

const Blog = () => {

    return <div className="body">
        <div className="callToActionFlex">
            <h1 className="onLightBg">1 Dec 2020 - How DevOps Helps Enable Quick Security Response</h1>
            <p className="onLightBg">It also allows teams to identify vulnerabilities and resolve them far more quickly than waterfall projects typically
            can to minimize the threat window available to outside attackers. According to the State of DevOps Report of 2019, Level 1 agile product teams
            like small startups have typically been able to remediate 31% of critical security vulnerabilities between 1 hour to 1 day and 32% between 1
            day and 1 week. Level 5 teams like Google remediate 39% and 32%, respectively.</p>

            <p className="onLightBg">Insert Table Here</p>

            <p className="onLightBg">A software factory that the one that we’re proposing at its infancy would be able to resolve up to 70% of critical
            security vulnerabilities within a week of its discovery, which is already several orders of magnitude faster than what waterfall projects built
            on outdated technologies and paradigms can typically claim.9 Private industry and factories like KR and S31 practicing agile values have already
            proven themselves in their ability to not only maintain security compliance but also respond to cybersecurity threats.</p>

            <p className="onLightBg">Automating security scans also frees security teams to think more creatively in their penetration tests instead of
            completing possibly outdated security checklists. Security and developers can collaborate on threat models, they are able to build security into
            the design of their applications, discuss security impacts and trade-offs, identify potential issues at the earliest stage of planning and design,
            and come up with a better informed security testing plan built on empathy and trust between each other. The State of DevOps Report of 2019 found
            that agile software teams that make these CI/CD incorporations agree that security is a shared responsibility across developers and security teams.</p>

            <p className="onLightBg">Insert Table Here</p>

            <p className="onLightBg">The more security is integrated into the software development lifecycle, the more developers see security as a shared
            responsibility. In fact, seeing security as a shared responsibility improved by 31% between Level 1 (i.e. small startups) and Level 5 (i.e. Google)
            agile software teams. Seeing security as a shared responsibility makes it far more likely that everyone involved with software delivery will pay
            close attention to potential security issues, be more diligent about following security policy and processes for each stage of the software cycle,
            and be more willing to halt deployment when a security issue warrants it. Friction between teams over security lessens, too.</p>
            
            <p className="onLightBg">Practicing agile values is not simply hastily moving at undisciplined speed. It heavily focuses on incorporating
            proper testing and security throughout the entire development lifecycle so that developers can change software routinely but make changes
            safely.</p>

            <h1 className="onLightBg">28 Nov 2020 - How DevOps Testiong Assures Security</h1>
            <p className="onLightBg">While traditional waterfall projects view security as a separate step from development done by an outside entity,
            agile values bake security right into the software development process just like testing. Doing this has helped other software factories
            like KR and S31 and tech companies like Google and Apple to implement accelerated development tempered with disciplined security and
            testing practices..</p>

            <p className="onLightBg">Like testing, waterfall projects typically don’t run security compliance tests until several months after
            development has been marked complete. In fact, they have usually run security tests after the testing phase, delaying it several months
            more. As a result, waterfall developers incur a huge amount of risk that their work could be wasted if they fail to meet any security 
            requirements. Furthermore, since developers typically spend several months in each phase of development, testing, and security compliance,
            new security vulnerabilities would have appeared in that time and caused the developers to fail once more.2,3,6 This is partially why
            waterfall projects take so long to deploy to the users or sometimes never make it to initial deployment: they are too bureaucratic and slow
            to respond to changes and remain relevant in a dynamic security environment.</p>

            <p className="onLightBg">Like Google, Apple, S31, and KR, the Cyber Factory would utilize CI/CD to automate security validation by
            incorporating industry standard security tests and scanners, and the companies that own these security tests also continuously maintain and
            update these tests as vulnerabilities appear and are discovered throughout the cybersecurity community. This construct continuously validates
            that our code is fully updated according to the cyber threat landscape at all times as quickly as possible based on the findings, advice, and
            expertise of technical experts in the cybersecurity field. Some examples of the battery of security tests currently in use include:</p>
            
            <p className="onLightBg">Insert Table Here</p>

            <p className="onLightBg">By directly incorporating a plethora of security tools and checks into the software development process, software
            engineers build and deploy products with confidence that they’re not inadvertently introducing known security vulnerabilities to their users.</p>
        </div>
        <Footer/>
    </div>
}

export default Blog