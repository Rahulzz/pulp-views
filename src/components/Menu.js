import React, { Component } from "react";
import { Link } from "react-router-dom";
import { StaggeredMotion, spring } from "react-motion";
import pulp from "../static/images/pulp-logo.png";

var singleContainerPosition = -600;
var multiContainerPosition = -1000;

var app_menu_options = [
  {
    name: "appdashboard",
    icon: "icon-menu-whatshot",
    title: "What's Hot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit.",
    link: "/appDashboard"
  },
  {
    name: "projects",
    icon: "icon-menu-project",
    title: "Projects & Queues",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit.",
    link: "/projects"
  },
  {
    name: "bugs",
    icon: "icon-menu-bugs",
    title: "Bugs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit.",
    link: "/bugs"
  },
  {
    name: "users",
    icon: "icon-menu-user",
    title: "Users",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit.",
    link: "/users"
  },
  {
    name: "you",
    icon: "icon-menu-you",
    title: "My report card",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit.",
    link: "/users"
  },
  {
    name: "team",
    icon: "icon-menu-team",
    title: "Team's report card",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit.",
    link: "/users"
  }
];

var project_menu_options = [
  {
    name: "projectdashboard",
    icon: "icon-menu-howisitgoing",
    title: "How is it going",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit.",
    link: "/projectDashboard"
  },
  {
    name: "overview",
    icon: "icon-menu-overview",
    title: "Overview",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit.",
    link: "/overview"
  },
  {
    name: "backlog",
    icon: "icon-menu-backlog",
    title: "Backlog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit.",
    link: "/backlog"
  },
  {
    name: "sprint",
    icon: "icon-menu-timeline",
    title: "Sprint",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit.",
    link: "/sprint"
  },
  {
    name: "boards",
    icon: "icon-task-board",
    title: "Boards",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit.",
    link: "/boards"
  }
];

class MenuItem extends Component {
  render_item_content = props => {
    return (
      <div
        className={
          props.selected
            ? "menu-option selected ease-element"
            : "menu-option ease-element"
        }
      >
        <div className="title ease-element">
          <div className={props.icon} />
          <div className="name">{props.title}</div>
        </div>
        <div className="description ease-element">{props.description}</div>
      </div>
    );
  };

  render() {
    if (null != this.props.link) {
      return (
        <Link to={this.props.link}>{this.render_item_content(this.props)}</Link>
      );
    } else {
      return;
      {
        this.render_item_content(this.props);
      }
    }
  }
}

class Menu extends Component {
  componentDidMount() {
    document.addEventListener("mousedown", this.closeMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.closeMenu);
  }

