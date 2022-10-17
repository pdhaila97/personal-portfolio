import React,{Fragment} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Project.css';
const Project = (props) =>{
    return(
        <Fragment>
            <div className="Project-Section">
                <GitHubIcon color="primary" style={{ fontSize: 45}}/>
                <span className="Date">{props.date}</span>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.about}</p>
                </div>
            </div>
        </Fragment>
    )

}
export default Project;