import React, { Fragment } from 'react';
import Achievement from './Achievement/Achievement';

function Achievements(props) {
    const { achievements } = props;
    return (
        <Fragment>
            <div id="achievements">
                <h2 className="sub-heading"> Achievements :</h2>
                <div>
                    {achievements.map(ach => (
                        <Achievement key={ach.about} date={ach.date} about={ach.about} />
                    ))}
                </div>
            </div>
        </Fragment>
    );
}
export default Achievements;