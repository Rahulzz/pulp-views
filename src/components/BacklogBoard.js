import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";

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

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

class BacklogBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggedItem: "",
      epicItems: epic_cards,
      storyItems: story_cards,
      taskItems: task_cards
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
      const items = reorder(
        this.state.storyItems,
        result.source.index,
        result.destination.index
      );
      this.setState({
        storyItems: items
      });
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

  render() {
    return (
      <div className="backlog-container backlog-board">
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
                isDropDisabled={"EPIC" == this.state.draggedItem ? false : true}
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
                isDropDisabled={"TASK" == this.state.draggedItem ? false : true}
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
        </DragDropContext>
      </div>
    );
  }
}

export default BacklogBoard;