  closeMenu = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.close();
    }
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  changeSingleMenuOverlayDisplayMode(menuPosition) {
    if (this.props.displayMenu) {
      return "overlay-box reveal";
    } else {
      if (singleContainerPosition === menuPosition) {
        return "overlay-box wrap";
      } else {
        return "overlay-box reveal";
      }
    }
  }

  changeMultiMenuOverlayDisplayMode(menuPosition) {
    if (this.props.displayMenu) {
      return "overlay-box reveal";
    } else {
      if (multiContainerPosition === menuPosition) {
        return "overlay-box wrap";
      } else {
        return "overlay-box reveal";
      }
    }
  }

  render() {
    if ("project" === this.props.type) {
      return (
        <StaggeredMotion
          defaultStyle={({ opacity: 0 }, { x: multiContainerPosition })}
          styles={prevStyles => [
            { opacity: spring(this.props.displayMenu ? 1 : 0) },
            {
              x: spring(this.props.displayMenu ? -5 : multiContainerPosition, {
                stiffness: 120,
                damping: 17
              })
            }
          ]}
        >
          {styles => (
            <div
              className={this.changeMultiMenuOverlayDisplayMode(styles[1].x)}
            >
              <div
                ref={this.setWrapperRef}
                className="menu-container"
                style={{
                  transform: "translateX(" + styles[1].x + "px)"
                }}
              >
                <div className="menu-title-section">
                  <div className="quote vertical-text">
                    <div className="data">
                      <div className="item">
                        <div className="title">cards</div>
                        <div className="value">09</div>
                      </div>
                      <div className="item">
                        <div className="title">blocked</div>
                        <div className="value">04</div>
                      </div>
                      <div className="item">
                        <div className="title">bugs</div>
                        <div className="value">02</div>
                      </div>
                      <div className="icon icon-menu-quote" />
                    </div>
                  </div>
                  <div className="title vertical-text">
                    <div className="title-name">mahesh rudraiah</div>
                    <div className="title-email">
                      mahesh.rudraiah@ermintrud.com
                    </div>
                  </div>
                </div>
                <div className="menu-content-section">
                  <div className="menu-app-title">
                    <img src={pulp} />
                    <span className="icon icon-menu-settings" />
                  </div>
                  <div className="menu-options-container">
                    {app_menu_options.map((answer, i) => {
                      return (
                        <MenuItem
                          link={answer.link}
                          icon={"icon " + answer.icon}
                          title={answer.title}
                          description={answer.description}
                          selected={
                            answer.name === this.props.selected ? true : false
                          }
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="menu-content-section">
                  <div className="menu-project-title">
                    <div className="title">Europe Thinline</div>
                    <div className="duration">
                      2 months, 10 days to complete
                    </div>
                  </div>
                  <div className="menu-options-container">
                    {project_menu_options.map((answer, i) => {
                      return (
                        <MenuItem
                          link={answer.link}
                          icon={"icon " + answer.icon}
                          title={answer.title}
                          description={answer.description}
                          selected={
                            answer.name === this.props.selected ? true : false
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div
                className="app-overlay"
                style={{ opacity: styles[0].opacity }}
              />
            </div>
          )}
        </StaggeredMotion>
      );
    } else {
      return (
        <StaggeredMotion
          defaultStyle={({ opacity: 0 }, { x: singleContainerPosition })}
          styles={prevStyles => [
            { opacity: spring(this.props.displayMenu ? 1 : 0) },
            {
              x: spring(this.props.displayMenu ? -5 : singleContainerPosition, {
                stiffness: 120,
                damping: 17
              })
            }
          ]}
        >
          {styles => (
            <div
              className={this.changeSingleMenuOverlayDisplayMode(styles[1].x)}
            >
              <div
                ref={this.setWrapperRef}
                className="menu-container"
                style={{
                  transform: "translateX(" + styles[1].x + "px)"
                }}
              >
                <div className="menu-title-section">
                  <div className="quote vertical-text">
                    <div className="data">
                      <div className="item">
                        <div className="title">cards</div>
                        <div className="value">09</div>
                      </div>
                      <div className="item">
                        <div className="title">blocked</div>
                        <div className="value">04</div>
                      </div>
                      <div className="item">
                        <div className="title">bugs</div>
                        <div className="value">02</div>
                      </div>
                      <div className="icon icon-menu-quote" />
                    </div>
                  </div>
                  <div className="title vertical-text">
                    <div className="title-name">mahesh rudraiah</div>
                    <div className="title-email">
                      mahesh.rudraiah@ermintrud.com
                    </div>
                  </div>
                </div>
                <div className="menu-content-section">
                  <div className="menu-app-title">
                    <img src={pulp} />
                    <span className="icon icon-menu-settings" />
                  </div>
                  <div className="menu-options-container">
                    {app_menu_options.map((answer, i) => {
                      return (
                        <MenuItem
                          link={answer.link}
                          icon={"icon " + answer.icon}
                          title={answer.title}
                          description={answer.description}
                          selected={
                            answer.name === this.props.selected ? true : false
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div
                className="app-overlay"
                style={{ opacity: styles[0].opacity }}
              />
            </div>
          )}
        </StaggeredMotion>
      );
    }
  }
}

export default Menu;
