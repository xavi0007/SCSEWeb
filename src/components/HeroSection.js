import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>JOIN SCSE!</h1>
      <p>WATCH WHAT WE HAVE</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={event =>  window.location.href='/videos'}
        >
          WATCH TOUR <i className='far fa-play-circle' />
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
