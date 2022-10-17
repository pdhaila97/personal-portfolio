import React,{Fragment} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Project.css';
import { Box } from '@material-ui/core';
const Project = (props) =>{
    return(
        <Fragment>
            <div className="Project-Section">
                <GitHubIcon color="primary" style={{ fontSize: 45}}/>
                <span className="Date">{props.date}</span>
                <Box mt={2}>
                    <h2>{props.title}</h2>
                    <p>{props.about}</p>
                </Box>
            </div>
        </Fragment>
    )

}
export default Project;