import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../assets/styles/aboutpage.css';
import skillsData from './data/skills.json'; 

// For the Timeline
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const theme = createTheme({
    palette: {
      primary: {
        main: '#9545E4',
        contrastText: '#9545E4', // Define contrastText here
      },
      secondary: {
        main: '#F4F4F9',
        contrastText: '#F4F4F9', // Define contrastText here
      },
    },
  });

function SkillSection() {
  return (
    <Container>
     <ThemeProvider theme={theme}>
      {/* Skills and Education Section */}
      <Row className='skills-section'>
        <Col className='skills'>
          <h1>My <span>Skills</span></h1>
          <Row className='skill-cards'>
            {skillsData.map((skill, index) => (
                <Card className='skill-card' style={{ '--j': index + 1 }}>
                  <Card.Body className='skill-card-body'>
                    <Card.Title className='skill-card-title'>
                      <img
                        className='tech-logo'
                        src={require(`../../assets/images/technologies/${skill.image}`)}
                        alt={skill.title}
                      />
                    </Card.Title>
                    <Card.Subtitle className="skill-card-subtitle">{skill.description}</Card.Subtitle>
                  </Card.Body>
                </Card>
              
            ))}
          </Row>
        </Col>

        <Col  className='education'>
          <h1>My <span>Education</span></h1>
          <Col className='timeline'>
            
          <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
                },
            }}
            className='timeline'
            >
            <TimelineItem>
                <TimelineOppositeContent color="secondary" className='timeline-year'  style={{ '--j': 2 }}>
                   <h5 className='timeline-subtitle'><span>06/2024</span></h5>
                </TimelineOppositeContent>
                <TimelineSeparator color = 'secondary'  className='timeline-separator'  style={{ '--j': 1 }}>
                    <TimelineDot color = 'primary'  className='timeline-dot'  style={{ '--j': 1 }}/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography><h4 className='timeline-title' style={{ '--j': 3 }}>BSc in Computer Science and Technology</h4></Typography>
                    <Typography><h5 className='timeline-subtitle' style={{ '--j': 4 }}>Tecnológico de Monterrey</h5></Typography>
                    <Typography>
                        <p className='timeline-text' style={{ '--j': 5 }}>
                        Gained expertise in software engineering, programming languages, data structures, algorithms, and computer systems. Gained hands-on experience in software development, designing, implementing, and testing efficient and scalable solutions. 
                        </p>
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="secondary" className='timeline-year'  style={{ '--j': 7 }}>
                   <h5 className='timeline-subtitle'><span>05/2024</span></h5>
                </TimelineOppositeContent>
                <TimelineSeparator color = 'secondary' className='timeline-separator'  style={{ '--j': 6 }}>
                    <TimelineDot color = 'primary' className='timeline-dot'  style={{ '--j': 6 }}/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography><h4 className='timeline-title' style={{ '--j': 8 }}>Deep Learning Specialization</h4></Typography>
                    <Typography><h5 className='timeline-subtitle' style={{ '--j': 9 }}>Huawei Global Training Center</h5></Typography>
                    <Typography>
                        <p className='timeline-text' style={{ '--j': 10 }}>
                        Enhanced AI expertise through the Infotec AI 1000 program, gaining proficiency in machine learning, deep learning, and AI tools. Gained hands-on experience in AI development through  applying theoretical knowledge to real-world problems.
                        </p>
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="secondary" className='timeline-year'  style={{ '--j': 12 }}>
                   <h5 className='timeline-subtitle'><span>12/2023</span></h5>
                </TimelineOppositeContent>
                <TimelineSeparator color = 'secondary' className='timeline-separator'  style={{ '--j': 11 }}>
                    <TimelineDot color = 'primary' className='timeline-dot'  style={{ '--j': 11 }}/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography><h4 className='timeline-title' style={{ '--j': 13 }}>Minor Degree in Data Analytics and Artificial Intelligence</h4></Typography>
                    <Typography><h5 className='timeline-subtitle' style={{ '--j': 14 }}>Tecnológico de Monterrey</h5></Typography>
                    <Typography>
                        <p className='timeline-text' style={{ '--j': 15 }}>
                        Acquired prowess in data analysis techniques, statistical modeling, and machine learning algorithms. Gained practical experience working with various data sources, cleaning, preprocessing, and analyzing data using Python.
                        </p>
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            </Timeline>

          </Col>
        </Col>
      </Row>
      </ThemeProvider>
    </Container>
  );
}

export default SkillSection;
