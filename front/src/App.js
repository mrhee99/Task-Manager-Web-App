import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './UserList';
import UserEdit from "./UserEdit";
import TaskList from './TaskList';
import TaskEdit from "./TaskEdit";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/Users' exact={true} component={UserList}/>
            <Route path='/Users/:id' component={UserEdit}/>
            <Route path='/Tasks' exact={true} component={TaskList}/>
            <Route path='/Tasks/:id' component={TaskEdit}/>

          </Switch>
        </Router>
    )
  }
}

export default App;