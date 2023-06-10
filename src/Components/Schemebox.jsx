import React from 'react';
import '../index.css';
import gift from '../assets/gift.png';

export default function Schemebox(props){
    return (
        <div className="schemebox">
            <div className="schemehead">
                <img src={gift} alt="" />
                <button className="apply-btn">Apply</button>
            </div>
            <div className="schemecontent">
                <h4 className="scheme-title">
                    {props.title}
                </h4>
                <p className="tiny-subtitle">{props.content}</p>
            </div>
        </div>
    );
}