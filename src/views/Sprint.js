import React, { Component } from "react";
import Col from "react-bootstrap";
import { Breadcrumb, Popup, Dropdown, Checkbox } from "semantic-ui-react";
import SprintBoard from "../components/SprintBoard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OverlayForms from "../components/OverlayForms";

var phase_dummy_list = [
  {
    text: "Release 1.0.0 - Sprint 1",
    value: "1"
  },
  {
    text: "Release 1.0.0 - Sprint 2",
    value: "2"
  },
  {
    text: "Release 1.0.0 - Sprint 3",
    value: "3"
  }
];

var sprint_cards_1 = [
  {
    id: "STR98091712",
    date: "30, AUG 2018",
    title: "Search UI Design",
    description: "",
    current: "5",
    total: "10",
    status: "50",
    color: "#98f80f",
    parentId: "EPIC1512"
  },
  {
    id: "STR98091713",
    date: "01, SEP 2018",
    title: "Search API",
    description: "",
    current: "9",
    total: "10",
    status: "90",
    color: "#98f80f",
    parentId: "EPIC1512"
  },
  {
    id: "STR98091714",
    date: "02, SEP 2018",
    title: "Live Progress",
    description:
      "Aliquam erat volutpat. Aliquam a consequat enim. Sed vulputate eros eget ante vulputate.",
    current: "8",
    total: "20",
    status: "33",
    color: "#fb5707",
    parentId: "EPIC1512"
  }
];

var sprint_cards_2 = [
  {
    id: "STR98091812",
    date: "01, SEP 2018",
    title: "Search API",
    description: "",
    current: "9",
    total: "10",
    status: "90",
    color: "#98f80f",
    parentId: "EPIC1512"
  },
  {
    id: "STR98091813",
    date: "30, AUG 2018",
    title: "Search UI Design",
    description: "",
    current: "5",
    total: "10",
    status: "50",
    color: "#98f80f",
    parentId: "EPIC1512"
  }
];

var sprint_cards_3 = [
  {
    id: "STR98091714",
    date: "02, SEP 2018",
    title: "Live Progress",
    description:
      "Aliquam erat volutpat. Aliquam a consequat enim. Sed vulputate eros eget ante vulputate.",
    current: "8",
    total: "20",
    status: "33",
    color: "#fb5707",
    parentId: "EPIC1512"
  }
];

class Sprint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSprintForm: false,
      sprintStories: sprint_cards_1
    };
  }

  switchPhase = (event, { value }) => {
    console.log("value - " + value);
    if (1 == value) {
      this.setState({
        sprintStories: sprint_cards_1
      });
    } else if (2 == value) {
      this.setState({
        sprintStories: sprint_cards_2
      });
    } else if (3 == value) {
      this.setState({
        sprintStories: sprint_cards_3
      });
    }
  };

  toggleSprintOverlay = () => {
    this.setState({
      showSprintForm: !this.state.showSprintForm
    });
  };

  render() {
    return (
      <React.Fragment>
        <OverlayForms
          type="sprint"
          display={this.state.showSprintForm}
          close={this.toggleSprintOverlay}
        />
        <Header type="project" selected="sprint" />
        <div className="page-header full-screen-wrapper">
          <div className="title">
            <div className="crumb">
              <Breadcrumb>
                <Breadcrumb.Section link href="projectDashboard">
                  Europe Thinline
                </Breadcrumb.Section>
                <Breadcrumb.Divider content="/" />
                <Breadcrumb.Section active>Sprints</Breadcrumb.Section>
              </Breadcrumb>
            </div>
            <div className="name">Sprints</div>
          </div>
          <div className="options">
            <button
              className="active-button to-left"
              onClick={this.toggleSprintOverlay}
            >
              CREATE A NEW SPRINT
            </button>
          </div>
        </div>
        <div className="choice-container full-screen-wrapper">
          <div className="choice-box">
            <div className="choice-field">
              <span className="pre-text">Stories for </span>
              <Dropdown
                inline
                options={phase_dummy_list}
                defaultValue={phase_dummy_list[0].value}
                icon=""
                on="hover"
                onChange={this.switchPhase}
              />
            </div>
            <div className="default-field">
              <Checkbox label="display this sprint by default" />
            </div>
          </div>
        </div>
        <div className="statsnfilter-box full-screen-wrapper">
          <div className="stats-box">
            <div className="stats-item">
              <div className="icon icon-card-story" />
              <div className="stats-value">
                {this.state.sprintStories.length < 10
                  ? "0" + this.state.sprintStories.length
                  : this.state.sprintStories.length}
              </div>
              <div className="stats-title">
                Total<br />stories
              </div>
            </div>
            <div className="stats-item">
              <div className="icon icon-menu-you" />
              <div className="stats-value">23</div>
              <div className="stats-title">
                Total<br />tasks
              </div>
            </div>
            <div className="stats-item">
              <div className="icon icon-clock" />
              <div className="stats-value">02</div>
              <div className="stats-title">
                Sprint<br />duration (weeks)
              </div>
            </div>
            <div className="stats-item">
              <div className="icon icon-calendar" />
              <div className="stats-value date">
                <div className="date-item from-date">03 Oct, 2018</div>
                <div className="date-seperator">to</div>
                <div className="date-item to-date">15 Oct, 2018</div>
              </div>
              <div className="stats-title">
                Sprint<br />timeline
              </div>
            </div>
          </div>
          <div className="filter-box">
            <div className="option">
              <span className="icon icon-search ease-element" />
            </div>
            <div className="option">
              <Popup
                trigger={
                  <span className="icon icon-menu-backlog ease-element" />
                }
                position="top center"
                className="app-popup"
                content="Move all stories to backlog"
                basic
              />
            </div>
            <div className="option">
              <Popup
                trigger={
                  <span className="icon icon-start-sprint ease-element" />
                }
                position="top center"
                className="app-popup"
                content="Start sprint"
                basic
              />
            </div>
            <div className="option">
              <Popup
                trigger={<span className="icon icon-edit ease-element" />}
                position="top center"
                className="app-popup"
                content="Edit sprint details"
                basic
              />
            </div>
          </div>
        </div>
        <div className="full-screen-wrapper">
          <SprintBoard stories={this.state.sprintStories} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Sprint;
