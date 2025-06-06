import { Container, Row, Col, Card } from "react-bootstrap";

function Skills() {
  return (
    <Container className="skills-container mt-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg border-0 p-4">
            <Card.Body>
              <h1 className="display-4 text-center fw-bold new-text">Technical Skills</h1>
              <p className="lead text-muted text-center">
                A versatile software engineer with expertise in various technologies.
              </p>
              <hr />

              <Row className="mt-4">
                <Col md={6}>
                  <h3 className="fw-bold new-text">Programming Languages</h3>
                                  <p>
                                      <ul>
                                          <li>Python</li>
                                          <li>JavaScript (React, Next.js)</li>
                                          <li>C#</li>
                                          <li>Dart (Flutter)</li>
                                          <li>Typescript</li>
                                          <li>SQL</li>
                                          <li>R</li>
                                      </ul>
                  </p>
                </Col>
                <Col md={6}>
                  <h3 className="fw-bold new-text">Frameworks & Tools</h3>
                                  <p>
                                      <ul>
                                          <li>React, Next.js, Node.js</li>
                                          <li>Flask, Django</li>
                                          <li>Bootstrap, Tailwind CSS</li>
                                          <li>Docker, Kubernetes</li>
                                          <li>Firebase, AWS, SQL</li>
                                      </ul>
                  </p>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col md={6}>
                  <h3 className="fw-bold new-text">Cybersecurity & Data Science</h3>
                                  <p>
                                      <ul>
                                          <li>Ethical Hacking & Penetration Testing</li>
                                          <li>Machine Learning & AI Model Development</li>
                                          <li>Data Visualization (Excel, Power BI, Matplotlib)</li>
                                          <li>Security Compliance & Threat Analysis</li>
                                      </ul>
                  </p>
                </Col>
                <Col md={6}>
                  <h3 className="fw-bold new-text">Project Management</h3>
                                  <p>
                                      <ul>
                                          <li>Agile, Scrum Methodologies</li>
                                          <li>Trello & Jira for workflow management</li>
                                          <li>Continuous Integration & Deployment (CI/CD)</li>
                                          <li>GitHub, Version Control & Collaboration</li>
                                      </ul>
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

export default Skills;