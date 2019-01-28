import React, { Component } from "react";
import { Link } from "react-router-dom";
import pulp from "../static/images/pulp-icon-green.png";
import ed from "../static/images/ed-icon-green.png";
import demo from "../static/images/devices.jpg";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="login-container">
          <div className="login-banner">
            <img src={demo} />
          </div>
          <div className="login-form">
            <div className="title">redefine the way you work</div>
            <div className="description">
              Pulp loads you with unique insights to help you plan your work.
              Insights<br />are carefully curated to cater each person.
              Experience the real juice.
            </div>
            <div className="box">
              <div className="field">
                <div className="icon icon-login-email" />
                <div className="type">
                  <input type="text" placeholder="official email address" />
                </div>
              </div>
              <div className="field">
                <div className="icon icon-login-password" />
                <div className="type">
                  <input type="password" placeholder="your password" />
                </div>
              </div>
              <Link to={"appDashboard"}>
                <button>get started</button>
              </Link>
            </div>
          </div>
          <div className="login-footer">
            <img src={pulp} />
            <img src={ed} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
