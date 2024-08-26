import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../assets/styles/aboutpage.css';

function AboutSection() {
  return (
    <Container>

      {/* About Me Section */}
      <Row className='about-page'>
        <Col className='about-page-text'>
          <h1>About <span>me</span></h1>
          <p style={{ '--j': 1 }}>I am a Software Development and Computer Technologies Specialist with solid experience in creating efficient and scalable technological solutions. Passionate about developing innovative projects that drive digital transformation in various industries. </p>
          <p style={{ '--j': 2 }}>I have an Engineering degree in Computer Science and Technology from the <i>Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)</i> , with an outstanding GPA and a specialization in Data Analytics and Artificial Intelligence. I complemented my training with an advanced specialization in Neural Networks at the <i>Huawei Global Training Center</i>  in Hangzhou, China, excelling in the Infotec IA 1000 Learning Journey program.</p>
          <p style={{ '--j': 3 }}>Additionally, I have worked on numerous projects applying different Computer Science principles, mainly in Artificial Intelligence, Data Science, Web Development, networking and software engineering. </p>
        </Col>
        <Col className='about-page-cards'>
          <Row className='about-page-cards-container'>
            <Col className='cards-first'>
              <Card className = 'card-web' style={{ '--j': 4  }}>
                <Card.Body className = 'card-experience-body'>
                  <Card.Title className = 'card-experience-title'><i class='bx bx-world' ></i></Card.Title>
                  <Card.Subtitle className="card-experience-subtitle">Web Development</Card.Subtitle>
                  <Card.Text className="card-experience-text">
                  Developed exceptional user experiences through web design.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className = 'card-data' style={{ '--j': 6  }}>
                <Card.Body className = 'card-experience-body'>
                  <Card.Title className = 'card-experience-title'><i class='bx bx-stats' ></i></Card.Title>
                  <Card.Subtitle className="card-experience-subtitle">Data Science & Analytics</Card.Subtitle>
                  <Card.Text className="card-experience-text">
                  Leveraged data analysis techniques to drive business decisions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='cards-second'>

            <Card className = 'card-ai' style={{ '--j': 5  }}>
                <Card.Body className = 'card-experience-body'>
                  <Card.Title className = 'card-experience-title'><i class='bx bxs-bot'></i></Card.Title>
                  <Card.Subtitle className="card-experience-subtitle">Artificial Intelligence</Card.Subtitle>
                  <Card.Text className="card-experience-text">
                  Practical experience in turning data into powerful Machine Learning models.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className = 'card-swe' style={{ '--j': 7  }}>
                <Card.Body className = 'card-experience-body'>
                  <Card.Title className = 'card-experience-title'><i class='bx bx-laptop' ></i></Card.Title>
                  <Card.Subtitle className="card-experience-subtitle">Software Engineering</Card.Subtitle>
                  <Card.Text className="card-experience-text">
                  Expert in applying software engineering principles to tackle complex problems.
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </Col>
          </Row>
        
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;