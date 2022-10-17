import React, { Fragment } from 'react';
import { Container, Row, Col, Media, Image, Button } from 'react-bootstrap';
import Profile from '../../Assets/Images/profile.jpg';
import LineShimmer from '../../UI/Shimmer/Shimmer';
import './Middle.css';
function Middle(props) {

    const { aboutMe = null, resumeUrl = '' } = props;

    const getResumeUrl = () => {
        window.open(resumeUrl, "_blank");
    }
    return (
        <Fragment>
            <Container id="aboutMe">
                <Row>
                    <Col md={6} className="p-0 d-lg-block">
                        <Media>
                            <Image src={Profile} fluid rounded></Image>
                        </Media>
                    </Col>
                    <Col md={6} className="intro-Info">
                        <h1 className="aboutMe">
                            About Me
                        </h1>
                        <div>
                            <h5 className="intro-sec">
                                {aboutMe === null ? <LineShimmer styles={{ width: "80%", height: "6em" }} /> : aboutMe.about}
                            </h5>
                        </div>
                        <div className="info-section">
                            <ul className="about-info mt-4">
                                <li><div className="field"> Name : </div>  <span className="answer">{aboutMe === null ? <LineShimmer styles={{ width: "50%", height: "1.2em" }} /> : <span className="answer">{aboutMe.name}</span>}</span></li>
                                <li><span className="field"> Date of Birth : </span> {aboutMe === null ? <LineShimmer styles={{ width: "50%", height: "1.2em" }} /> : <span className="answer">{aboutMe.dob}</span>}</li>
                                <li><span className="field"> Address : </span> {aboutMe === null ? <LineShimmer styles={{ width: "50%", height: "1.2em" }} /> : <span className="answer">{aboutMe.address}</span>}</li>
                                <li><span className="field"> Email : </span> <span className="answer">{aboutMe === null ? <LineShimmer styles={{ width: "50%", height: "1.2em" }} /> : aboutMe.email}</span></li>
                            </ul>
                            <div className="btn-container">
                                <Button size="lg" onClick={getResumeUrl} > Download CV </Button>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </Fragment>

    )
}
export default Middle;