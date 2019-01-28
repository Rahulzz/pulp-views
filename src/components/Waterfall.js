import React, { Component } from "react";
import Col from "react-bootstrap";
import { Popup, Tab } from "semantic-ui-react";
import Board from "./Board";

var panes = [
  {
    menuItem: {
      key: "waterfall-board",
      icon: "",
      content: "Active  Board"
    },
    render: () => (
      <Tab.Pane>
        <Board
          columns={waterfall_dummy_board_data}
          applyMax={false}
          expanded={true}
        />
      </Tab.Pane>
    )
  },
  {
    menuItem: {
      key: "waterfall-board",
      icon: "",
      content: "Project Stages"
    },
    render: () => (
      <Tab.Pane>
        <div className="waterfall-container">
          {waterfall_dummy_data.map((answer, i) => {
            return (
              <Stage
                name={answer.name}
                range={answer.range}
                tasks={answer.tasks}
                state={answer.state}
                completion={answer.completion}
              />
            );
          })}
        </div>
      </Tab.Pane>
    )
  }
];

var waterfall_dummy_board_data = [
  {
    id: 1011,
    name: "to do",
    max: "6",
    cards: [
      {
        id: "101",
        name: "IA156 - UI/UX Rework",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
        owner: "Mahesh Rudraiah",
        state: ""
      },
      {
        id: "102",
        name: "IA189 - Alg Calculations with weighted average",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
        owner: "Mahesh Rudraiah",
        state: ""
      },
      {
        id: "103",
        name: "IA213 - Standard board checks",
        description: "",
        owner: "Mahesh Rudraiah",
        state: ""
      }
    ]
  },
  {
    id: 2011,
    name: "in progress",
    max: "3",
    cards: [
      {
        id: "201",
        name: "IA189 - Alg Calculations with weighted average",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        owner: "Mahesh Rudraiah",
        state: ""
      },
      {
        id: "202",
        name: "IA213 - Standard board checks",
        description: "",
        owner: "Mahesh Rudraiah",
        state: "BLOCKED"
      }
    ]
  },
  {
    id: 3011,
    name: "unit testing",
    max: "3",
    cards: [
      {
        id: "301",
        name: "IA189 - Alg Calculations with weighted average",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        owner: "Mahesh Rudraiah",
        state: "DELAYED"
      }
    ]
  },
  {
    id: 4011,
    name: "done",
    max: "",
    cards: [
      {
        id: "401",
        name: "IA156 - UI/UX Rework",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
        owner: "Mahesh Rudraiah",
        state: ""
      },
      {
        id: "402",
        name: "IA189 - Alg Calculations with weighted average",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
        owner: "Shanmuganathan Vijayaraman",
        state: ""
      }
    ]
  }
];

var waterfall_dummy_data = [
  {
    name: "Requirement Gathering",
    range: "August 25 - August 30",
    tasks: "20",
    stages: "",
    state: "",
    completion: "80"
  },
  {
    name: "High level design planning",
    range: "September 1 - September 10",
    tasks: "",
    stages: "2",
    state: "",
    completion: "25"
  },
  {
    name: "Document Preparation",
    range: "September 1 - September 10",
    tasks: "5",
    stages: "",
    state: "BLOCKED",
    completion: "28"
  },
  {
    name: "UI/UX Design",
    range: "September 10 - October 15",
    tasks: "20",
    stages: "",
    state: "",
    completion: "70"
  },
  {
    name: "Asset Procurement",
    range: "September 10 - October 15",
    tasks: "9",
    stages: "",
    state: "DELAYED",
    completion: "15"
  }
];

class Stage extends Component {
  set_state_class(state) {
    if ("BLOCKED" == state) {
      return "waterfall-stage blocked";
    } else if ("DELAYED" == state) {
      return "waterfall-stage delayed";
    } else {
      return "waterfall-stage safe";
    }
  }

  set_flag(state) {
    if ("BLOCKED" == state) {
      return (
        <div class="waterfall-flag">
          BLOCKED
          <Popup
            trigger={<span className="icon icon-info" />}
            content="Reason as to why this stage is blocked. Reason along with the action item will be displayed here."
            position="top center"
            className="app-popup"
            basic
          />
        </div>
      );
    } else if ("DELAYED" == state) {
      return (
        <div class="waterfall-flag">
          DELAY EXPECTED
          <Popup
            trigger={<span className="icon icon-info" />}
            content="Reason as to why this stage could be delayed."
            position="top center"
            className="app-popup"
            basic
          />
        </div>
      );
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className={this.set_state_class(this.props.state)}>
        <div
          className="completion-rail"
          style={{ width: this.props.completion + "%" }}
        />
        <div className="stage-content">
          <div className="options">
            <div className="icon icon-menu-dots" />
            <div className="icon icon-attachment" />
            <div className="icon icon-notes" />
          </div>
          <div className="data">
            <div className="title">{this.props.name}</div>
            <div className="subtitle">
              {this.props.range}
              <span className={this.props.tasks.length > 0 ? "task-count" : ""}>
                {this.props.tasks.length > 0 ? this.props.tasks + " tasks" : ""}
              </span>
            </div>
          </div>
          <div className="flag">{this.set_flag(this.props.state)}</div>
        </div>
      </div>
    );
  }
}

class Waterfall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  switchTabHeader = (e, { activeIndex }) => {
    this.setState({
      activeIndex: activeIndex
    });
  };

  render() {
    return (
      <div className="methodology-overview-container full-screen-wrapper">
        <div className="overview-tabs-container">
          <div className="phase-options">
            {this.state.activeIndex == 0 ? (
              <button
                className="active-button to-right"
                onClick={this.props.columnForm}
              >
                ADD A NEW COLUMN
              </button>
            ) : (
              <button
                className="active-button to-right"
                onClick={this.props.stageForm}
              >
                ADD A NEW STAGE
              </button>
            )}
            <Popup
              trigger={<div className="methodology">waterfall</div>}
              position="top center"
              className="app-popup"
              content="This phase follows Waterfall methodology. Click here to learn more about Waterfall system"
              basic
            />
          </div>
          <Tab
            menu={{
              secondary: true
            }}
            panes={panes}
            onTabChange={this.switchTabHeader}
          />
        </div>
      </div>
    );
  }
}

export default Waterfall;
