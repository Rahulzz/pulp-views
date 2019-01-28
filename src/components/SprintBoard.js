import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";

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

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

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

class SprintBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyItems: story_cards
    };
  }

  componentWillMount() {
    this.setState({ sprintStories: this.props.stories });
  }

  componentDidUpdate(prevProps) {
    if (this.props.stories !== prevProps.stories) {
      this.setState({ sprintStories: this.props.stories });
    }
  }

  getList = id => {
    if ("story-droppable" == id) {
      return "storyItems";
    } else if ("sprint-droppable" == id) {
      return "sprintStories";
    }
  };

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.state[this.getList(source.droppableId)],
        source.index,
        destination.index
      );

      this.setState({ [this.getList(source.droppableId)]: items });
    } else {
      const result = move(
        this.state[this.getList(source.droppableId)],
        this.state[this.getList(destination.droppableId)],
        source,
        destination
      );
      this.setState({
        [this.getList(source.droppableId)]: result[source.droppableId],
        [this.getList(destination.droppableId)]: result[destination.droppableId]
      });
    }
  };

  render() {
    return (
      <div className="sprint-container">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="backlog-section">
            <div className="backlog-columns-container">
              <div className="backlog-column story-column">
                <div className="column-header">
                  <div className="title">
                    Backlog Stories<div className="column-counter">
                      {this.state.storyItems.length}
                    </div>
                  </div>
                </div>
                <Droppable droppableId="story-droppable">
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
            </div>
          </div>
          <div className="sprint-section">
            <div className="column-header">
              <div className="title">
                Sprint<div className="column-counter">
                  {this.state.sprintStories.length}
                </div>
              </div>
              <div className="options">
                <div className="sprint-status">being planned</div>
                <div className="icon icon-menu-dots" />
              </div>
            </div>
            <Droppable droppableId="sprint-droppable">
              {(provided, snapshot) => (
                <div className="sprint-box" ref={provided.innerRef}>
                  <div className="sprint-items">
                    {this.state.sprintStories.map((item, index) => (
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
                              transform: snapshot.isDragging
                                ? "scale(0.3)"
                                : "scale(1)",
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
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    );
  }
}

export default SprintBoard;
