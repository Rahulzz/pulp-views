import React, { Component } from "react";
import Col from "react-bootstrap";
import { Checkbox, Dropdown, Popup } from "semantic-ui-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OverlayForms from "../components/OverlayForms";
import PhaseOverview from "../components/PhaseOverview";

var phase_dummy_list = [
  {
    text: "Release 1.0.0 (beta)",
    value: "1011"
  },
  {
    text: "Release 2.0.0",
    value: "2011"
  },
  {
    text: "Release 3.0.0",
    value: "3011"
  }
];

var phase_dummy_data = {
  1011: [
    {
      name: "Release 1.0.0 (beta)",
      start: "August 25, 2018",
      end: "November 20, 2018",
      duration: "30",
      type: "WATERFALL"
    }
  ],
  2011: [
    {
      name: "Release 2.0.0",
      start: "December 21, 2018",
      end: "March 20, 2019",
      duration: "52",
      type: "KANBAN"
    }
  ],
  3011: [
    {
      name: "Release 3.0.0",
      start: "May 21, 2019",
      end: "October 20, 2019",
      duration: "44",
      type: "SCRUM"
    }
  ]
};

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 1011,
      showPhaseForm: false,
      showBacklogForm: false,
      showStageForm: false,
      showColumnForm: false
    };
  }

  componentWillMount() {
    this.setPhaseDetails(this.state.phase);
  }

  switchPhase = (event, { value }) => {
    this.setState({
      phase: value
    });
    this.setPhaseDetails(value);
  };

  setPhaseDetails(phase) {
    const values = Object.entries(phase_dummy_data).map(([key, value]) => {
      if (phase == key) {
        value.map((answer, i) => {
          this.setState({
            start: answer.start,
            end: answer.end,
            duration: answer.duration,
            type: answer.type
          });
        });
      }
    });
  }

  togglePhaseOverlay = () => {
    this.setState({
      showPhaseForm: !this.state.showPhaseForm
    });
  };

  toggleBacklogOverlay = () => {
    this.setState({
      showBacklogForm: !this.state.showBacklogForm
    });
  };

  toggleStageOverlay = () => {
    this.setState({
      showStageForm: !this.state.showStageForm
    });
  };

  toggleColumnOverlay = () => {
    this.setState({
      showColumnForm: !this.state.showColumnForm
    });
  };

  render() {
    return (
      <React.Fragment>
        <OverlayForms
          type="phase"
          display={this.state.showPhaseForm}
          close={this.togglePhaseOverlay}
        />
        <OverlayForms
          type="column"
          display={this.state.showColumnForm}
          close={this.toggleColumnOverlay}
        />
        <OverlayForms
          type="stage"
          display={this.state.showStageForm}
          close={this.toggleStageOverlay}
        />
        <OverlayForms
          type="backlog"
          display={this.state.showBacklogForm}
          close={this.toggleBacklogOverlay}
        />
        <Header type="project" selected="overview" />
        <div className="page-header full-screen-wrapper">
          <div className="title">
            <div className="pre-name">PROJ7634</div>
            <div className="name">
              Europe Thinline <div className="tag">ongoing project</div>
            </div>
            <div className="post-name">created by: Mahesh Rudraiah</div>
          </div>
          <div className="options">
            <button
              className="active-button to-left"
              onClick={this.togglePhaseOverlay}
            >
              CREATE NEW PHASE
            </button>
          </div>
        </div>
        <div className="choice-container full-screen-wrapper">
          <div className="choice-box">
            <div className="choice-field">
              <span className="pre-text">Overview for </span>
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
              <Checkbox label="display this phase by default" />
            </div>
          </div>
        </div>
        <div className="statsnfilter-box overview-statsnfilter-box full-screen-wrapper">
          <div className="stats-box">
            <div className="stats-item">
              <div className="icon icon-clock" />
              <div className="stats-value">27</div>
              <div className="stats-title">
                Weeks left<br />to complete
              </div>
            </div>
            <div className="stats-item">
              <div className="icon icon-inprogress-task" />
              <div className="stats-value">08</div>
              <div className="stats-title">
                Tasks<br />in progress
              </div>
            </div>
            <div className="stats-item">
              <div className="icon icon-delayed-bugs" />
              <div className="stats-value">02</div>
              <div className="stats-title">
                Delayed<br />tasks
              </div>
            </div>
            <div className="stats-item">
              <div className="icon icon-blocked" />
              <div className="stats-value">03</div>
              <div className="stats-title">
                Blocked<br />tasks
              </div>
            </div>
          </div>
          <div className="filter-box">
            <div className="option">
              <span className="icon icon-search ease-element" />
            </div>
            <div className="option">
              <Popup
                trigger={<span className="icon icon-attachment ease-element" />}
                position="top center"
                className="app-popup"
                content="View all documents attached to this phase"
                basic
              />
            </div>
          </div>
        </div>
        <PhaseOverview
          id={this.state.phase}
          stageForm={this.toggleStageOverlay}
          columnForm={this.toggleColumnOverlay}
          backlogForm={this.toggleBacklogOverlay}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Overview;
