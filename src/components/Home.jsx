import { Container, Row, Col, Button, Tab, Tabs, Carousel, Badge } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import portfolio from "../assets/portfolio.png";
import resume from "../assets/resume.pdf";

const funFacts = [
  "I love coding challenges and building solutions.",
  "I once built a chatbot that responded with tailored health recommendations.",
  "I enjoy playing chess in my free time.",
  "I have a keen interest in AI-generated art.",
  "I collect vintage tech gadgets.",
  "I am fascinated by cybersecurity mysteries."
];

function Home() {
  const [key, setKey] = useState("achievements");

  return (
    <Container className="home-container text-center">
      <Row className="align-items-center">
        {/* Text & Image Section */}
        <Col md={6}>
          <h1 className="display-4 fw-bold new-text">Elijah Abolaji</h1>
          <p className="lead text-muted">
            Bringing 8+ years of software engineering expertise. Skilled in AI/ML, data science,
            web development with language proficiency in Python, C#, Dart, JavaScript, Typescript,
            PHP, SQL, and R. Competent in cybersecurity, SQL, and tech frameworks; adept in Trello and Jira.
          </p>
          <Badge className="new mb-2 p-2" bg="new" text="light">
            <span>Software Engineer | Data Scientist | AI Enthusiast</span>
          </Badge> <br />
          <span className="new-text">
            +2348069213941
          </span>

          {/* Buttons */}
          <div className="mt-3">
            <Button variant="" className="new me-2 mb-2" size="lg" as={Link} to='/projects'>
              View My Work
            </Button>
            <Button variant="" className="new me-2 mb-2" size="lg" href={resume} download>
              Download Resume
            </Button>
          </div>

          {/* Socials */}
          <div className="social-links mt-4 mb-3">
            <a href="https://www.linkedin.com/in/elijahabolaji/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="social-icon mx-2" />
            </a>
            <a href="https://github.com/toyosee" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="social-icon mx-2" />
            </a>
            <a href="https://www.facebook.com/abolaji.elijah" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className="social-icon mx-2" />
            </a>
            <a href="https://wa.me/2348069213941" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} className="social-icon mx-2" />
            </a>
            <a href="mailto:tyabolaji@gmail.com">
              <FaEnvelope size={30} className="social-icon mx-2" />
            </a>
          </div>
        </Col>

        {/* Image Section */}
        <Col md={6} className="image-section">
          <img src={portfolio} alt="Portfolio showcase" className="img-fluid rounded-circle profile-image shadow" />
        </Col>
      </Row>

      {/* Interactive Sections with Tabs */}
      <Tabs id="profile-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="new-text mt-3">
        {/* Achievements Tab */}
        <Tab eventKey="achievements" title="Achievements" style={{color:"rgb(28, 150, 107)"}} >
          <Row>
            <Col md={12} className="new-text mt-3">
              <h3 className="fw-bold new-text">Highlighted Achievements</h3>
              <ul className="list-unstyled text-muted">
                <li>🎤 Lead Faculty, Software Engineering and Data Science</li>
                <li>📜 CISCO Certified in Python and Cyber Security</li>
                <li>🌍 Set up a tech Community impacting 200+ people (Barterverse)</li>
              </ul>
            </Col>
          </Row>
        </Tab>

        {/* Tech Stack & Tools Tab */}
        <Tab eventKey="techstack" title="Tech Stack">
          <Row>
            <Col md={12} className="mt-3">
              <h3 className="fw-bold new-text">Tech Stack & Tools</h3>
              <p className="text-muted">
                <strong className="new-text">Languages:</strong> Python, JavaScript, C#, Dart, Typescript, SQL, R  
                <br />
                <strong className="new-text">Frameworks:</strong> React, Next.js, Node.js, Flask, Django, Flutter  
                <br />
                <strong className="new-text">Tools:</strong> Docker, AWS, Firebase, Trello, Jira  
              </p>
            </Col>
          </Row>
        </Tab>

        {/* Fun Facts Tab with Auto-Sliding Carousel */}
        <Tab eventKey="funfacts" title="Fun Facts">
          <Row>
            <Col md={12} className="mt-3">
              <h3 className="fw-bold new-text">Did You Know?</h3>
              <Carousel indicators={false} controls={false} interval={4000}>
                {funFacts.map((fact, index) => (
                  <Carousel.Item key={index}>
                    <p className="lead new-text">{fact}</p>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Home;