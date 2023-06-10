import React from 'react';
import '../index.css';
import scholarship from '../assets/scholarship.svg';
import event from '../assets/events.svg';

export default function Card(){
    return(
        <div className="card-container">
            <div className="card">
                <img src={scholarship} alt="" />
                <h4 className="tiny-title">Student Scholarships</h4>
                <p className="tiny-subtitle">Lessen your financial problem.</p>
                <p className="description">
                    We are here to help you with students who are in need or are brilliant at their study, if you are one of them, apply now and get most out of it.
                </p>
            </div>
            <div className="card">
                <img src={event} alt="" />
                <h4 className="tiny-title">Events</h4>
                <p className="tiny-subtitle">Join communities.</p>
                <p className="description">
                    There are many events that share some common interests and can help you earn cash and rewards.
                </p>
            </div>
        </div>
    );
}