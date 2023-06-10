import React from 'react';
import Nav from './nav';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Schemebox from './Components/Schemebox';
import Event from './Components/Event';
import img1 from './assets/event-forest.png';
import img2 from './assets/event-code.png';
import img3 from './assets/event-hospital.png';
import img4 from './assets/event-women.png';

export default function App3(){
  return (
    <>
      <Nav />
      <Header />
      <div className="hero margin-low">
            <h1 className="title">Upcoming events.</h1>
            <p className="subtitle">Here are some of the latest events organized, come join.</p>
        </div>
        <div className="scheme-container">
        <div className="schemes">
        <div className="event">
            <img src={img1} alt="" className="event-img"/>
            <div className="event-info">
            <h4 className="scheme-title">
                    Forest Conversation Program
                </h4>
            <p className="tiny-subtitle">Go participate in the forest program that works against deforestation</p>
            </div>
        </div>
        <div className="event">
            <img src={img2} alt="" className="event-img"/>
            <div className="event-info">
            <h4 className="scheme-title">
                    Hackathon
                </h4>
            <p className="tiny-subtitle">Join the community of geeks and earn prizes.</p>
            </div>
        </div>
        

        </div>
        <div className="schemes">
        <div className="event">
            <img src={img3} alt="" className="event-img"/>
            <div className="event-info">
            <h4 className="scheme-title">
                    Health Assistance
                </h4>
            <p className="tiny-subtitle">Internship for health assistance.</p>
            </div>
        </div>
        <div className="event">
            <img src={img4} alt="" className="event-img"/>
            <div className="event-info">
            <h4 className="scheme-title">
                    Women Empowement Program
                </h4>
            <p className="tiny-subtitle">Help evangelists with creating awareness and make a postive impact.</p>
            </div>
        </div>
        </div>
        </div>
      <Footer />
    </>
  );
}