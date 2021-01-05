import React from 'react'
import Notification from './notifications'
import Projectlist from '../project/projectlist'
import { connect } from 'react-redux'
 
const Dashboard=(props)=> {
    console.log(props)
    const { projects } = props
    return( 
        <div className="dashboard container">
       
            <div className="row ">
                <div className="col s12 m6  ">
                    <Projectlist projects= {projects}/> 
                </div>
                <div className="col s12 m5 off-set-m1">
                    <Notification/>  
                          
                </div>
            </div>
        </div>
    )

}
const mapStateToProps =(state) =>{
 return { 
projects: state.project.projectsdata
 }
}

export default connect(mapStateToProps)(Dashboard)