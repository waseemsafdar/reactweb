import React from 'react'
import { NavLink } from 'react-router-dom'

const Signedoutlinks=()=> {

    return (
            <ul  className="right">
                <li><NavLink to='/signup'>Signup</NavLink></li>
                <li><NavLink to='/signin'>Log In</NavLink></li> 
            </ul>
    )

}

export default Signedoutlinks 