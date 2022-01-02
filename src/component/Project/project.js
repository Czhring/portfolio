import React from "react";
import { Card,Button,Row,Col } from "react-bootstrap";
import Project1 from '../../project1.jpg'
import Project2 from '../../project2.jpg'
import Project3 from '../../project3.jpg'



const Project=() => {
    return (
<div className='portfolio-page'> 
       <h1>Portfolio</h1> 
       <Row xs={1} md={3}>
<Col>
<Card style={{ width: '20rem' ,height: '40rem'}}>
  <Card.Img variant="top" src={Project1} />
  <Card.Body>
    <Card.Title>introduce</Card.Title>
    <Card.Text>
    Using the html,css and javascript that I have learned so far to show the knowledage and making it as a self introduce as a web developer
    </Card.Text>
    <Button href="https://github.com/Czhring/Project1-portfolio" variant="dark">Github Page</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '20rem' ,height: '40rem'}}>
  <Card.Img variant="top" src={Project2} />
  <Card.Body>
    <Card.Title>Coffee Shop</Card.Title>
    <Card.Text>
    Building an coffee shop website with react to show the list of coffee with the 
    information about the description and ingredients. Customer can add to the cart for check out.
    </Card.Text>
    <Button href="https://github.com/Czhring/coffee-shop" variant="dark">Github Page</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '20rem' ,height: '40rem'}}>
  <Card.Img variant="top" src={Project3} />
  <Card.Body>
    <Card.Title>Idea</Card.Title>
    <Card.Text>
    Using React frontend and dJango backend to build an app that help you when you running out of ideas or
    some ideas coming up on your mind you can save it for later use.
    </Card.Text>
    <Button href="https://github.com/Czhring/portfolio" variant="dark">Github Page</Button>
  </Card.Body>
</Card>
</Col>
</Row>
</div>
    );
  }
  
  export default Project;