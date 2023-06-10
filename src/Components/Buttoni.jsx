import React from 'react';
import "../index.css";

export default function Button(props){
    return (
        <button className="secondary-btn">{props.value}</button>
    );
}