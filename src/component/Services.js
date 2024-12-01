import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Building responsive and high-quality web applications using modern technologies.',
      icon: '🌐',
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing interfaces that enhance user experience.',
      icon: '🎨',
    },
    {
      id: 3,
      title: 'Consulting',
      description: 'Providing expert advice to help you bring your project ideas to life.',
      icon: '💼',
    },
    // Add more services as needed
  ];

  return (
    <Container className="my-5">
      {/* Services Section Title */}
      <Row className="text-center mb-5">
        <Col>
          <h1>My Services</h1>
          <p className="text-muted">Here’s what I can help you with.</p>
        </Col>
      </Row>

      {/* Services List */}
      <Row>
        {services.map((service) => (
          <Col key={service.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <div style={{ fontSize: '2rem' }}>{service.icon}</div>
                <Card.Title className="mt-3">{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="primary" href="#contact">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
