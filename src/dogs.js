import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Dogs extends Component {
    state = {  }
    render() { 
        return (  
            <>
            <header>
                <div className="title">  </div>
                <div className="links">
                    <NavLink exact to="/">Home </NavLink>
                    <NavLink to="/cats">Cats</NavLink>
                </div>
            </header>
            <h1 className="good-boys">
                Dogs rule
            </h1>
            </>
        );
    }
}
 
export default Dogs;