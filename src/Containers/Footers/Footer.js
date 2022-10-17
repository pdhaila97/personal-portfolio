import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import './Footer.css';


const footer = props => {

    const { aboutMe = {} } = props;

    return (
        <footer className="ftco-footer">
            <Container>
                <Row>
                    <Col md={5}>
                        <h2>About</h2>
                        <div className="Icons"><a href={`mailto:${aboutMe.email}`}><MailIcon style={{ fontSize: 45, color: "white" }} /></a></div>
                        <div className="Icons"><a href={aboutMe.linkedInUrl}><LinkedInIcon style={{ fontSize: 45, color: "white" }} /></a></div>
                        <div className="Icons"><a href={aboutMe.githubUrl}><GitHubIcon style={{ fontSize: 45, color: "white" }} /></a></div>
                        <div className="Icons"><a href={aboutMe.codechefUrl}><CodeIcon style={{ fontSize: 45, color: "white" }} /></a></div>
                    </Col>
                    <Col md={2}>

                    </Col>
                    <Col md={5}>
                        <h2>Have any Questions?</h2>
                        <div className="Icons">
                            <span style={{ display: "flex" }}><MailIcon style={{ fontSize: 45, color: "white", marginRight: "15px" }}></MailIcon><h3><a href={`mailto:${aboutMe.email}`}> {aboutMe.email} </a></h3></span>

                        </div>

                    </Col>
                </Row>

            </Container>
        </footer>


    );

}
export default footer;