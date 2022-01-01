import React from "react";
import './About.css'
import self from '../../self.jpeg'
const About =() =>{
    return(
        <>
        <h1>About Me</h1>
        <div className ='about-page'>
            <img  src={self} alt ="Robert"/>
            <p className="container">
            Hi, I am ZhiRong Chen. Graduated from UC Davis as Applied Statistic.<br/>
            I used to study data analysis at university. <br />
            I have always been a collector to collect data and convert it into text. But after I experienced it for a while, I found that my brain could not bear the messy data.
            <br />
            I was wondering why I didn't become the person who created the database. I also enjoy the fun of coding during data analysis. <br/>
            I found that I can find the joy of creation on the software engineer, so I decided instead of being a collector I will try to become the creator.
            </p>  
        </div>
        </>
    )
}

export default About