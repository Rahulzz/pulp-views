import React, { Component } from "react";
import "./static/css/Bootstrap.css";
import "semantic-ui-css/semantic.min.css";
import "./static/css/Pulp.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Login from "./views/Login";
import AppDashboard from "./views/AppDashboard";
import Projects from "./views/Projects";
import Bugs from "./views/Bugs";
import Users from "./views/Users";
import Overview from "./views/Overview";
import Backlog from "./views/Backlog";
import Boards from "./views/Boards";
import Sprint from "./views/Sprint";
import ProjectDashboard from "./views/ProjectDashboard";
import UserDashboard from "./views/UserDashboard";
import NewProject from "./views/NewProject";
import SingleColumnDragnDrop from "./test/SingleColumnDragnDrop";
import MultiColumnDragnDrop from "./test/MultiColumnDragnDrop";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Login} />
          <Route exact path="/appDashboard" component={AppDashboard} />
          <Route path="/projects" component={Projects} />
          <Route path="/bugs" component={Bugs} />
          <Route path="/users" component={Users} />
          <Route path="/projectDashboard" component={ProjectDashboard} />
          <Route path="/userDashboard" component={UserDashboard} />
          <Route path="/overview" component={Overview} />
          <Route path="/backlog" component={Backlog} />
          <Route path="/boards" component={Boards} />
          <Route path="/sprint" component={Sprint} />
          <Route path="/newProject" component={NewProject} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
