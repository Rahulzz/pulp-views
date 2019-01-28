import React, { Component } from "react";
import Col from "react-bootstrap";
import { Breadcrumb, Checkbox, Dropdown, Popup } from "semantic-ui-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "../components/Card";
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

var epic_cards = [
  {
    id: "EPC1513",
    date: "01, SEP 2018",
    title: "Universal Search",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum, nibh id scelerisque lobortis, risus sapien lacinia justo, quis aliquet ante nibh id",
    current: "9",
    total: "10",
    status: "90",
    color: "#98f80f"
  },
  {
    id: "EPC1514",
    date: "02, SEP 2018",
    title: "Live Progress",
    description:
      "Aliquam erat volutpat. Aliquam a consequat enim. Sed vulputate eros eget ante vulputate.",
    current: "8",
    total: "20",
    status: "33",
    color: "#fb5707"
  }
];

var story_cards = [
  {
    id: "STR2351512",
    date: "30, AUG 2018",
    title: "UI Component Mockup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum.",
    current: "5",
    total: "10",
    status: "50",
    color: "#98f80f",
    parentId: "EPIC1512"
  },
  {
    id: "STR2351513",
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
    id: "STR2351514",
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

var task_cards = [
  {
    id: "TSK98091512",
    date: "30, AUG 2018",
    title: "Search UI Design",
    description: "",
    current: "5",
    total: "10",
    status: "50",
    color: "#98f80f",
    parentId: "STR1512"
  },
  {
    id: "TSK98091513",
    date: "01, SEP 2018",
    title: "Search API",
    description: "",
    current: "9",
    total: "10",
    status: "90",
    color: "#98f80f",
    parentId: "STR1512"
  },
  {
    id: "TSK98091514",
    date: "02, SEP 2018",
    title: "Live Progress",
    description:
      "Aliquam erat volutpat. Aliquam a consequat enim. Sed vulputate eros eget ante vulputate.",
    current: "8",
    total: "20",
    status: "33",
    color: "#fb5707",
    parentId: "STR1512"
  }
];

var sprint_stories = [
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

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

/**
 * Remove from the list.
 */
const remove = (source, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

class Backlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggedItem: "",
      epicItems: epic_cards,
      storyItems: story_cards,
      taskItems: task_cards,
      sprintStories: sprint_stories,
      showBacklogForm: false
    };
  }

  onDragStart = result => {
    var cardType = result.draggableId.substring(0, 3);

    if ("EPC" === cardType) {
      cardType = "EPIC";
    } else if ("STR" === cardType) {
      cardType = "STORY";
    } else if ("TSK" === cardType) {
      cardType = "TASK";
    }

    this.setState({
      draggedItem: cardType
    });
  };

  onDragEnd = result => {
    const { source, destination } = result;

    var cardType = result.draggableId.substring(0, 3);

    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if ("EPC" === cardType) {
      const items = reorder(
        this.state.epicItems,
        result.source.index,
        result.destination.index
      );
      this.setState({
        epicItems: items
      });
    } else if ("STR" === cardType) {
      if ("sprint-droppable" != destination.droppableId) {
        const items = reorder(
          this.state.storyItems,
          result.source.index,
          result.destination.index
        );
        this.setState({
          storyItems: items
        });
      } else {
        const result = move(
          this.state.storyItems,
          this.state.sprintStories,
          source,
          destination
        );
        this.setState({
          storyItems: result[source.droppableId],
          sprintStories: result[destination.droppableId]
        });
      }
    } else if ("TSK" === cardType) {
      const items = reorder(
        this.state.taskItems,
        result.source.index,
        result.destination.index
      );
      this.setState({
        taskItems: items
      });
    }
  };

  toggleBacklogOverlay = () => {
    this.setState({
      showBacklogForm: !this.state.showBacklogForm
    });
  };

  render() {
    return (
      <React.Fragment>
        <OverlayForms
          type="backlog"
          display={this.state.showBacklogForm}
          close={this.toggleBacklogOverlay}
        />
        <Header type="project" selected="backlog" />
        <div className="page-header full-screen-wrapper">
          <div className="title">
            <div className="crumb">
              <Breadcrumb>
                <Breadcrumb.Section link href="projectDashboard">
                  Europe Thinline
                </Breadcrumb.Section>
                <Breadcrumb.Divider content="/" />
                <Breadcrumb.Section active>Backlog</Breadcrumb.Section>
              </Breadcrumb>
            </div>
            <div className="name">Backlog</div>
          </div>
          <div className="options">
            <button
              className="active-button to-left"
              onClick={this.toggleBacklogOverlay}
            >
              ADD AN EPIC / STORY / TASK
            </button>
          </div>
        </div>
        <div className="choice-container full-screen-wrapper">
          <div className="choice-box">
            <div className="choice-field">
              <span className="pre-text">Storybox for </span>
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
              <Checkbox label="always display storybox for this sprint" />
            </div>
          </div>
        </div>
        <div className="statsnfilter-box full-screen-wrapper">
          <div className="stats-box">
            <div className="stats-item">
              <div className="icon icon-untouch" />
              <div className="stats-value">02</div>
              <div className="stats-title">
                Untouched<br />epics
              </div>
            </div>
            <div className="stats-item">
              <div className="icon icon-spill" />
              <div className="stats-value">03</div>
              <div className="stats-title">
                Spilled<br />tasks
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
                content="Move all stories from this sprint to backlog"
                basic
              />
            </div>
            <div className="option">
              <Popup
                trigger={<span className="icon icon-undo ease-element" />}
                position="top center"
                className="app-popup"
                content="Undo last story move"
                basic
              />
            </div>
          </div>
        </div>
        <div className="backlog-container full-screen-wrapper">
          <DragDropContext
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
          >
            <div className="backlog-card-container">
              <div className="backlog-column epic-column">
                <div className="column-header">
                  <div className="title">
                    Epics<div className="column-counter">
                      {this.state.epicItems.length}
                    </div>
                  </div>
                </div>
                <Droppable
                  droppableId="epic-droppable"
                  isDropDisabled={
                    "EPIC" == this.state.draggedItem ? false : true
                  }
                >
                  {(provided, snapshot) => (
                    <div className="card-container" ref={provided.innerRef}>
                      {this.state.epicItems.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: "none",
                                "margin-bottom": "30px",
                                ...provided.draggableProps.style
                              }}
                            >
                              <Card.Backlog
                                type="epic"
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                date={item.date}
                                color={item.color}
                                current={item.current}
                                total={item.total}
                                status={item.status}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              <div className="backlog-column story-column">
                <div className="column-header">
                  <div className="title">
                    Stories<div className="column-counter">
                      {this.state.storyItems.length}
                    </div>
                  </div>
                </div>
                <Droppable
                  droppableId="story-droppable"
                  isDropDisabled={
                    "STORY" == this.state.draggedItem ? false : true
                  }
                >
                  {(provided, snapshot) => (
                    <div className="card-container" ref={provided.innerRef}>
                      {this.state.storyItems.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: "none",
                                "margin-bottom": "30px",
                                ...provided.draggableProps.style
                              }}
                            >
                              <Card.Backlog
                                type="story"
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                date={item.date}
                                color={item.color}
                                current={item.current}
                                total={item.total}
                                status={item.status}
                                parentId={item.parentId}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              <div className="backlog-column task-column">
                <div className="column-header">
                  <div className="title">
                    Tasks<div className="column-counter">
                      {this.state.taskItems.length}
                    </div>
                  </div>
                </div>
                <Droppable
                  droppableId="task-droppable"
                  isDropDisabled={
                    "TASK" == this.state.draggedItem ? false : true
                  }
                >
                  {(provided, snapshot) => (
                    <div className="card-container" ref={provided.innerRef}>
                      {this.state.taskItems.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: "none",
                                "margin-bottom": "30px",
                                ...provided.draggableProps.style
                              }}
                            >
                              <Card.Backlog
                                type="task"
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                date={item.date}
                                color={item.color}
                                current={item.current}
                                total={item.total}
                                status={item.status}
                                parentId={item.parentId}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
            <div className="sprint-dropbar-container">
              <div className="dropbar-box">
                <div className="column-header">
                  <div className="title">
                    Sprint Storybox<div className="column-counter">
                      {this.state.sprintStories.length}
                    </div>
                  </div>
                </div>
                <Droppable
                  droppableId="sprint-droppable"
                  isDropDisabled={
                    "STORY" == this.state.draggedItem ? false : true
                  }
                >
                  {(provided, snapshot) => (
                    <div className="dropbar" ref={provided.innerRef}>
                      <div className="icon icon-drop-box" />
                      <div className="title">Drop User Stories</div>
                    </div>
                  )}
                </Droppable>
                <div className="disclaimer">
                  Make sure to drop stories which can be completed in one
                  sprint. In case of doubts, split the stories into achievable
                  targets
                </div>
              </div>
            </div>
          </DragDropContext>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Backlog;
