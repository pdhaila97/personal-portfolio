import React from 'react';
import {Container} from 'react-bootstrap';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';

const Contact = (props) =>{

    const { aboutMe = {} } = props;
    return(
        <Container id="contactMe">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                            <h1> Contact Me </h1>
                        </div>
                    </div>
                    <div className="row d-flex contact-info mb-5">
                        <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                            <div className="align-self-stretch box text-center p-4 shadow">

                                <MailIcon style={{ fontSize: 45}}/>
                                <h3 className="mb-4">Email Address</h3>
                                <p><a href={`mailto:${aboutMe.email}`}>{aboutMe.email}</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                            <div className="align-self-stretch box text-center p-4 shadow">

                                <LinkedInIcon color="primary" style={{ fontSize: 45}}/>
                                <h3 className="mb-4"> LinkedIn </h3>
                                <p><a target='_blank' href={aboutMe.linkedInUrl}>{aboutMe.name}</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                            <div className="align-self-stretch box text-center p-4 shadow">

                                <GitHubIcon style={{ fontSize: 45}}/>
                                <h3 className="mb-4"> Github </h3>
                                <p><a target='_blank' href={aboutMe.githubUrl}>{aboutMe.name}</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                            <div className="align-self-stretch box text-center p-4 shadow">

                                <CodeIcon style={{ fontSize: 45}}/>
                                <h3 className="mb-4"> Codechef </h3>
                                <p><a target='_blank' href={aboutMe.codechefUrl}>{aboutMe.name}</a></p>
                            </div>
                        </div>
                    </div>
        </Container>
    )

}
export default Contact;