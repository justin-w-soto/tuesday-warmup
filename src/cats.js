import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Cats extends Component {
    state = {  }
    render() { 
        return ( 
            <> 
            <header>
                <div className="title">  </div>
                <div className="links">
                    <NavLink exact to="/">Home </NavLink>
                    <NavLink to="/dogs">Dogs</NavLink>
                </div>
            </header>
            <h1 className="kitty-cat">
                Cats rule
            </h1>
            </>
        );
    }
}
 
export default Cats;