import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from "match-sorter";
import { Link } from "react-router-dom";
import { Popup } from "semantic-ui-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const user_sprint_data = [
  { name: "Oct 8 - 14", value: 34 },
  { name: "Oct 1 - 7", value: 50 },
  { name: "Sep 24 - 30", value: 42 },
  { name: "Sep 17 - 23", value: 28 },
  { name: "Sep 10 - 16", value: 40 },
  { name: "Sep 3 - 9", value: 41 },
  { name: "This week", value: 54 }
];

class Projects extends Component {
  routeChange = () => {
    let path = `projectDashboard`;
    this.props.history.push(path);
  };

  render() {
    const project_data = [
      {
        id: "PROJ87329",
        name: "Europe Thinline",
        type: "Project",
        completion: "20",
        health: "healthy",
        owner: "Mahesh Rudraiah",
        tasks: "23",
        pulp: "7.2",
        created: "25 Jan, 2018"
      },
      {
        id: "PROJ47687",
        name: "Japan Thinline",
        type: "Project",
        completion: "20",
        health: "blocked",
        owner: "Manoj Pareek",
        tasks: "12",
        pulp: "9.6",
        created: "25 Jan, 2018"
      },
      {
        id: "PROJ8463878",
        name: "2.0 UI Revamp",
        type: "Project",
        completion: "45",
        health: "healthy",
        owner: "Shanmuganathan Vijayaraman",
        tasks: "20",
        pulp: "9.2",
        created: "25 Jan, 2018"
      },
      {
        id: "QUE87329",
        name: "1.0 UI Issues",
        type: "Queue",
        completion: "10",
        health: "healthy",
        owner: "Beatrice Priyadarshini",
        tasks: "20",
        pulp: "9.8",
        created: "25 Jan, 2018"
      },
      {
        id: "PROJ8738787",
        name: "Pulp Search Functionality",
        type: "Project",
        completion: "70",
        health: "delayed",
        owner: "Gautham Kumar Rajendran",
        tasks: "5",
        pulp: "8.9",
        created: "25 Jan, 2018"
      },
      {
        id: "PROJ87329",
        name: "China Thinline",
        type: "Project",
        completion: "20",
        health: "healthy",
        owner: "Mahesh Rudraiah",
        tasks: "23",
        pulp: "6.8",
        created: "25 Jan, 2018"
      },
      {
        id: "PROJ47687",
        name: "Japan Thinline",
        type: "Project",
        completion: "20",
        health: "blocked",
        owner: "Manoj Pareek",
        tasks: "12",
        pulp: "9.6",
        created: "25 Jan, 2018"
      },
      {
        id: "PROJ8463878",
        name: "2.0 UI Revamp",
        type: "Project",
        completion: "45",
        health: "healthy",
        owner: "Shanmuganathan Vijayaraman",
        tasks: "20",
        pulp: "9.2",
        created: "25 Jan, 2018"
      },
      {
        id: "QUE87329",
        name: "1.0 UI Issues",
        type: "Queue",
        completion: "30",
        health: "healthy",
        owner: "Beatrice Priyadarshini",
        tasks: "20",
        pulp: "9.8",
        created: "25 Jan, 2018"
      },
      {
        id: "PROJ8738787",
        name: "Pulp Search Functionality",
        type: "Project",
        completion: "40",
        health: "delayed",
        owner: "Gautham Kumar Rajendran",
        tasks: "5",
        pulp: "8.9",
        created: "25 Jan, 2018"
      },
      {
        id: "PROJ8463878",
        name: "2.0 UI Revamp",
        type: "Project",
        completion: "45",
        health: "healthy",
        owner: "Shanmuganathan Vijayaraman",
        tasks: "20",
        pulp: "9.2",
        created: "25 Jan, 2018"
      }
    ];

    const columns = [
      {
        Header: "",
        accessor: "type",
        width: 50,
        Cell: props => (
          <div className="pulp-data-item pulp-data-table-column-right">
            <span className={"icon icon-menu-" + props.value.toLowerCase()} />
          </div>
        ),
        filterable: false,
        sortable: false
      },
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
        Header: "Name",
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
            placeholder="Search by Name"
            value={filter ? filter.value : ""}
            onChange={event => onChange(event.target.value)}
          />
        )
      },
      {
        Header: "Owner",
        accessor: "owner",
        Cell: props => (
          <div className="pulp-data-item pulp-data-table-column-left">
            <div className="project-owner">
              <div className="name">{props.value}</div>
              <div className="date">created on {props.original.created}</div>
            </div>
          </div>
        ),
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["owner"] }),
        filterAll: true,
        Filter: ({ filter, onChange }) => (
          <input
            type="text"
            placeholder="Search by Owner"
            value={filter ? filter.value : ""}
            onChange={event => onChange(event.target.value)}
          />
        )
      },
      {
        Header: "Completion",
        accessor: "completion",
        width: 250,
        Cell: props => (
          <div className="pulp-data-item pulp-data-table-column-left">
            <div className="life-left">{props.value} %</div>
            <div className="life-indicator">
              <div
                className="life-rail"
                style={{ width: 100 - props.value + "%" }}
              />
            </div>
          </div>
        ),
        filterable: false
      },
      {
        Header: "Active tasks",
        width: 150,
        accessor: "tasks",
        Cell: props => (
          <div className="pulp-data-item pulp-data-table-column-left">
            <div className="tasks">{props.value}</div>
          </div>
        ),
        filterable: false
      },
      {
        Header: "Pulp factor",
        width: 150,
        accessor: "pulp",
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
        <Header selected="projects" />
        <div className="page-header full-screen-wrapper">
          <div className="title">
            <div className="name">Projects and Queues</div>
          </div>
          <div className="options">
            <Link to="newProject">
              <button className="active-button to-left">
                CREATE A NEW PROJECT / QUEUE
              </button>
            </Link>
          </div>
        </div>
        <div className="stats-table full-screen-wrapper">
          <div className="stats-container">
            <div className="stats-item">
              <div className="stat-item-container">
                <div className="icon icon-project-open" />
                <div className="value">12</div>
                <div className="title">
                  Open projects<br />and queues
                </div>
              </div>
            </div>
            <div className="stats-item">
              <div className="stat-item-container">
                <div className="icon icon-project-critical" />
                <div className="value">24</div>
                <div className="title">
                  Critical<br />items
                </div>
              </div>
            </div>
            <Popup
              trigger={
                <div className="stats-item">
                  <div className="stat-item-container">
                    <div className="icon icon-project-best" />
                    <div className="value">9.0</div>
                    <div className="title">
                      Best<br />Pulp factor
                    </div>
                  </div>
                </div>
              }
              content="1.0 UI Issues"
              position="top center"
              className="app-popup"
              basic
            />
            <Popup
              trigger={
                <div className="stats-item">
                  <div className="stat-item-container">
                    <div className="icon icon-project-worst" />
                    <div className="value">6.2</div>
                    <div className="title">
                      Worst<br />Pulp factor
                    </div>
                  </div>
                </div>
              }
              content="China Thinline"
              position="top center"
              className="app-popup"
              basic
            />
            <div className="stats-item">
              <div className="stat-item-container">
                <div className="icon icon-project-average" />
                <div className="value">8.2</div>
                <div className="title">
                  Average<br />Pulp factor
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-data-table pulp-data-table full-screen-wrapper">
          <ReactTable
            data={project_data}
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
            getTrProps={(state, rowInfo, column, instance) => ({
              onClick: this.routeChange
            })}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Projects;
