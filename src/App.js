import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
      return (
          <section className="app">

              <BrowserRouter>

                        
                  <Switch>
                      <Route exact path="/" component={Home} />

                      <Route path="/dogs" component={dogs} />

                      <Route path="/cats" component={cats} />


                  </Switch>

              </BrowserRouter>

          </section>
      );
  }
}
export default App;
