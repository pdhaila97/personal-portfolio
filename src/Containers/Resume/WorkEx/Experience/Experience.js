import React,{Fragment} from 'react';
import WorkIcon from '@material-ui/icons/Work';
import './Experience.css';
const Experience = (props) =>{
    return(
        <Fragment>
            <div className="Experience-Section">
                <WorkIcon color="primary" style={{ fontSize: 45}}></WorkIcon>
                <span className="Date">{props.date}</span>
                <div className="info-section">
                    <h2>{props.title}</h2>
                    <span className="Company">{props.company}</span>
                    <p>{props.about}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Experience;