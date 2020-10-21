import React, { Component } from 'react';
import List from '../List.jsx';
import Detail from '../Detail.jsx';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={List}>
              
            </Route>
            <Route exact path="/detail/:id" component={Detail}>
            
            </Route>
            
          </Switch>
      
        </Router>
      </div>
    );
  }
}
