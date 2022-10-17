import React, { Fragment } from 'react';
import Block from './Blocks/Block';

function Skills(props) {
    const { skills = [] } = props;

    return (
        <Fragment>
            <div id="skills">
                <h2 className="sub-heading"> Skills :</h2>
                <div className="row progress-circle mb-5">
                    {skills.map(skill => (
                        <Block key={skill} text={skill} />
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default Skills;