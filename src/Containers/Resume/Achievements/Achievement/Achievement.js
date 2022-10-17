import React from 'react';
import CardGiftcardTwoToneIcon from '@material-ui/icons/CardGiftcardTwoTone';
import './Achievement.css';
const achievement = (props) =>{
    return(
        <div className="Achievements-Section">
            <CardGiftcardTwoToneIcon color="primary" style={{ fontSize: 45}}/>
            <span className="Date">{props.date}</span>
            <div>
                <h4>{props.about}</h4>
            </div>
        </div>
    );
}
export default achievement;