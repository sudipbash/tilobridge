import React from 'react';
import '../index.css';
import map from '../assets/tilottama-map.png';

export default function Map(){
    return (
        <div className="map">
            <div className="info">
                <h2 className="second-title">We've covered you.</h2>
                <p className="subtitle">Every intellectual inside tilottama is provided with development-worthy scholarships, skill enhancement programs.</p>
            </div>
            <img src={map} alt="" />
        </div>
    );
}