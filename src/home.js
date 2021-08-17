import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    state = {  }
    render() { 
        return (  
            <>
            <header>
                <div className="title">  </div>
                <div className="links">
                    <NavLink exact to="/cats">Cats</NavLink>
                    <NavLink to="/dogs">Dogs </NavLink>
                </div>
            </header>
            <h1 className="home">
                Welcome Home Hooomon
            </h1>
            </>
        );
    }
}
 
export default Home;