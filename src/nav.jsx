import React from 'react';
import './index.css';
import Button from './Components/Button';

export default function Nav(){
    return(
        <>
        <button className="nav-btn" id="nav-btn">
                <div className="nav-btn-line"></div>
                <div className="nav-btn-line"></div>
        </button>
        <nav className="nav" id="nav">
                <div className="contact-info">
                    <h2>Together let's make something wonderful.</h2>
                    <Button value="Let's talk"/>
                </div>
                <div className="sub-list">
                    <p>Connect</p>
                    <ul className="tiny-list">
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Benefits</li>
                    <li>Events</li>
                </ul>
        </nav>
        </>
        
    );
}