import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      {/* About Section */}
      <Row className="mb-5 text-center">
        <Col>
          <h1>About Me</h1>
          <p className="text-muted">
            A little bit about myself and my journey as a developer.
          </p>
        </Col>
      </Row>

      {/* Profile and Details */}
      <Row className="align-items-center">
        {/* Profile Image */}
        <Col md={4} className="text-center mb-4">
          <Image
            src="https://via.placeholder.com/200"
            roundedCircle
            alt="Profile"
            fluid
          />
        </Col>

        {/* Description */}
        <Col md={8}>
          <h3>Hello! I'm [Pradeep]</h3>
          <p>
            I am a passionate developer with experience in building high-quality web
            applications. Over the years, I have honed my skills in frontend and backend
            development, working with various technologies and frameworks.
          </p>
          <p>
            My journey in development started with a curiosity to understand how websites
            are built and led me to pursue a career in web development. I love solving
            problems and continuously learning new technologies.
          </p>
          <Button variant="primary" href="#contact">
            Contact Me
          </Button>
        </Col>
      </Row>

      {/* Skills Section */}
      <Row className="mt-5">
        <Col>
          <h3>Skills</h3>
          <Row className="mt-3">
            <Col md={4}>
              <ul>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </Col>
            <Col md={4}>
              <ul>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </Col>
            <Col md={4}>
              <ul>
                <li>MongoDB</li>
                <li>Git & GitHub</li>
                <li>REST APIs</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Contact Section */}
      <Row id="contact" className="mt-5 text-center">
        <Col>
          <h3>Contact</h3>
          <p>Feel free to reach out to me for collaborations or inquiries.</p>
          <Button variant="outline-primary" href="mailto:your-email@example.com">
            Email Me
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
