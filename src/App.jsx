import React from 'react';
import Nav from './nav';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Map from './Components/Map';
import Card from './Components/Card';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

export default function App(){
  return (
    <>
      <Nav />
      <Header />
      <Hero />
      <Map />
      <Card />
      <Banner />
      <Footer />
    </>
  );
}