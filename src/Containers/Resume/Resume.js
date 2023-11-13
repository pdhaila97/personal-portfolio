import React, { Fragment } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import WorkExperience from './WorkEx/Experiences';
import Education from './Education/Educations';
import Project from './Project/Projects';
import Skills from './Skills/Skill';
import Achievements from './Achievements/Achievements';
import './Resume.css';

function Resume(props) {

    const { experience, skills, projects, achievements, education } = props;

    const onLinkClick = id => {
        const elem = document.getElementById(id);
        const headerHeight = document.getElementsByTagName('nav')[0].offsetHeight;
        const elementTop = elem.getBoundingClientRect().top + window.pageYOffset - 24;
        const adjustedScrollPosition = elementTop - headerHeight;

        window.scrollTo({
        top: adjustedScrollPosition,
        behavior: 'smooth'
        });
    }
    
    return (
        <Fragment>
            <div className="Resume-Outer" id="resume">
                <Container>
                    <Row>
                        <Col md={3} className='navigation' style={{marginBottom: "48px"}}>
                            <Nav id="navi">
                                <ul>
                                    <li> <a onClick={onLinkClick.bind(this, "workExperience")}> Work Experience </a> </li>
                                    <li> <a onClick={onLinkClick.bind(this, "education")}> Education </a></li>
                                    <li> <a onClick={onLinkClick.bind(this, "majorProjects")}> Major Projects </a></li>
                                    <li> <a onClick={onLinkClick.bind(this, "skills")}> Skills </a></li>
                                    <li> <a onClick={onLinkClick.bind(this, "achievements")}> Achievements </a></li>
                                </ul>
                            </Nav>
                        </Col>
                        <Col md={9} className='details'>
                            <WorkExperience experience={experience} />
                            <Education education={education} />
                            <Project projects={projects} />
                            <Skills skills={skills} />
                            <Achievements achievements={achievements} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}
export default Resume;