import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from "match-sorter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OverlayForms from "../components/OverlayForms";

class Bugs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBugsForm: false
    };
  }

  toggleBugsOverlay = () => {
    this.setState({
      showBugsForm: !this.state.showBugsForm
    });
  };

  render() {
    const bugs_data = [
      {
        id: "BUG87329",
        name: "Search field disabled",
        health: "healthy",
        created: "13:40, 25 Jan, 2018",
        assignedDate: "13:40, 25 Jan, 2018",
        assignedTo: "Mahesh Rudraiah",
        project: "Europe Thinline",
        status: "Assigned",
        turnaround: "-"
      },
      {
        id: "BUG87329",
        name: "Menu position mis-aligned",
        health: "healthy",
        created: "13:45, 25 Jan, 2018",
        assignedDate: "13:40, 25 Jan, 2018",
        assignedTo: "Shanmuganathan Vijayaraman",
        project: "Japan Thinline",
        status: "Completed",
        turnaround: "31"
      },
      {
        id: "BUG87329",
        name: "Footer logo missing",
        health: "delayed",
        created: "22:10, 25 Nov, 2017",
        assignedDate: "13:40, 25 Jan, 2018",
        assignedTo: "Beatrice Priyadarshini",
        project: "Europe Thinline",
        status: "On Hold",
        turnaround: "-"
      },
      {
        id: "BUG87329",
        name: "Bugs form submission failing",
        health: "healthy",
        created: "12:12, 12 Dec, 2017",
        assignedDate: "13:40, 25 Jan, 2018",
        assignedTo: "Manoj Pareek",
        project: "2.0 UI Revamp",
        status: "In Progress",
        turnaround: "-"
      },
      {
        id: "BUG87329",
        name: "Login button missing",
        health: "healthy",
        created: "09:20, 28 Jan, 2018",
        assignedDate: "13:40, 25 Jan, 2018",
        assignedTo: "Gautham Kumar Rajendran",
        project: "2.0 UI Revamp",
        status: "Completed",
        turnaround: "23"
      },
      {
        id: "BUG87329",
        name: "Search field disabled",
        health: "healthy",
        created: "13:40, 25 Jan, 2018",
        assignedDate: "13:40, 25 Jan, 2018",
        assignedTo: "Mahesh Rudraiah",
        project: "Europe Thinline",
        status: "Assigned",
        turnaround: "-"
      },
      {
        id: "BUG87329",
        name: "Menu position mis-aligned",
        health: "healthy",
        created: "13:45, 25 Jan, 2018",
        assignedDate: "13:40, 25 Jan, 2018",
        assignedTo: "Shanmuganathan Vijayaraman",
        project: "Japan Thinline",
        status: "Completed",
        turnaround: "31"
      },
      {
        id: "BUG87329",
        name: "Footer logo missing",
        health: "delayed",
        created: "22:10, 25 Nov, 2017",
        assignedDate: "13:40, 25 Jan, 2018",
        assignedTo: "Beatrice Priyadarshini",
        project: "Europe Thinline",
        status: "On Hold",
        turnaround: "-"
      },
      {
        id: "BUG87329",
        name: "Bugs form submission failing",
        health: "healthy",
        created: "12:12, 12 Dec, 2017",
        assignedDate: "13:40, 25 Jan, 2018",
        assignedTo: "Manoj Pareek",
        project: "2.0 UI Revamp",
        status: "In Progress",
        turnaround: "-"
      },
      {
        id: "BUG87329",
        name: "Login button missing",
        health: "healthy",
        created: "09:20, 28 Jan, 2018",
        assignedDate: "13:40, 25 Jan, 2018",
        assignedTo: "Gautham Kumar Rajendran",
        project: "2.0 UI Revamp",
        status: "Completed",
        turnaround: "23"
      }
    ];

    const columns = [
      {
        Header: "",
        accessor: "health",
        width: 150,
        Cell: props => (
          <div className="pulp-data-item pulp-data-table-column-center">
            <div className={"health-indicator " + props.value.toLowerCase()}>
              {props.value}
            </div>
          </div>
        ),
        filterable: false,
        sortable: false
      },
      {
        Header: "Title",
        accessor: "name",
        Cell: props => (
          <div className="pulp-data-item pulp-data-table-column-left">
            <div className="project-name">
              <div className="id">{props.original.id}</div>
              <div className="name">{props.value}</div>
            </div>
          </div>
        ),
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["name"] }),
        filterAll: true,
        Filter: ({ filter, onChange }) => (
          <input
            type="text"
            placeholder="Search by Title"
            value={filter ? filter.value : ""}
            onChange={event => onChange(event.target.value)}
          />
        )
      },
      {
        Header: "Created On",
        width: 200,
        accessor: "created",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["created"] }),
        filterAll: true,
        Filter: ({ filter, onChange }) => (
          <input
            type="text"
            placeholder="Search by Date"
            value={filter ? filter.value : ""}
            onChange={event => onChange(event.target.value)}
          />
        )
      },
      {
        Header: "Assigned",
        accessor: "assignedTo",
        Cell: props => (
          <div className="pulp-data-item pulp-data-table-column-left">
            <div className="project-owner">
              <div className="name">{props.value}</div>
              <div className="date">
                assigned on {props.original.assignedDate}
              </div>
            </div>
          </div>
        ),
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["assignedTo"] }),
        filterAll: true,
        Filter: ({ filter, onChange }) => (
          <input
            type="text"
            placeholder="Search by Assigned Person"
            value={filter ? filter.value : ""}
            onChange={event => onChange(event.target.value)}
          />
        )
      },
      {
        Header: "Status",
        width: 200,
        accessor: "status",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["name"] }),
        filterAll: true,
        Filter: ({ filter, onChange }) => (
          <input
            type="text"
            placeholder="Search by Status"
            value={filter ? filter.value : ""}
            onChange={event => onChange(event.target.value)}
          />
        )
      },
      {
        Header: "Turnaround",
        width: 150,
        accessor: "turnaround",
        Cell: props => (
          <div className="pulp-data-item pulp-data-table-column-left">
            <div className="factor">{props.value}</div>
          </div>
        ),
        filterable: false
      }
    ];

    return (
      <React.Fragment>
        <OverlayForms
          type="bugs"
          display={this.state.showBugsForm}
          close={this.toggleBugsOverlay}
        />
        <Header selected="bugs" />
        <div className="page-header full-screen-wrapper">
          <div className="title">
            <div className="name">Bugs</div>
          </div>
          <div className="options">
            <button
              className="active-button to-left"
              onClick={this.toggleBugsOverlay}
            >
              ADD A NEW BUG
            </button>
          </div>
        </div>
        <div className="stats-table full-screen-wrapper">
          <div className="stats-container">
            <div className="stats-item">
              <div className="stat-item-container">
                <div className="icon icon-bugs" />
                <div className="value">138</div>
                <div className="title">
                  Open<br />Bugs
                </div>
              </div>
            </div>
            <div className="stats-item">
              <div className="stat-item-container">
                <div className="icon icon-delayed-bugs" />
                <div className="value">13</div>
                <div className="title">
                  Long delayed<br />Bugs
                </div>
              </div>
            </div>
            <div className="stats-item">
              <div className="stat-item-container">
                <div className="icon icon-project-best" />
                <div className="value">02</div>
                <div className="title">
                  Best turnaround<br />time (hours)
                </div>
              </div>
            </div>
            <div className="stats-item">
              <div className="stat-item-container">
                <div className="icon icon-project-worst" />
                <div className="value">13</div>
                <div className="title">
                  Worst turnaround<br />time (hours)
                </div>
              </div>
            </div>
            <div className="stats-item">
              <div className="stat-item-container">
                <div className="icon icon-project-average" />
                <div className="value">05</div>
                <div className="title">
                  Average turnaround<br />time (hours)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bugs-data-table pulp-data-table full-screen-wrapper">
          <ReactTable
            data={bugs_data}
            columns={columns}
            defaultPageSize={10}
            minRows={0}
            resizable={false}
            showPageSizeOptions={false}
            showPageJump={true}
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value
            }
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Bugs;
