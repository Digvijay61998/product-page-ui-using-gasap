import React from 'react';

import './Frontpaga.css';
import styled, { keyframes } from "styled-components";
// import Arrow from './arrow.png'



const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  height: 40%;
  

  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

function Frontpage() {
  return (
    <frontPage id="home" >
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <div class="wrapper">
    <div class="static-txt">WE BUILD INTERACTIVE WEBSITE AND GIVE SERVICES</div>
    <ul class="dynamic-txts">
     <li><span>AWS SUPPORT</span></li>
      <li><span>BACK-END</span></li>
      <li><span>#</span></li>
      <li><span>Freelancer</span></li>
    </ul>
  </div>
      <p>What are you waiting for?</p>
      
    <img src={Arrow} alt="" width="400" height="400" />
    
    </div>
    </frontPage>
  );
}

export default Frontpage;
