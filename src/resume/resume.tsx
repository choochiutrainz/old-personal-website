import React from 'react'
import './resume.css'

function downloadResume(){
    window.location.href = "http://localhost:3000/Wesley_Chiu_Resume.pdf";

}

const Resume = () => {
    return <div className="Resume">
        <header className="Resume-header">
            <h2>Resume</h2>
            <p>Web view of my resume is coming soon! But you can download it here for now!</p>
            <button className="Resume-button" onClick={downloadResume}>Download</button>
        </header>
    </div>
}

export default Resume