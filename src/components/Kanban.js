import React, { Component } from "react";
import Col from "react-bootstrap";
import { Popup, Tab } from "semantic-ui-react";
import Board from "./Board";

var panes = [
  {
    menuItem: {
      key: "kanban-board",
      icon: "",
      content: "Active Board"
    },
    render: () => (
      <Tab.Pane>
        <Board columns={kanban_dummy_data} applyMax={true} expanded={true} />
      </Tab.Pane>
    )
  }
];

var kanban_dummy_data = [
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

class Kanban extends Component {
  render() {
    return (
      <div className="methodology-overview-container full-screen-wrapper">
        <div className="overview-tabs-container">
          <div className="phase-options">
            <button
              className="active-button to-right"
              onClick={this.props.columnForm}
            >
              ADD A NEW COLUMN
            </button>
            <Popup
              trigger={<div className="methodology">kanban</div>}
              position="top center"
              className="app-popup"
              content="This phase follows Kanban methodology. Click here to learn more about Kanban system"
              basic
            />
          </div>
          <Tab
            menu={{
              secondary: true
            }}
            panes={panes}
          />
        </div>
      </div>
    );
  }
}

export default Kanban;
