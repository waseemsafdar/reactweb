import React from 'react'

const Projectsummery = ({project}) => {

    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span class="card-title">{project.title}</span>
                    <p>Posted by me</p>
                    <p className="grey-text">march 20 2020</p>
                </div> 
            </div>
    )
}

export default Projectsummery;