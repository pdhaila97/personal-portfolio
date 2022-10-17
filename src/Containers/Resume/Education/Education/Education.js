import React,{Fragment} from 'react';
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import './Education.css';
const Education = (props) =>{
    return(
        <Fragment>
            <div className="Education-Section">
                <SchoolSharpIcon color="primary" style={{ fontSize: 45}}/>
                <span className="Date">{props.date}</span>
                <div>
                    <h2>{props.degree}</h2>
                    <span className="Company">{props.school}</span>
                </div>
            </div>
        
        </Fragment>
    );  

}
export default Education;