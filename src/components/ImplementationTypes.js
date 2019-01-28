import React, { Component } from "react";
import { Popup } from "semantic-ui-react";

class ImplementationTypes extends Component {
  render() {
    if ("short" === this.props.type) {
      return (
        <div className="implement-short">
          <div className="implement-type ease-element">
            <div className="name">Waterfall</div>
            <Popup
              trigger={<div className="icon icon-info" />}
              content="The traditional approach where the entire flow is divided into several distinct stages and each stage generally finishes before the next one can begin."
              position="top center"
              className="app-popup"
              basic
            />
          </div>
          <div className="implement-type ease-element">
            <div className="name">Scrum</div>
            <Popup
              trigger={<div className="icon icon-info" />}
              content="This agile methodology is used where deliverables are of small chunks and several such small deliverables group up to form the final product."
              position="top center"
              className="app-popup"
              basic
            />
          </div>
          <div className="implement-type ease-element">
            <div className="name">Kanban</div>
            <Popup
              trigger={<div className="icon icon-info" />}
              content="This agile methodology is used when teams can only accommodate tasks based on their capacity. Full transparency of work is a key attribute in this process."
              position="top center"
              className="app-popup"
              basic
            />
          </div>
        </div>
      );
    }
  }
}

export default ImplementationTypes;
