import React from 'react';
import confetti from './assets/confetti.gif';
export default function Success(){
    return (
        <div className="success">
            <img src={confetti}></img>
            <h4>Successfully Purchased.</h4>
            <p>Go have a party while we send you the package on <span class="date">12 July, 2023</span></p>
            <button class="green-btn">Done</button>
        </div>
    );
}