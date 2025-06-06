import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="about-container mt-5">
      <Row className="justify-content-center">
        {/* About Section */}
        <Col md={10}>
          <Card className="shadow-lg border-0 p-4">
            <Card.Body>
              <h1 className="display-4 text-center fw-bold new-text">About Me</h1>
              <p className="lead text-muted text-center">
                Passionate Software Engineer specializing in AI, Machine Learning, Data Science, Data Analysis, Mobile App Development, Web Development, and Cybersecurity.
              </p>
              <hr />

              <Row className="mt-4">
                <Col md={6}>
                  <h3 className="fw-bold new-text">Background</h3>
                  <p>
                    With over 8 years of experience, I've worked on <strong>cutting-edge technologies</strong> across multiple industries,
                    delivering impactful software solutions and AI-powered applications.
                  </p>
                </Col>
                <Col md={6}>
                  <h3 className="fw-bold new-text">Core Skills</h3>
                        <p>
                            <ul>
                                <li>
                                    Programming Languages: Python, JavaScript, C#, Dart, SQL, R
                                          </li>
                                          <li>
                                          Frameworks: React, Next.js, Node.js, Flask, Django, Flutter 
                                          </li>
                                          <li>
                                          Cybersecurity, Data Science, Machine Learning
                                          </li>
                                          <li>
                                          Project Management: Trello, Jira, Agile Methodologies
                                </li>
                            </ul>
                  </p>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col md={6}>
                  <h3 className="fw-bold new-text">Mission Statement</h3>
                  <p>
                    Committed to leveraging technology for <strong>problem-solving</strong> and <strong>business transformation</strong>, ensuring efficiency and innovation in every project.
                  </p>
                </Col>
                <Col md={6}>
                  <h3 className="fw-bold new-text">What Drives Me</h3>
                  <p>
                    I'm passionate about <strong>AI research, automation, and software scalability</strong>, working towards solutions that shape the <strong>future of tech</strong>.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;