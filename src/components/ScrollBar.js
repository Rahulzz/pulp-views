import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

class ScrollBar extends Component {
  render() {
    return (
      <Scrollbars
        renderView={props => <div {...props} className="scroll-box" />}
      >
        <div />
        {this.props.children}
        <div />
      </Scrollbars>
    );
  }
}

class FloatVertical extends Component {
  render() {
    return (
      <Scrollbars
        renderView={props => (
          <div {...props} className="vertical-floating-scroll-box" />
        )}
      >
        <div />
        {this.props.children}
        <div />
      </Scrollbars>
    );
  }
}

ScrollBar.FloatVertical = FloatVertical;

export default ScrollBar;
