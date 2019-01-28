import React, { Component } from "react";
import Col from "react-bootstrap";
import { Breadcrumb, Checkbox, Dropdown, Popup } from "semantic-ui-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OverlayForms from "../components/OverlayForms";
import Board from "../components/Board";
import { sprint_boards_data } from "../mockdata/sprintBoards";

var phase_dummy_list = [
  {
    text: "Release 1.0.0 - Sprint 1",
    value: "1011"
  },
  {
    text: "Release 1.0.0 - Sprint 2",
    value: "2011"
  },
  {
    text: "Release 1.0.0 - Sprint 3",
    value: "3011"
  }
];

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 1011,
      showColumnForm: false,
      activeFilter: false
    };
  }

  toggleColumnOverlay = () => {
    this.setState({
      showColumnForm: !this.state.showColumnForm
    });
  };

  switchPhase = (event, { value }) => {
    this.setState({
      phase: value
    });
    this.setBoardDetails(value);
  };

  componentWillMount() {
    this.setBoardDetails(this.state.phase);
  }

  mountPopup() {
    this.setState({
      activeFilter: true
    });
  }

  unmountPopup() {
    this.setState({
      activeFilter: false
    });
  }

  setBoardDetails(phase) {
    sprint_boards_data.map((answer, i) => {
      if (phase == answer.id) {
        this.setState({
          columns: answer.columns,
          type: answer.type
        });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <OverlayForms
          type="column"
          display={this.state.showColumnForm}
          close={this.toggleColumnOverlay}
        />
        <Header type="project" selected="boards" />
        <div className="page-header full-screen-wrapper">
          <div className="title">
            <div className="crumb">
              <Breadcrumb>
                <Breadcrumb.Section link href="projectDashboard">
                  Europe Thinline
                </Breadcrumb.Section>
                <Breadcrumb.Divider content="/" />
                <Breadcrumb.Section active>Boards</Breadcrumb.Section>
              </Breadcrumb>
            </div>
            <div className="name">Boards</div>
          </div>
        </div>
        <div className="choice-container full-screen-wrapper">
          <div className="choice-box">
            <div className="choice-field">
              <span className="pre-text">Cards for </span>
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
              <Checkbox label="display this board by default" />
            </div>
          </div>
        </div>
        <div className="statsnfilter-box full-screen-wrapper">
          <div className="stats-box">
            <div className="stats-item">
              <div className="icon icon-total-task" />
              <div className="stats-value">15</div>
              <div className="stats-title">
                Total<br />tasks
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
              <div className="icon icon-complete-task" />
              <div className="stats-value">07</div>
              <div className="stats-title">
                Completed<br />tasks
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
                trigger={
                  <span
                    className="icon icon-menu-add ease-element"
                    onClick={this.toggleColumnOverlay}
                  />
                }
                position="top center"
                className="app-popup"
                content="Add a new column to the board"
                basic
              />
            </div>
            <div className="option">
              <Popup
                trigger={
                  <span
                    className={
                      this.state.activeFilter
                        ? "icon active icon-filter ease-element"
                        : "icon icon-filter ease-element"
                    }
                  />
                }
                position="bottom center"
                className="header-popup"
                hoverable={true}
                onMount={() => this.mountPopup()}
                onUnmount={() => this.unmountPopup()}
              >
                <div className="filter-popup-box">
                  <div className="header-box">
                    <div className="title">Filter options</div>
                  </div>
                  <div className="board-filter-button">
                    <div className="title">Cards displayed</div>
                    <div className="card-filter">
                      <div className="card-filter-item ease-element selected">
                        all
                      </div>
                      <div className="card-filter-item ease-element">
                        blocked
                      </div>
                      <div className="card-filter-item ease-element">
                        delayed
                      </div>
                    </div>
                  </div>
                  <div className="self-filter ease-element">
                    display my cards alone
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        </div>
        <div className="boards-container full-screen-wrapper">
          <div className="boards-box">
            <Board
              columns={this.state.columns}
              applyMax={"WATERFALL" === this.state.type ? false : true}
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Boards;
