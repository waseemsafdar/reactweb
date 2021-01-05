import React from 'react'
import { Link } from 'react-router-dom'
import Signedinlinks from './signedinlinks'
import Signedoutlinks from './Signedoutlinks'

const Navbar=()=> {

    return (
    <nav className="nav-wrapper black">
        <div className="container">
            <Link to='/' className="brand-logo left">ProjectBook</Link>
           <Signedinlinks />
           <Signedoutlinks />
           
        </div>
     </nav>
    )

}

export default Navbar 