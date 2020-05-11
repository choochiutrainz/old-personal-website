import React from 'react'
import logo from './logo.png';

const Home = () => {
    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome to choochiutrain.com!</p>
                <small>The Internet Home of Wesley Chiu.</small>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
}

export default Home