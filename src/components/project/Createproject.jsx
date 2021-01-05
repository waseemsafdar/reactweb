
import React, { useState } from 'react';

function Createproject() {
  
    const [state, setState] = useState({
        title: '',
        content: ''
      
      })
      const handleChange = (e) => {
        console.log(e.target.value)
        setState({
          ...state,
          [e.target.id]: e.target.value
        })
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
      }

    return (
        <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
}

export default Createproject
