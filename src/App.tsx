import React, {Component} from 'react';
import './App.css';
import INonProps from "./interface/INonProps";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ReduxFC from "./pages/ReduxFC";
import ReduxClass from "./pages/ReduxClass";
import ReduxUserList from "./pages/ReduxUserList";
import HOC from "./pages/HOC";

class App extends Component<INonProps, any> {

  render() {
      return (
          <div className="App">

              <Router>
                  <ul>
                      <li>
                          <Link to={"/redux/fc"}>redux/fc</Link>
                      </li>
                      <li>
                          <Link to={"/redux/class"}>redux/class</Link>
                      </li>
                      <li>
                          <Link to={"/redux/userList"}>redux/userList</Link>
                      </li>
                      <li>
                          <Link to={"/hoc"}>redux/hoc</Link>
                      </li>
                  </ul>
                  <Switch>
                      <Route path={"/redux/fc"} >
                          <ReduxFC />
                      </Route>
                      <Route path={"/redux/class"} >
                          <ReduxClass />
                      </Route>
                      <Route path={"/redux/userList"} >
                          <ReduxUserList />
                      </Route>
                      <Route path={"/redux/hoc"} >
                          <HOC />
                      </Route>

                  </Switch>
              </Router>
          </div>
      );
  }

}

export default App;
