import React, { Component } from "react";
import Col from "react-bootstrap";
import { Popup } from "semantic-ui-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

class Card extends Component {
  generate_initials(name) {
    var initials = "";
    var counter = 0;
    if (name.length > 0) {
      var nameParts = name.split(" ");
      for (var i = 0; i < nameParts.length; i++) {
        if (nameParts[i].length > 1) {
          if (counter < 2) {
            counter++;
            initials += nameParts[i].substring(0, 1);
          } else {
            break;
          }
        }
      }
    }
    return initials;
  }

  render() {
    return (
      <Draggable
        key={this.props.id}
        draggableId={this.props.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <div
            className={
              this.props.state.length > 0
                ? "card " + this.props.state.toLowerCase()
                : "card"
            }
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="name">
              <div className="title">{this.props.name}</div>
              <div className="icon icon-menu-dots ease-element" />
            </div>
            <div className="description">{this.props.description}</div>
            <div className="options-bar">
              <div className="options">
                <div className="icon icon-attachment ease-element" />
                <div className="icon icon-notes ease-element" />
                <Popup
                  trigger={<div className="icon icon-info" />}
                  content="Reason for the state is displayed along with possible options to correct."
                  position="top center"
                  className="app-popup"
                  basic
                />
              </div>
              <div className="owner">
                <Popup
                  trigger={
                    <div>{this.generate_initials(this.props.owner)}</div>
                  }
                  content={this.props.owner}
                  position="top center"
                  className="app-popup"
                  basic
                />
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

class Column extends Component {
  render_max_badge(max) {
    if (max.length > 0) {
      return <div className="max-indicator">{"max - " + max}</div>;
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="column-box">
        <div className="column-title-bar">
          <div className="name">{this.props.name}</div>
          <div className="options">
            {this.props.applyMax ? this.render_max_badge(this.props.max) : ""}
            <div className="icon icon-menu-add ease-element" />
            <div className="icon icon-menu-dots ease-element" />
          </div>
        </div>
        <Droppable droppableId={this.props.index}>
          {(provided, snapshot) => (
            <div className="card-box" ref={provided.innerRef}>
              {this.props.cards.map((answer, i) => {
                return (
                  <Card
                    id={answer.id}
                    name={answer.name}
                    description={answer.description}
                    owner={answer.owner}
                    state={answer.state}
                    index={i}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

class Board extends Component {
  state = {};

  componentWillMount() {
    this.initialCardsForDnD(this.props.columns);
  }

  componentDidUpdate(prevProps) {
    if (this.props.columns !== prevProps.columns) {
      this.initialCardsForDnD(this.props.columns);
    }
  }

  initialCardsForDnD(columns) {
    columns.map((answer, i) => {
      this.setState({
        ["column" + i]: answer.cards
      });
    });
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

  render() {
    return (
      <div className="columns-container">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.props.columns.map((answer, i) => {
            return (
              <Column
                id={answer.id}
                name={answer.name}
                max={answer.max}
                cards={this.state["column" + i]}
                applyMax={this.props.applyMax}
                index={i}
              />
            );
          })}
        </DragDropContext>
      </div>
    );
  }
}

export default Board;
