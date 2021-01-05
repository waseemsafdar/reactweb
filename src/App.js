import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/layouts/navbar';
import Projectdetails from './components/project/Projectdetails'
import Projectlist from './components/project/projectlist';
import Signedin from './components/auths/Signedin';
import Signedup from './components/auths/Signedup';
import Createproject from './components/project/Createproject'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
        <Navbar/>
         <Switch>
      
            <Route exact path='/' component={Dashboard}/>
            <Route path='/project/:id' component={Projectdetails}/> 
            <Route path='/signin' component={Signedin}/>
            <Route path='/signup' component={Signedup}/>
            <Route path='/createproject' component={Createproject}/>
          </Switch>
        
        </div>
       
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
