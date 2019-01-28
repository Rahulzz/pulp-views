import React, { Component } from "react";
import Card from "../components/Card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Motion, spring } from "react-motion";

var cards = [
  {
    id: "EPIC1512",
    date: "30, AUG 2018",
    title: "Requirement Gathering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum, nibh id scelerisque lobortis, risus sapien lacinia justo, quis aliquet ante nibh id",
    current: "5",
    total: "10",
    status: "50",
    color: "#98f80f"
  },
  {
    id: "EPIC1513",
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
    id: "EPIC1514",
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

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class MultiColumnDragnDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: cards
    };
  }

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

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
              width: "450px",
              "background-image":
                "linear-gradient(120deg,#e0e9ed 8.33%,#f9fafc 8.33%,#f9fafc 50%,#e0e9ed 50%,#e0e9ed 58.33%,#f9fafc 58.33%,#f9fafc 100%)",
              "background-size": "6.93px 12px",
              padding: "50px",
              "border-radius": "5px"
            }}
          >
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div className="card-container" ref={provided.innerRef}>
                  {this.state.items.map((item, index) => (
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
                        </Motion>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    );
  }
}

export default MultiColumnDragnDrop;
