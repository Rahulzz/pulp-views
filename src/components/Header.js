import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Popup } from "semantic-ui-react";
import { Scrollbars } from "react-custom-scrollbars";
import Menu from "../components/Menu";
import pulp from "../static/images/pulp-logo.png";

const notification_data = [
  {
    type: "project",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Nam ultricies leo eu lorem dignissim fermentum id vitae dolor. In sed lacus aliquam, ullamcorper.."
  },
  {
    type: "queue",
    title: "Nam ultricies leo eu lorem",
    description:
      "Sed sit amet finibus nisi. Fusce eu mollis neque. Sed tristique, felis vitae tristique vulputate.."
  },
  {
    type: "queue",
    title: "Donec tortor ipsum, iaculis",
    description:
      "Maecenas auctor arcu id purus luctus semper. Vestibulum posuere venenatis.."
  },
  {
    type: "project",
    title: "Proin neque libero, dapibus",
    description:
      "Praesent imperdiet eros in lorem fermentum, eget facilisis felis tincidunt. Curabitur maximus.."
  },
  {
    type: "project",
    title: "Aenean sollicitudin varius rutrum",
    description:
      "Sed malesuada gravida arcu. Nam vel ex ac risus euismod dignissim in pharetra mauris.."
  },
  {
    type: "queue",
    title: "Nam bibendum neque bibendum",
    description:
      "Nulla vel rhoncus sem, venenatis semper nisl. Nam eu nibh non est rutrum luctus in vitae lacus.."
  }
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      activeNotification: false,
      activeProfile: false
    };
  }

  displayMenuOverlay = () => {
    this.setState({
      showMenu: true
    });
  };

  closeMenuOverlay = () => {
    this.setState({
      showMenu: false
    });
  };

  mountPopup = type => {
    if ("notification" == type) {
      this.setState({
        activeNotification: true
      });
    } else {
      this.setState({
        activeProfile: true
      });
    }
  };

  unmountPopup = type => {
    if ("notification" == type) {
      this.setState({
        activeNotification: false
      });
    } else {
      this.setState({
        activeProfile: false
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Menu
          type={this.props.type}
          selected={this.props.selected}
          displayMenu={this.state.showMenu}
          close={this.closeMenuOverlay}
        />
        <div className="header full-screen-wrapper">
          <div className="menu-button">
            <div
              className="icon icon-menu ease-element"
              onClick={this.displayMenuOverlay}
            />
          </div>
          <div className="pulp-logo">
            <img src={pulp} />
          </div>
          <div className="options">
            <Popup
              trigger={
                <div
                  className={
                    this.state.activeNotification
                      ? "icon active icon-menu-notification ease-element"
                      : "icon icon-menu-notification ease-element"
                  }
                />
              }
              position="bottom center"
              className="header-popup"
              hoverable={true}
              onMount={() => this.mountPopup("notification")}
              onUnmount={() => this.unmountPopup("notification")}
            >
              <div className="notification-box">
                <div className="header-box">
                  <div className="title">Notifications</div>
                  <div className="count">006</div>
                </div>
                <Scrollbars
                  className="pulp-scrollbar pulp-header-popup-scrollbar"
                  style={{ height: 350 }}
                >
                  <div className="list-box">
                    {notification_data.map((answer, i) => {
                      return (
                        <div className="item">
                          <div className={"icon icon-menu-" + answer.type} />
                          <div className="detail">
                            <div className="title">{answer.title}</div>
                            <div className="description">
                              {answer.description}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Scrollbars>
              </div>
            </Popup>
            <Popup
              trigger={
                <div
                  className={
                    this.state.activeProfile
                      ? "icon active icon-menu-profile ease-element"
                      : "icon icon-menu-profile ease-element"
                  }
                />
              }
              content="Profile"
              position="bottom center"
              className="header-popup"
              hoverable={true}
              onMount={() => this.mountPopup("profile")}
              onUnmount={() => this.unmountPopup("profile")}
            >
              <div className="profile-box">
                <div className="header-box">
                  <div className="avatar">MR</div>
                  <div className="details">
                    <div className="title">Mahesh Rudraiah</div>
                    <div className="email">mahesh.rudraiah@ermintrud.com</div>
                  </div>
                </div>
                <div className="options-box">
                  <Link to={"#"}>
                    <div className="option">
                      <div className="icon icon-menu-settings" />
                      <div className="title">account settings</div>
                    </div>
                  </Link>
                  <Link to={""}>
                    <div className="option">
                      <div className="icon icon-menu-power" />
                      <div className="title">sign out</div>
                    </div>
                  </Link>
                </div>
                <div className="footer-box">last login @ 10:38 11/21/2018</div>
              </div>
            </Popup>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
