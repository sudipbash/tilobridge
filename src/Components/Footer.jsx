import React from 'react';
import '../index.css';
import Logo from '../assets/tilobridge.svg';

export default function Footer(){
    return (
        <footer>
            <img src={Logo} alt="" />
            <ul>
                <li className="linkli">
                    <a href="https://google.com">benefits</a>
                </li>
                <li className="linkli">
                    <a href="https://google.com">events</a>
                </li>
                <li className="linkli">
                    <a href="https://google.com">about</a>
                </li>
            </ul>
            <div className='footer-link'>
                <div className='media'>
                    <p className="tiny-subtitle">Twitter</p>
                    <p className="tiny-subtitle">Facebook</p>
                    <p className="tiny-subtitle">Instagram</p>
                </div>
                <p className="tiny-subtitle">Copyright © 2023 tillobridge.</p>
            </div>
        </footer>
    );
}