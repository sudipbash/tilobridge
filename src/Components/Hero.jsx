import React from 'react';
import '../index.css';
import Button from './Button';

export default function Hero(){
    return(
        <div className="hero">
            <h1 className="title">Participate in financial aid.</h1>
            <p className="subtitle">For those who are in need for monetary assistance, we update you with economic benefits.</p>
            <a href="../benefits.html">
            <Button value="See current schemes" />
            </a>
        </div>
    );
}