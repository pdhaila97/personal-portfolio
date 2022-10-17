import React, { Fragment } from 'react';
import Experience from './Experience/Experience';

function Experiences (props) {
    const { experience = [] } = props;
        return (
            <Fragment>
                <div id="workExperience">
                    <h2 className="sub-heading"> Work Experience:</h2>
                    <div>
                        {experience.map(ex => (
                            <Experience key={ex.date} date={ex.date} title={ex.title} company={ex.company} about={ex.about} />
                        ))}
                    </div>
                </div>
            </Fragment>
        );
}

export default Experiences;