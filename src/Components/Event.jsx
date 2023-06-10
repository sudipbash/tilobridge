import React from 'react';
import '../index.css';
import gift from '../assets/gift.png';

export default function Event(props){
    return (
        <div className="event">
            <img src={props.img} alt="" />
            <h4 className="scheme-title">
                    {props.title}
                </h4>
            <p className="tiny-subtitle">{props.content}</p>
        </div>
    );
}