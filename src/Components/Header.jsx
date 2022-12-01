import React from 'react';
import Navbar from './Navbar';
import headerLogo from '../images/header.png';
import Body from './Body';
import Footer from './Footer';
function Header() {
  return (
    <>
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1><span>Algo Filipino </span></h1>
        <h1>Wika at Teknolohiya </h1>
        <p className='details'>Ang Algo Filipino ay isang non-profit na organisasyon na naglalayong mapalago at mapagyaman ang wikang Filipino sa larangan ng teknolohiya. </p>
        <a href='#' className='cv-btn'>SUMALI SA ALGOFILIPINO</a>
        
      </div>
      <div className='image'>
        <img 
        src={headerLogo}
        alt=''/>
      </div>
    </div>
    <Body />
    <Footer />
    </>
  )
}

export default Header
