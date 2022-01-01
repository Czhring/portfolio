import React from "react";
import {Image } from "react-bootstrap";
import self from '../../self.jpeg'
import './Home.css'
import { SocialIcon } from 'react-social-icons';
const About=() => {
    return (
<div className='header'>
    <img  src={self} alt ="Robert"/>
    <h1 className="main-title">Fullstack Developer</h1>
    <div className ="icons-wrapper">
        <div className='icon'><SocialIcon url="https://www.facebook.com/robert.chen.980" />
</div>
        <div className='icon'><SocialIcon url="https://www.linkedin.com/in/zhirong-robert-chen/" />
</div>
        <div className='icon'><SocialIcon url="https://github.com/Czhring" />
</div>
    </div>
</div>
    );
  }
  
  export default About;