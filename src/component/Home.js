import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Project One',
      description: 'This project showcases my skills in React development.',
      link: '/project-one',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'An in-depth look at my work in frontend development.',
      link: '/project-two',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A demonstration of my design capabilities.',
      link: '/project-three',
      image: 'https://via.placeholder.com/150',
    },
    // Add more items as needed
  ];

  return (
    <Container className="my-5">
      {/* Hero Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1>Welcome to My Portfolio</h1>
          <p>Explore my projects and see what I've been working on.</p>
          <Button variant="primary" href="#projects">
            View My Work
          </Button>
        </Col>
      </Row>

      {/* Portfolio Section */}
      <Row id="projects">
        {portfolioItems.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={item.image} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary" href={item.link}>
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
