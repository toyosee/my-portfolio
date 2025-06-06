import { Container, Row, Col, Card, Button, Stack } from "react-bootstrap";
import web1 from "../assets/web1.PNG"; // Example image import
import management2 from "../assets/management2.PNG"; // Example image import
import memorizeit from "../assets/memorizeit.PNG"; // Example image import
import squash from "../assets/squash.png"; // Example image import
import regressiontools2 from "../assets/regressiontools2.PNG"; // Example image import
import AnacareMobile from "../assets/AnacareMobile.PNG"; // Example image import

// Dummy project data
const projects = [
  {
    title: "AI Powered Flashcard App",
    description: "Created a flashcard app using Flutter, Dart, and Sqlite with AI features for personalized learning. And analytics",
    image: memorizeit,
    link: "https://github.com/toyosee",
  },
  {
    title: "Process Server Web Application",
    description: "Built a legal ane process server website using Core JavaScript, Wordpress, MySql.",
    image: web1,
    link: "https://acptx.com",
  },
  {
    title: "School Management Dashboard",
    description: "Designed a school management dashboard with real-time data analysis and charts using Nodejs, Express and SQL.",
    image: management2,
    link: "https://github.com/toyosee/school-manager",
    },
    {
        title: "Squash",
        description: "A fast-paced, mosquito-squashing game that tests your reflexes and precision. Developed using Flutter and dart, it features engaging graphics and sound effects. It is available on playstore",
        image: squash,
        link: "https://play.google.com/store/apps/details?id=com.toyosee.efan&pcampaignid=web_share",
    },
    {
        title: "Regression Tool",
        description: "This tool helps users analyze relationships between variables, make predictions, and optimize decision-making based on data patterns. It is built using Python, Flask. It is available as open source on GitHub.",
        image: regressiontools2,
        link: "https://github.com/toyosee/regression_tool",
    },
    {
        title: "Anna Care",
        description: "A comprehensive preventive medicine solution combines several health and wellness tools in one convenient app. Calculates BMI, gives preventive health advice, show updates on COVID-19, manages work-life balance. It is built using Flutter and Dart.",
        image: AnacareMobile,
        link: "https://github.com/toyosee/anna_care_app",
    },
    
];

const repo = "https://github.com/toyosee/"

function Projects() {
  return (
    <Container className="projects-container mt-5">
          <Stack direction="horizontal" className="justify-content-between align-items-center"          >
              <h1 className="display-4 fw-bold new-text mb-2">My Projects</h1>
                <Button variant="" className="new ms-3" href={repo} size="lg" target="_blank" rel="noopener noreferrer">
                  Go To My Repository
                </Button>
      </Stack>
      <p className="lead text-muted text-center">
        Showcasing a collection of my latest works in software development, AI, and web technologies.
      </p>
      <hr />

      <Row className="mt-4">
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="shadow-lg border-0 mb-4">
              <Card.Img variant="top" src={project.image} className="project-image" />
              <Card.Body>
                <h3 className="fw-bold new-text">{project.title}</h3>
                <p>{project.description}</p>
                <Button variant="" className="new" href={project.link} target="_blank" rel="noopener noreferrer">
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

export default Projects;