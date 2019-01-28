import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab } from "semantic-ui-react";
import { Scrollbars } from "react-custom-scrollbars";
import { Textfit } from "react-textfit";
import DatePicker from "../components/DatePicker";
import pulp from "../static/images/pulp-logo.png";

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: false,
      itemType: "",
      phaseSelected: false,
      phaseType: "",
      activeIndex: 0
    };
  }

  chooseItem = value => {
    this.setState({
      itemSelected: true,
      itemType: value
    });
  };

  choosePhase = value => {
    this.setState({
      phaseSelected: true,
      phaseType: value
    });
  };

  handleRangeChange = e => this.setState({ activeIndex: e.target.value });
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

  panes = [
    {
      menuItem: "Tab 1",
      render: () => (
        <div className="new-project-page bold-page">
          <div className="new-project-container">
            <div className="stage-1 stage">
              <div className="title">
                <Textfit mode="single">What do you want to create?</Textfit>
              </div>
              <div className="new-item-options">
                <div
                  className={
                    this.state.itemType == "project"
                      ? "new-item selected ease-element"
                      : "new-item ease-element"
                  }
                  onClick={() => this.chooseItem("project")}
                >
                  <div className="item-logo icon icon-menu-project" />
                  <div className="item-details">
                    <div className="item-title">Project</div>
                    <div className="item-detail ease-element">
                      Create a project to plan, schedule and execute a series of
                      tasks. Share tasks with different teams and manage the
                      whole process from a single place.
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.itemType == "queue"
                      ? "new-item selected ease-element"
                      : "new-item ease-element"
                  }
                  onClick={() => this.chooseItem("queue")}
                >
                  <div className="item-logo icon icon-menu-queue" />
                  <div className="item-details">
                    <div className="item-title">Queue</div>
                    <div className="item-detail ease-element">
                      Create a queue to consolidate all non-project tasks. For
                      example, a queue can be created to gather, plan and
                      execute ideas. Play with it to know more.
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                <Link to="projects">
                  <button className="active-button discard-button to-left">
                    discard flow
                  </button>
                </Link>
                <button
                  className={
                    this.state.itemSelected
                      ? "active-button to-left"
                      : "inactive-button to-left"
                  }
                  onClick={
                    this.state.itemSelected ? this.handleRangeChange : null
                  }
                  value={1}
                >
                  proceed further
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      menuItem: "Tab 2",
      render: () => (
        <div className="new-project-page">
          <div className="new-project-container">
            <div className="stage-2 stage">
              <div className="section-title">
                <div className="name">Project details</div>
                <div className="description">
                  Provide basic details about your project, plan the dates,
                  provide access for people to view or edit. Filling all
                  information will help us understand the dynamics of your
                  project, however, fields marked 'required' are mandatory.
                </div>
              </div>
              <div className="overlay-form">
                <div className="field-box">
                  <div className="item">
                    <div className="title">
                      Project Name <span>(required)</span>
                    </div>
                    <div className="field">
                      <input type="text" />
                    </div>
                    <div className="description">
                      Name to identify your project. Going forward, you'll refer
                      to this project either using the project id or by this
                      name.
                    </div>
                  </div>
                  <div className="item">
                    <div className="title">Purpose</div>
                    <div className="field">
                      <input type="text" />
                    </div>
                    <div className="description">
                      A short description about the crux of the project.
                    </div>
                  </div>
                  <div className="half-field">
                    <div className="item">
                      <div className="title">
                        Planned Start Date <span>(required)</span>
                      </div>
                      <div className="field">
                        <DatePicker />
                      </div>
                      <div className="description">
                        The tentative start date for the project
                      </div>
                    </div>
                    <div className="item">
                      <div className="title">Planned Completion Date</div>
                      <div className="field">
                        <DatePicker />
                      </div>
                      <div className="description">
                        The tentative end date for the project
                      </div>
                    </div>
                  </div>
                  <div className="half-field">
                    <div className="item">
                      <div className="title">Actual Start Date</div>
                      <div className="field">
                        <DatePicker />
                      </div>
                      <div className="description">
                        Date when the project took off
                      </div>
                    </div>
                    <div className="item">
                      <div className="title">Actual Completion Date</div>
                      <div className="field">
                        <DatePicker />
                      </div>
                      <div className="description">
                        Date when the project completed
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="title">
                      Users with edit access to project
                    </div>
                    <div className="field">
                      <input type="text" />
                    </div>
                    <div className="description">
                      People listed here will have edit access throughout the
                      project. Provide access to specific phase or stage in the
                      upcoming screens.
                    </div>
                  </div>
                  <div className="item">
                    <div className="title">
                      Users with view access to project
                    </div>
                    <div className="field">
                      <input type="text" />
                    </div>
                    <div className="description">
                      Your managers will by default have access to view all the
                      projects you create. List others here.
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                <Link to="projects">
                  <button className="active-button discard-button to-left">
                    discard flow
                  </button>
                </Link>
                <button
                  className="active-button to-left"
                  onClick={this.handleRangeChange}
                  value={0}
                >
                  previous section
                </button>
                <button
                  className={
                    this.state.itemSelected
                      ? "active-button to-left"
                      : "inactive-button to-left"
                  }
                  onClick={this.handleRangeChange}
                  value={2}
                >
                  proceed further
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      menuItem: "Tab 3",
      render: () => (
        <div className="new-project-page">
          <div className="new-project-container">
            <div className="stage-2 stage">
              <div className="section-title">
                <div className="name">Phase details</div>
                <div className="description">
                  A phase can be used within a project to represent a version,
                  branch or release. Multiple phases can be created once the
                  project is saved. Create a phase to fit your need.
                </div>
              </div>
              <div className="overlay-form">
                <div className="field-box">
                  <div className="item">
                    <div className="title">
                      Phase Name <span>(required)</span>
                    </div>
                    <div className="field">
                      <input type="text" />
                    </div>
                    <div className="description">
                      Name to identify your phase. Going forward, you'll refer
                      to this phase either using the phase id or by this name.
                    </div>
                  </div>
                  <div className="half-field">
                    <div className="item">
                      <div className="title">
                        Start Date <span>(required)</span>
                      </div>
                      <div className="field">
                        <DatePicker />
                      </div>
                      <div className="description">
                        Start date for the phase
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="title">
                      Implement phase using <span>(required)</span>
                    </div>
                    <div className="phase-options">
                      <div className="new-item-options">
                        <div
                          className={
                            this.state.phaseType == "waterfall"
                              ? "new-item selected ease-element"
                              : "new-item ease-element"
                          }
                          onClick={() => this.choosePhase("waterfall")}
                        >
                          <div className="item-details">
                            <div className="item-title">Waterfall</div>
                            <div className="item-detail ease-element">
                              The traditional approach where the entire flow is
                              divided into several distinct stages and each
                              stage generally finishes before the next one can
                              begin.
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            this.state.phaseType == "scrum"
                              ? "new-item selected ease-element"
                              : "new-item ease-element"
                          }
                          onClick={() => this.choosePhase("scrum")}
                        >
                          <div className="item-details">
                            <div className="item-title">Scrum</div>
                            <div className="item-detail ease-element">
                              This agile methodology is used where deliverables
                              are of small chunks and several such small
                              deliverables group up to form the final product.
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            this.state.phaseType == "kanban"
                              ? "new-item selected ease-element"
                              : "new-item ease-element"
                          }
                          onClick={() => this.choosePhase("kanban")}
                        >
                          <div className="item-details">
                            <div className="item-title">Kanban</div>
                            <div className="item-detail ease-element">
                              This agile methodology is used when teams can only
                              accommodate tasks based on their capacity. Full
                              transparency of work is a key attribute in this
                              process.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="description">
                      Choose the appropriate methodology
                    </div>
                  </div>
                  <div className="item">
                    <div className="title">Search Tags</div>
                    <div className="field">
                      <input type="text" />
                    </div>
                    <div className="description">
                      You can search for a project/phase/stage using a tag.
                      Create tags to group activities.
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                <Link to="projects">
                  <button className="active-button discard-button to-left">
                    discard flow
                  </button>
                </Link>
                <button
                  className="active-button to-left"
                  onClick={this.handleRangeChange}
                  value={1}
                >
                  previous section
                </button>
                <Link to="overview">
                  <button className="active-button to-left">
                    create project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  render() {
    const { activeIndex } = this.state;

    return (
      <React.Fragment>
        <div className="add-new-project">
          <Tab
            panes={this.panes}
            activeIndex={activeIndex}
            onTabChange={this.handleTabChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default NewProject;
