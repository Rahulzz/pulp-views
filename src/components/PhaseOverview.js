import React, { Component } from "react";
import Col from "react-bootstrap";
import Waterfall from "./Waterfall";
import Kanban from "./Kanban";
import Scrum from "./Scrum";

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

class DisplayPhaseContent extends Component {
  render() {
    if ("WATERFALL" == this.props.type) {
      return (
        <Waterfall
          stageForm={this.props.stageForm}
          columnForm={this.props.columnForm}
          type={this.props.type}
        />
      );
    } else if ("SCRUM" == this.props.type) {
      return (
        <Scrum
          columnForm={this.props.columnForm}
          backlogForm={this.props.backlogForm}
          type={this.props.type}
        />
      );
    } else if ("KANBAN" == this.props.type) {
      return (
        <Kanban columnForm={this.props.columnForm} type={this.props.type} />
      );
    }
  }
}

class PhaseOverview extends Component {
  constructor(props) {
    super(props);
    this.state = { type: "" };
  }

  componentWillMount() {
    // Data should be fetched from table for the Phase id received. For now, this section handles the logic with dummy data.
    const values = Object.entries(phase_dummy_data).map(([key, value]) => {
      if (this.props.id == key) {
        value.map((answer, i) => {
          this.setState({
            type: answer.type
          });
        });
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      const values = Object.entries(phase_dummy_data).map(([key, value]) => {
        if (this.props.id == key) {
          value.map((answer, i) => {
            this.setState({
              type: answer.type
            });
          });
        }
      });
    }
  }

  render() {
    return (
      <DisplayPhaseContent
        stageForm={this.props.stageForm}
        columnForm={this.props.columnForm}
        backlogForm={this.props.backlogForm}
        type={this.state.type}
      />
    );
  }
}

export default PhaseOverview;
