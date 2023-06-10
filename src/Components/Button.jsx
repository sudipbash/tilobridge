import React from 'react';
import "../index.css";

export default function Button(props){
    return (
        <button className="primary-btn">{props.value}</button>
    );
}