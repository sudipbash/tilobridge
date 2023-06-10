import React from 'react';
import '../index.css';
import Buttoni from '../Components/Buttoni';
import Flag from '../assets/flag.png';

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner-head">
                <h2 className="banner-title">Together let's make a huge impact.</h2>
                <img src={Flag} alt="" />
            </div>
            <a href="./events.html">
            <Buttoni value="Participate Now"></Buttoni>
            </a>
        </div>
    );
}