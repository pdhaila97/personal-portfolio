import React from 'react';
import CardGiftcardTwoToneIcon from '@material-ui/icons/CardGiftcardTwoTone';
import './Achievement.css';
const achievement = (props) =>{
    return(
        <div className="Achievements-Section">
            <CardGiftcardTwoToneIcon color="primary" style={{ fontSize: 45}}/>
            <span className="Date">{props.date}</span>
            <div>
                <p>{props.about}</p>
            </div>
        </div>
    );
}
export default achievement;