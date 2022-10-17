import React, { Fragment } from 'react';
import Project from './Project/Project';

function Projects(props) {
    const { projects = [] } = props;
    return (
        <Fragment>
            <div id="majorProjects">
                <h2 className="sub-heading"> Major Projects :</h2>
                <div>
                    {projects.map(pro => (
                        <Project key={pro.date} date={pro.date} title={pro.title} about={pro.about} />
                    ))}
                </div>
            </div>

        </Fragment>

    )
}

export default Projects;