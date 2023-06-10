import React from 'react';
import Nav from './nav';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Schemebox from './Components/Schemebox';

export default function App2(){
  return (
    <>
      <Nav />
      <Header />
      <div className="hero margin-low">
            <h1 className="title">Current Schemes</h1>
            <p className="subtitle">Find below some of the schemes that are available.</p>
        </div>
        <div className="scheme-container">
        <div className="schemes">
            <Schemebox title="Tilottama 2080 Scholarship." content="For merit based students, must have above 3.0 GPA" />
            <Schemebox title="Healthcare Subsidy" content="Healthcare Subsidy" />
            <Schemebox title="Senior Citizen Pension" content="Monthly financial assistance for senior citizens." />
        </div>
        <div className="schemes">
            <Schemebox title="Environment Conservation Grants" content="Financial assistance for projects promoting environmental sustainability." />
            <Schemebox title="Healthcare Subsidy" content="Financial support for medical expenses and treatments." />
            <Schemebox title="Housing Assistance" content="Financial aid for low-income individuals to access affordable housing." />
        </div>
        <div className="schemes">
            <Schemebox title="Housing Assistance" content="Financial aid for low-income individuals to access affordable housing." />
            <Schemebox title="Sports Development Scholarships" content="Scholarships for talented athletes to pursue sports training and development." />
            <Schemebox title="Youth skill develop program." content="For merit based students, must have above 3.0 GPA" />
        </div>
        </div>
      <Footer /> 
    </>
  );
}