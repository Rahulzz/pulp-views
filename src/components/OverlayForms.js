import React, { Component } from "react";
import { Popup, Dropdown } from "semantic-ui-react";
import { StaggeredMotion, spring } from "react-motion";
import ScrollBar from "./ScrollBar";
import DatePicker from "./DatePicker";
import ImplementationTypes from "./ImplementationTypes";

var formContainerPosition = 600;
var methodologies_options = [
  {
    key: "KBN",
    value: "KBN",
    text: "Kanban (Agile methodology)",
    description: (
      <Popup
        trigger={<div className="icon icon-info" />}
        content="This agile methodology is used when teams can only accommodate tasks based on their capacity. Full transparency of work is a key attribute in this process."
        position="top center"
        className="app-popup"
        basic
      />
    )
  },
  {
    key: "SCR",
    value: "SCR",
    text: "Scrum (Agile methodology)",
    description: (
      <Popup
        trigger={<div className="icon icon-info" />}
        content="This agile methodology is used where deliverables are of small chunks and several such small deliverables group up to form the final product."
        position="top center"
        className="app-popup"
        basic
      />
    )
  },
  {
    key: "WFL",
    value: "WFL",
    text: "Waterfall (Traditional)",
    description: (
      <Popup
        trigger={<div className="icon icon-info" />}
        content="The traditional approach where the entire flow is divided into several distinct stages and each stage generally finishes before the next one can begin."
        position="top center"
        className="app-popup"
        basic
      />
    )
  }
];

var backlog_options = [
  {
    key: "EPIC",
    value: "EPIC",
    text: "Epic",
    description: (
      <Popup
        trigger={<div className="icon icon-info" />}
        content="An Epic is a big chunk of work that has one common objective. It could be a feature, customer request or business requirement.  In the beginning, it may not contain all the details that team needs to work on. These details are defined in User Stories. An epic usually takes more than one sprint to complete."
        position="top center"
        className="app-popup"
        basic
      />
    )
  },
  {
    key: "STORY",
    value: "STORY",
    text: "User Story",
    description: (
      <Popup
        trigger={<div className="icon icon-info" />}
        content="A User story is a meaningful chunk of work under an Epic. Several such user stories build up to complete the epic. A user story is usually completed in a sprint."
        position="top center"
        className="app-popup"
        basic
      />
    )
  },
  {
    key: "TASK",
    value: "TASK",
    text: "Task",
    description: (
      <Popup
        trigger={<div className="icon icon-info" />}
        content="Tasks define the individual work to be done to close a user story. Several tasks are completed in a sprint."
        position="top center"
        className="app-popup"
        basic
      />
    )
  }
];

var sprint_duration_options = [
  {
    key: "2",
    value: "2",
    text: "Two weeks"
  },
  {
    key: "3",
    value: "3",
    text: "Three weeks"
  },
  {
    key: "4",
    value: "4",
    text: "Four weeks"
  },
  {
    key: "5",
    value: "5",
    text: "Five weeks"
  }
];

class FormContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backlogItemType: "",
      showStoryToEpicMap: false,
      showTaskToStoryMap: false
    };
  }

  handleBacklogItemChange = (event, { value }) => {
    if ("EPIC" == value) {
      this.setState({
        backlogItemType: value,
        showStoryToEpicMap: false,
        showTaskToStoryMap: false
      });
    } else if ("STORY" == value) {
      this.setState({
        backlogItemType: value,
        showStoryToEpicMap: true,
        showTaskToStoryMap: false
      });
    } else if ("TASK" == value) {
      this.setState({
        backlogItemType: value,
        showTaskToStoryMap: true,
        showStoryToEpicMap: false
      });
    }
  };

  render() {
    if ("phase" === this.props.type) {
      return (
        <ScrollBar.FloatVertical>
          <div className="scrollbar-container">
            <div className="title-box">
              <div className="title">Create a New Phase</div>
              <div className="description">
                A phase can be used within a project to represent a version,
                branch or release. Create a phase to fit your need.
              </div>
            </div>
            <div className="field-box">
              <div className="item">
                <div className="title">
                  Phase Name <span>(required)</span>
                </div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  Name to identify your phase. Going forward, you{"'"}ll refer
                  to this phase either using the phase id or by this name.
                </div>
              </div>
              <div className="item">
                <div className="title">
                  Start Date <span>(required)</span>
                </div>
                <div className="field">
                  <DatePicker />
                </div>
                <div className="description">Start date for the phase.</div>
              </div>
              <div className="item">
                <div className="title">End Date</div>
                <div className="field">
                  <DatePicker />
                </div>
                <div className="description">End date for the phase.</div>
              </div>
              <div className="item">
                <div className="title">
                  Implement phase using <span>(required)</span>
                </div>
                <div className="field">
                  <Dropdown
                    placeholder="Scrum / Kanban / Waterfall"
                    selection
                    options={methodologies_options}
                    icon=""
                  />
                </div>
                <div className="description">
                  Choose your team{"'"}s work style.
                </div>
              </div>
            </div>
            <div className="decision-box">
              <button className="active-button" onClick={this.props.close}>
                cancel changes
              </button>
              <button className="active-button">save changes</button>
            </div>
          </div>
        </ScrollBar.FloatVertical>
      );
    } else if ("backlog" === this.props.type) {
      return (
        <ScrollBar.FloatVertical>
          <div className="scrollbar-container">
            <div className="title-box">
              <div className="title">Add a Backlog Item</div>
              <div className="description">
                A backlog item defines a unit of work. It could be as big as a
                whole application or as small as field change.
              </div>
            </div>
            <div className="field-box">
              <div className="item">
                <div className="title">
                  Type of Backlog item <span>(required)</span>
                </div>
                <div className="field">
                  <Dropdown
                    placeholder="Epic / User Story / Task"
                    selection
                    options={backlog_options}
                    onChange={this.handleBacklogItemChange}
                    icon=""
                  />
                </div>
                <div className="description">
                  Choose a backlog item to create.
                </div>
              </div>
              <div className="item">
                <div className="title">
                  Item Name <span>(required)</span>
                </div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  Name to identify your backlog item. Going forward, people will
                  use this name to refer to the item.
                </div>
              </div>
              <div
                className="item"
                style={{
                  display: this.state.showStoryToEpicMap ? "block" : "none"
                }}
              >
                <div className="title">Map User Story to Epic</div>
                <div className="field">
                  <Dropdown
                    placeholder="Choose Epic"
                    selection
                    options={backlog_options}
                    icon=""
                  />
                </div>
                <div className="description">
                  Map your user story to the appropriate Epic
                </div>
              </div>
              <div
                className="item"
                style={{
                  display: this.state.showStoryToEpicMap ? "block" : "none"
                }}
              >
                <div className="title">Story Point</div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  A Story Point is a relative unit of measure, decided upon and
                  used by individual Scrum teams, to provide relative estimates
                  of effort for completing requirements
                </div>
              </div>
              <div
                className="item"
                style={{
                  display: this.state.showTaskToStoryMap ? "block" : "none"
                }}
              >
                <div className="title">Map Task to User Story</div>
                <div className="field">
                  <Dropdown
                    placeholder="Choose User Story"
                    selection
                    options={backlog_options}
                    icon=""
                  />
                </div>
                <div className="description">
                  Map your task to the appropriate User story
                </div>
              </div>
              <div className="item">
                <div className="title">Purpose</div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  What are you trying to accomplish?
                </div>
              </div>
            </div>
            <div className="decision-box">
              <button className="active-button" onClick={this.props.close}>
                cancel changes
              </button>
              <button className="active-button">save changes</button>
            </div>
          </div>
        </ScrollBar.FloatVertical>
      );
    } else if ("stage" === this.props.type) {
      return (
        <ScrollBar.FloatVertical>
          <div className="scrollbar-container">
            <div className="title-box">
              <div className="title">Create a new Stage</div>
              <div className="description">
                A stage represents a unit of work. In order to implement a
                stage, you{"'"}ll have to choose a methodology and create tasks.
                A stage can be divided into several logical blocks by creating
                sub-stages.
              </div>
            </div>
            <div className="field-box">
              <div className="item">
                <div className="title">
                  Stage Name <span>(required)</span>
                </div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  Be precise with the name. Helps people understand the context.
                </div>
              </div>
              <div className="item">
                <div className="title">Purpose</div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  What are you trying to accomplish?
                </div>
              </div>
              <div className="item">
                <div className="title">Start Date</div>
                <div className="field">
                  <DatePicker />
                </div>
                <div className="description">Start date for the stage.</div>
              </div>
              <div className="item">
                <div className="title">End Date</div>
                <div className="field">
                  <DatePicker />
                </div>
                <div className="description">End date for the stage.</div>
              </div>
              <div className="item">
                <div className="title">
                  Implement stage using <span>(required)</span>
                </div>
                <div className="field">
                  <Dropdown
                    placeholder="Scrum / Kanban / Waterfall"
                    selection
                    options={methodologies_options}
                    icon=""
                  />
                </div>
                <div className="description">
                  Choose the work styles if you plan to implement this stage by
                  creating tasks. Skip this field in case you plan to create
                  stages within this stage.
                </div>
              </div>
            </div>
            <div className="decision-box">
              <button className="active-button" onClick={this.props.close}>
                cancel changes
              </button>
              <button className="active-button">save changes</button>
            </div>
          </div>
        </ScrollBar.FloatVertical>
      );
    } else if ("column" === this.props.type) {
      return (
        <ScrollBar.FloatVertical>
          <div className="scrollbar-container">
            <div className="title-box">
              <div className="title">Add a new Column</div>
              <div className="description">
                A phase can be used within a project to represent a version,
                branch or release. Create a phase to fit your need.
              </div>
            </div>
            <div className="field-box">
              <div className="item">
                <div className="title">
                  Column Name <span>(required)</span>
                </div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  Be precise with the name. Helps people understand the context.
                </div>
              </div>
              <div className="item">
                <div className="title">Max Count</div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  Maximum task this column can hold.
                </div>
              </div>
            </div>
            <div className="decision-box">
              <button className="active-button" onClick={this.props.close}>
                cancel changes
              </button>
              <button className="active-button">save changes</button>
            </div>
          </div>
        </ScrollBar.FloatVertical>
      );
    } else if ("sprint" === this.props.type) {
      return (
        <ScrollBar.FloatVertical>
          <div className="scrollbar-container">
            <div className="title-box">
              <div className="title">Create a new Sprint</div>
              <div className="description">
                A phase can be used within a project to represent a version,
                branch or release. Create a phase to fit your need.
              </div>
            </div>
            <div className="field-box">
              <div className="item">
                <div className="title">
                  Sprint Title <span>(required)</span>
                </div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  Be precise with the name. Helps people understand the context.
                </div>
              </div>
              <div className="item">
                <div className="title">
                  Duration <span>(required)</span>
                </div>
                <div className="field">
                  <Dropdown
                    placeholder="Duration in weeks"
                    selection
                    options={sprint_duration_options}
                    icon=""
                  />
                </div>
                <div className="description">
                  How long should this sprint last?
                </div>
              </div>
            </div>
            <div className="decision-box">
              <button className="active-button" onClick={this.props.close}>
                cancel changes
              </button>
              <button className="active-button">save changes</button>
            </div>
          </div>
        </ScrollBar.FloatVertical>
      );
    } else if ("bugs" === this.props.type) {
      return (
        <ScrollBar.FloatVertical>
          <div className="scrollbar-container">
            <div className="title-box">
              <div className="title">Add a new bug</div>
              <div className="description">
                A phase can be used within a project to represent a version,
                branch or release. Create a phase to fit your need.
              </div>
            </div>
            <div className="field-box">
              <div className="item">
                <div className="title">
                  Title <span>(required)</span>
                </div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  Be precise with the name. Helps people understand the context.
                </div>
              </div>
              <div className="item">
                <div className="title">Description</div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  Etiam fermentum molestie auctor. Nullam porttitor, lectus id
                  lobortis facilisis, justo leo ullamcorper ipsum
                </div>
              </div>
              <div className="item">
                <div className="title">Found by</div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  Integer nisl risus, finibus a vulputate ut, porta in nisi.
                </div>
              </div>
              <div className="item">
                <div className="title">Assigned to</div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  Quisque elit massa, scelerisque id nulla nec, blandit
                  consequat arcu.
                </div>
              </div>
              <div className="item">
                <div className="title">Severity</div>
                <div className="field">
                  <input type="text" />
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus eget sapien varius.
                </div>
              </div>
            </div>
            <div className="decision-box">
              <button className="active-button" onClick={this.props.close}>
                cancel changes
              </button>
              <button className="active-button">save changes</button>
            </div>
          </div>
        </ScrollBar.FloatVertical>
      );
    }
  }
}

class OverlayForms extends Component {
  changeOverlayDisplayMode(formPosition) {
    if (this.props.display) {
      return "overlay-box reveal";
    } else {
      if (formContainerPosition === formPosition) {
        return "overlay-box wrap";
      } else {
        return "overlay-box reveal";
      }
    }
  }

  render() {
    return (
      <StaggeredMotion
        defaultStyle={
          ({ opacity: 0 }, { opacity: 0, x: formContainerPosition })
        }
        styles={prevStyles => [
          { opacity: spring(this.props.display ? 1 : 0) },
          {
            x: spring(this.props.display ? 5 : formContainerPosition, {
              stiffness: 120,
              damping: 17
            }),
            opacity: spring(this.props.display ? 1 : 0)
          }
        ]}
      >
        {styles => (
          <div className={this.changeOverlayDisplayMode(styles[1].x)}>
            <div className="overlay-form-container">
              <div
                className="overlay-form"
                style={{ transform: "translateX(" + styles[1].x + "px)" }}
              >
                <FormContent type={this.props.type} close={this.props.close} />
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

export default OverlayForms;
