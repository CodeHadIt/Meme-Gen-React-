import React from 'react';
import logo from '../components/memeface.png'

const Header = () => {
    return (
        <header>
            <div className="name-container">
                <i class="fa-solid fa-meteor"></i>
                <h2>Meme Generator</h2>
            </div>
            
            <h4 className="react-course">This React Thing is Tough!</h4>
            
        </header>
    )
}

export default Header