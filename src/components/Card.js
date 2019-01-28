import React, { Component } from "react";

class Card extends Component {
  render() {
    return <div />;
  }
}

class Backlog extends Component {
  return_tag_title = type => {
    if ("epic" === type) {
      return "STORIES";
    } else if ("story" === type) {
      return "TASKS";
    }
  };

  render_counter = (type, current, total) => {
    if ("epic" == type) {
      return (
        <div className="card-options">
          <div className="status">
            <div className="icon icon-badge" />
            <div className="counter">
              <div className="value">
                {this.props.current} / {this.props.total}
              </div>
              <div className="tag">{this.return_tag_title(type)}</div>
            </div>
          </div>
          <div className="options">
            <div className="icon icon-attachment ease-element" />
            <div className="icon icon-notes ease-element" />
          </div>
        </div>
      );
    } else if ("story" == type) {
      return (
        <div className="card-options">
          <div className="status">
            <div className="icon icon-badge" />
            <div className="counter">
              <div className="value">
                {this.props.current} / {this.props.total}
              </div>
              <div className="tag">{this.return_tag_title(type)}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return "";
    }
  };

  render_description = content => {
    if (content.length > 0) {
      return <div className="card-description">{content}</div>;
    } else {
      return "";
    }
  };

  render_parent_tag = (type, parentId) => {
    if ("epic" != type) {
      return (
        <React.Fragment>
          <div className="card-tag">{parentId}</div>
          <div className="options">
            <div className="icon icon-attachment ease-element" />
            <div className="icon icon-notes ease-element" />
          </div>
        </React.Fragment>
      );
    } else {
      return <div />;
    }
  };

  render() {
    return (
      <div className={"card " + this.props.type}>
        <div
          className="card-percentage"
          style={{ width: this.props.status + "%" }}
        />
        <div className="card-id">
          <span>{this.props.id}</span>
          <span>{this.props.date}</span>
        </div>
        <div className="card-title">
          <div
            className="card-color"
            style={{ "background-color": this.props.color }}
          />
          {this.props.title}
        </div>
        {this.render_description(this.props.description)}
        {this.render_counter(
          this.props.type,
          this.props.current,
          this.props.total
        )}
        <div className="card-tag-options">
          {this.render_parent_tag(this.props.type, this.props.parentId)}
        </div>
      </div>
    );
  }
}

Card.Backlog = Backlog;

export default Card;
