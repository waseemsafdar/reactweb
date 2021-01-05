import React from 'react'
import projectReducer from '../../store/reducers/projectReducer'
import Projectsummery from './projectsummery'
const  Projectlist = ({projects}) => {
    return(
        <div className="project-list section">
          {projects && projects.map (project => {
              return <Projectsummery project={project} key={project.id}/>
          })}
        </div>
    )
}
export default Projectlist