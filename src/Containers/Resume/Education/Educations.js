import React, { Fragment } from 'react';
import Education from './Education/Education';

function Educations(props) {

    const { education = [] } = props;

    return (
        <Fragment>
            <div id="education">
                <h2 className="sub-heading"> Education :</h2>
                <div>
                    {education.map(edu => (
                        <Education key={edu.date} date={edu.date} degree={edu.degree} school={edu.school} />
                    ))}
                </div>
            </div>

        </Fragment>
    );
}
export default Educations;