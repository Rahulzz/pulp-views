import React, { Component } from "react";
import Card from "../components/Card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Motion, spring } from "react-motion";
import { sprint_boards_data } from "../mockdata/sprintBoards";

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

class MultiColumnDragnDrop extends Component {
  state = {};

  componentWillMount() {
    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    sprint_boards_data[0].columns.map((answer, i) => {
      this.setState({
        ["column" + i]: answer.cards
      });
    });
    console.log(JSON.stringify(this.state));
  }

  getList = id => this.state["column" + id];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      console.log(JSON.stringify(this.state["column0"]));
      this.setState({ ["column" + source.droppableId]: items });
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );
      this.setState({
        ["column" + source.droppableId]: result[source.droppableId],
        ["column" + destination.droppableId]: result[destination.droppableId]
      });
    }
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "900px",
          display: "flex",
          "justify-content": "center",
          "align-items": "center"
        }}
      >
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div
            className="backlog-column epic-column"
            style={{
              display: "flex",
              "justify-content": "center"
            }}
          >
            {sprint_boards_data[0].columns.map((answer, i) => {
              return (
                <Droppable droppableId={i}>
                  {(provided, snapshot) => (
                    <div
                      className="card-container"
                      style={{
                        width: "450px",
                        "margin-right": "100px",
                        "background-image":
                          "linear-gradient(120deg,#e0e9ed 8.33%,#f9fafc 8.33%,#f9fafc 50%,#e0e9ed 50%,#e0e9ed 58.33%,#f9fafc 58.33%,#f9fafc 100%)",
                        "background-size": "6.93px 12px",
                        padding: "50px",
                        "border-radius": "5px",
                        border: "1px solid #e0e9ed"
                      }}
                      ref={provided.innerRef}
                    >
                      {this.state["column" + i].map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <Motion
                              defaultStyle={{ shadow: 1 }}
                              style={{
                                shadow: spring(snapshot.isDragging ? 16 : 1)
                              }}
                            >
                              {motion => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: "none",
                                    "margin-bottom": "30px",
                                    "box-shadow":
                                      "rgba(0, 0, 0, 0.2) 0px " +
                                      motion.shadow +
                                      "px " +
                                      motion.shadow * 2 +
                                      "px 0px",
                                    ...provided.draggableProps.style
                                  }}
                                >
                                  <Card.Backlog
                                    type="epic"
                                    id={item.id}
                                    title={item.name}
                                    description={item.description}
                                    date={item.date}
                                    color={item.color}
                                    current={item.current}
                                    total={item.total}
                                    status={item.status}
                                  />
                                </div>
                              )}
                            </Motion>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    );
  }
}

export default MultiColumnDragnDrop;
