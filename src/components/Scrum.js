import React, { Component } from "react";
import Col from "react-bootstrap";
import { Popup, Tab } from "semantic-ui-react";
import SprintBoard from ".//SprintBoard";
import BacklogBoard from ".//BacklogBoard";
import Board from "./Board";

var panes = [
  {
    menuItem: {
      key: "scrum-board",
      icon: "",
      content: "Active Board"
    },
    render: () => (
      <Tab.Pane>
        <Board
          columns={scrum_boards_dummy_data}
          applyMax={true}
          expanded={true}
        />
      </Tab.Pane>
    )
  },
  {
    menuItem: {
      key: "scrum-sprint",
      icon: "",
      content: "Active Backlog"
    },
    render: () => (
      <Tab.Pane>
        <BacklogBoard />
      </Tab.Pane>
    )
  },
  {
    menuItem: {
      key: "scrum-backlog",
      icon: "",
      content: "Active Sprint"
    },
    render: () => (
      <Tab.Pane>
        <SprintBoard stories={sprint_stories} />
      </Tab.Pane>
    )
  }
];

var scrum_boards_dummy_data = [
  {
    id: 1011,
    name: "to do",
    max: "6",
    cards: [
      {
        id: 101,
        name: "IA156 - UI/UX Rework",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
        owner: "Mahesh Rudraiah",
        state: ""
      },
      {
        id: 102,
        name: "IA189 - Alg Calculations with weighted average",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
        owner: "Mahesh Rudraiah",
        state: ""
      },
      {
        id: 103,
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
        id: 201,
        name: "IA189 - Alg Calculations with weighted average",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        owner: "Mahesh Rudraiah",
        state: ""
      },
      {
        id: 202,
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
        id: 301,
        name: "IA189 - Alg Calculations with weighted average",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        owner: "Mahesh Rudraiah",
        state: "DELAYED"
      },
      {
        id: 302,
        name: "IA189 - Alg Calculations with weighted average",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
        owner: "Shanmuganathan Vijayaraman",
        state: ""
      },
      {
        id: 303,
        name: "IA189 - Alg Calculations with weighted average",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
        owner: "Shanmuganathan Vijayaraman",
        state: ""
      }
    ]
  },
  {
    id: 4011,
    name: "done",
    max: "",
    cards: [
      {
        id: 401,
        name: "IA156 - UI/UX Rework",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
        owner: "Mahesh Rudraiah",
        state: ""
      },
      {
        id: 402,
        name: "IA189 - Alg Calculations with weighted average",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
        owner: "Shanmuganathan Vijayaraman",
        state: ""
      },
      {
        id: 403,
        name: "IA189 - Alg Calculations with weighted average",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
        owner: "Shanmuganathan Vijayaraman",
        state: ""
      },
      {
        id: 404,
        name: "IA189 - Alg Calculations with weighted average",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
        owner: "Shanmuganathan Vijayaraman",
        state: ""
      }
    ]
  }
];

var sprint_stories = [
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

class Scrum extends Component {
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
            {this.state.activeIndex != 2 ? (
              this.state.activeIndex == 0 ? (
                <button
                  className="active-button to-right"
                  onClick={this.props.columnForm}
                >
                  ADD A NEW COLUMN
                </button>
              ) : (
                <button
                  className="active-button to-right"
                  onClick={this.props.backlogForm}
                >
                  ADD AN EPIC / STORY / TASK
                </button>
              )
            ) : (
              ""
            )}
            <Popup
              trigger={<div className="methodology">scrum</div>}
              position="top center"
              className="app-popup"
              content="This phase follows Scrum methodology. Click here to learn more about Scrum system"
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

export default Scrum;
