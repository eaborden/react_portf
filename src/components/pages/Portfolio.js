import React from "react";

import SS_Scheduler_small from "../ImagesF/SS_Scheduler_small.png"
import screenshotBurger from "../ImagesF/screenshotBurger.png"
import entryscreenNT from "../ImagesF/entryscreenNT.png"

import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Card2 = () => (

  <Container>
    <Row>
      <Col md={6}>
        <Card className="mb-3">
          <Image 
          src={screenshotBurger}
          className="card-img-top" 
          alt="Note taker project" 
          fluid />
          <Card.Body>
            <Card.Title>Eat-A-Burger</Card.Title>
            <Card.Text>
              <p>Application with a mySQL backend. Deployed to heroku</p>
              <p><span><strong>Deployed Application:</strong> <a href="https://eaborden.github.io/workdaysched/">Workday Schedule</a></span></p>
              <p><span><strong>GitHub Respository:</strong> <a href="https://github.com/eaborden/workdaysched/">Repository</a></span></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="mb-3">
        <Image 
          src={SS_Scheduler_small}
          className="card-img-top" 
          alt="Scheduling application" 
          fluid />
          <Card.Body>
            <Card.Title>Workday Scheduler</Card.Title>
            <Card.Text>
            <p>Application that allows for a person to enter items into a calendar. The calendar highlights hours past, present and future.</p>
            <p><span><strong>Deployed Application:</strong> <a href="https://github.com/eaborden/workdaysched/">Workday-Scheduler</a></span></p>
              <p><span><strong>GitHub Respository:</strong> <a href="https://github.com/eaborden/workdaysched//">Repository</a></span></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="mb-3">
        <Image 
          src={entryscreenNT}
          className="card-img-top" 
          alt="Note Taker" 
          fluid />
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
            <Card.Text>
            <p>This application uses an express backend and save and retrieve note data from a
                  JSON file.</p>
              <p><span><strong>Deployed Application:</strong> <a href="https://desolate-hollows-94481.herokuapp.com/notes/">Note-Taker</a></span></p>
              <p><span><strong>GitHub Respository:</strong> <a href="https://github.com/eaborden/note-taker/">Repository</a></span></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)
export default Card2;

