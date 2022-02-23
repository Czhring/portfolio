import React from "react";
import self from '../../self.jpeg'
import './Home.css'
import { SocialIcon } from 'react-social-icons';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Home=() => {
    return (
<div className='header'>
    <img  src={self} alt ="Robert"/>
    <h1 className="main-title">ZhiRong Chen</h1>
    <h2 className="main-title">Fullstack Developer</h2>
    {/* <Link to="../../GA Resume.pdf" target="_blank" download><Button variant="light">Resume</Button></Link> */}
    <Button href="https://drive.google.com/file/d/14xHtUAh5vlcPyfMRZNeNOOu6uObiWFSo/view?usp=sharing" variant="light">Resume</Button>

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
  
  export default Home;