import React from 'react';
import '../index.css';
import Logo from '../assets/tilobridge.svg';

export default function Link() {
    return(
        <header>
            <a href="../index.html">
            <img src={Logo} alt=""/>
            </a>
            <ul>
                <li className="linkli">
                    <a href="../benefits.html">benefits</a>
                </li>
                <li className="linkli">
                    <a href="../events.html">events</a>
                </li>
            </ul>
        </header>
    );
}