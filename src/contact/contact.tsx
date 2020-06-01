import React from 'react'
import Footer from '../footer'
import wesInSpace from '../assets/photos/wes-in-space.jpg'

const Contact = () => {

    return <div className="body">
        <h2 className="medDarkBg">Hi there! Contact form is still in the works. For now, please shoot me an email at wesley.y.chiu@gmail.com. Thanks!</h2>
        <img className="medImg" src={wesInSpace} alt="Wes in Space" />
        <Footer/>
    </div>
}

export default Contact