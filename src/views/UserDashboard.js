import React, { Component } from "react";
import Col from "react-bootstrap";
import {
  LineChart,
  AreaChart,
  ComposedChart,
  Line,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
  LabelList
} from "recharts";
import { Tab } from "semantic-ui-react";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Board from "../components/Board";
import { user_dashboard_burndown_data } from "../mockdata/userDashboardBurndown";

const active_tasks_data = [
  {
    id: "TSK3490",
    title: "Universal Search",
    priority: "high",
    summary:
      "Quisque iaculis magna in arcu pulvinar, ac consequat sapien mollis. Nulla facilisi.",
    status: "healthy"
  },
  {
    id: "TSK3486",
    title: "Live Progress",
    priority: "low",
    summary:
      "Quisque iaculis magna in arcu pulvinar, ac consequat sapien mollis.",
    status: "healthy"
  },
  {
    id: "TSK7491",
    title: "Search API",
    priority: "medium",
    summary:
      "Aenean interdum placerat ipsum. Praesent nec risus id felis tincidunt interdum nec nec libero. Pellentesque metus mi, tincidunt a laoreet nec, malesuada quis est.",
    status: "delayed"
  },
  {
    id: "TSK7491",
    title: "Search API",
    priority: "medium",
    summary:
      "Aenean interdum placerat ipsum. Praesent nec risus id felis tincidunt interdum nec nec libero. Pellentesque metus mi, tincidunt a laoreet nec, malesuada quis est.",
    status: "delayed"
  },
  {
    id: "TSK7491",
    title: "UI Component Mockup",
    priority: "high",
    summary:
      "Nulla dictum dui nibh, in tincidunt felis porta consequat. Proin consectetur tincidunt velit, eu elementum tellus tempus in.",
    status: "delayed"
  },
  {
    id: "TSK7491",
    title: "Search UI design",
    priority: "medium",
    summary:
      "Aenean interdum placerat ipsum. Praesent nec risus id felis tincidunt interdum nec nec libero. Pellentesque metus mi, tincidunt a laoreet nec, malesuada quis est.",
    status: "delayed"
  }
];

const active_bugs_data = [
  {
    id: "BUG3490",
    title: "Search field disabled",
    priority: "high",
    created: "13:40, 25 Jan, 2018",
    assigned: "13:40, 25 Jan, 2018",
    status: "Assigned"
  },
  {
    id: "BUG3486",
    title: "Menu position mis-aligned",
    priority: "low",
    created: "13:40, 25 Jan, 2018",
    assigned: "13:40, 25 Jan, 2018",
    status: "On Hold"
  },
  {
    id: "BUG7491",
    title: "Footer logo missing",
    priority: "medium",
    created: "13:40, 25 Jan, 2018",
    assigned: "13:40, 25 Jan, 2018",
    status: "In Progress"
  },
  {
    id: "BUG7491",
    title: "Bugs form submission failing",
    priority: "medium",
    created: "13:40, 25 Jan, 2018",
    assigned: "13:40, 25 Jan, 2018",
    status: "Assigned"
  },
  {
    id: "BUG7491",
    title: "Login button missing",
    priority: "high",
    created: "13:40, 25 Jan, 2018",
    assigned: "13:40, 25 Jan, 2018",
    status: "Assigned"
  },
  {
    id: "BUG7491",
    title: "Search field disabled",
    priority: "medium",
    created: "13:40, 25 Jan, 2018",
    assigned: "13:40, 25 Jan, 2018",
    status: "On Hold"
  }
];

var board_data = {
  columns: [
    {
      id: 1011,
      name: "to do",
      cards: [
        {
          id: "101",
          name: "IA156 - UI/UX Rework",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
          owner: "Mahesh Rudraiah",
          state: ""
        },
        {
          id: "102",
          name: "IA189 - Alg Calculations with weighted average",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
          owner: "Mahesh Rudraiah",
          state: ""
        },
        {
          id: "103",
          name: "IA213 - Standard board checks",
          description: "",
          owner: "Mahesh Rudraiah",
          state: ""
        }
      ]
    },
    {
      id: 2011,
      name: "in progress",
      cards: [
        {
          id: "201",
          name: "IA189 - Alg Calculations with weighted average",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          owner: "Mahesh Rudraiah",
          state: ""
        },
        {
          id: "202",
          name: "IA213 - Standard board checks",
          description: "",
          owner: "Mahesh Rudraiah",
          state: "BLOCKED"
        }
      ]
    },
    {
      id: 3011,
      name: "done",
      cards: [
        {
          id: "401",
          name: "IA156 - UI/UX Rework",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
          owner: "Mahesh Rudraiah",
          state: ""
        },
        {
          id: "402",
          name: "IA189 - Alg Calculations with weighted average",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
          owner: "Shanmuganathan Vijayaraman",
          state: ""
        }
      ]
    },
    {
      id: 3011,
      name: "user acceptance testing",
      max: "3",
      cards: [
        {
          id: "301",
          name: "IA189 - Alg Calculations with weighted average",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          owner: "Mahesh Rudraiah",
          state: "DELAYED"
        }
      ]
    }
  ]
};

class UserDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Header type="project" selected="userdashboard" />
        <div className="user-dashboard-banner full-screen-wrapper">
          <div className="user-dashboard-status">
            <div className="project-name">All Projects and Queues</div>
            <div className="project-condition">
              work is progressing<br />
              <div className="gradient-text">as planned</div>
            </div>
          </div>
          <div className="user-dashboard-points">
            <div className="dashboard-section-title">
              Noteworthy<span>Points</span>
            </div>
            <div className="data">
              <div className="item">
                <div className="value">
                  72<span className="symbol">%</span>
                </div>
                <div className="name">
                  workload<br />burnt
                </div>
              </div>
              <div className="item">
                <div className="value">18</div>
                <div className="name">
                  pending<br />workload (hrs)
                </div>
              </div>
              <div className="item bold">
                <div className="value">12</div>
                <div className="name">
                  assigned<br />tasks
                </div>
              </div>
              <div className="item">
                <div className="value">03</div>
                <div className="name">
                  tasks yet to<br />start
                </div>
              </div>
              <div className="item">
                <div className="value">08</div>
                <div className="name">
                  completed<br />tasks
                </div>
              </div>
            </div>
            <div className="data">
              <div className="item highlight">
                <div className="value">02</div>
                <div className="name">
                  blocked<br />tasks
                </div>
              </div>
              <div className="item highlight">
                <div className="value">04</div>
                <div className="name">
                  delayed<br />tasks
                </div>
              </div>
              <div className="item highlight">
                <div className="value">05</div>
                <div className="name">
                  tasks to<br />spill over
                </div>
              </div>
              <div className="item bold">
                <div className="value">10</div>
                <div className="name">
                  assigned<br />bugs
                </div>
              </div>
              <div className="item">
                <div className="value">03</div>
                <div className="name">
                  closed<br />bugs
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="users-dashboard-burndown full-screen-wrapper">
          <div className="dashboard-section-title">
            Burndown<span>Chart</span>
          </div>
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={user_dashboard_burndown_data}
                margin={{ right: -15, left: -15 }}
              >
                <defs>
                  <linearGradient id="burndownline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="20%" stopColor="#2ed321" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#2ed321" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <YAxis type="number" domain={[0, 9]} hide={true} />
                <XAxis dataKey="date" stroke="#b8c5d4" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="hours"
                  stroke="#2ed321"
                  strokeWidth={1.5}
                  fillOpacity="1"
                  fill="url(#burndownline)"
                  strokeWidth={2}
                  dot={{ stroke: "#2ed321", strokeWidth: 1 }}
                >
                  <LabelList
                    dataKey="hours"
                    position="top"
                    fill={"#adb8c2"}
                    offset={10}
                    fontFamily="bw_modelicaregular"
                    fontSize={13}
                  />
                </Area>
                <Bar dataKey="hours" fill="#d9e0e8" barSize={1} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="users-dashboard-sections full-screen-wrapper">
          <div className="dashboard-section active-tasks table-section">
            <div className="dashboard-section-title">
              Active<span>Tasks</span>
            </div>
            <div className="data">
              <div className="header">
                <div className="title">task</div>
                <div className="title task-summary">summary</div>
                <div className="title">priority</div>
                <div className="title task-status">status</div>
              </div>
              <Scrollbars className="pulp-scrollbar" style={{ height: 300 }}>
                {active_tasks_data.map((answer, i) => {
                  return (
                    <div className="row">
                      <div className="value">
                        <div className="task-title">
                          <div className="task-id">{answer.id}</div>
                          <div className="task-name">{answer.title}</div>
                        </div>
                      </div>
                      <div className="value task-summary">{answer.summary}</div>
                      <div className="value">
                        <div className={"task-priority " + answer.priority}>
                          {answer.priority}
                        </div>
                      </div>
                      <div className="value task-status">{answer.status}</div>
                    </div>
                  );
                })}
              </Scrollbars>
              <div className="row">
                <div className="value">2/8 task(s) with high risk</div>
              </div>
            </div>
          </div>
          <div className="dashboard-section active-bugs table-section">
            <div className="dashboard-section-title">
              Active<span>Bugs</span>
            </div>
            <div className="data">
              <div className="header">
                <div className="title">bug</div>
                <div className="title bug-assigned">assigned on</div>
                <div className="title">severity</div>
                <div className="title task-status">status</div>
              </div>
              <Scrollbars className="pulp-scrollbar" style={{ height: 300 }}>
                {active_bugs_data.map((answer, i) => {
                  return (
                    <div className="row">
                      <div className="value">
                        <div className="task-title">
                          <div className="task-id">{answer.id}</div>
                          <div className="task-name">{answer.title}</div>
                        </div>
                      </div>
                      <div className="value bug-assigned">
                        {answer.assigned}
                      </div>
                      <div className="value">
                        <div className={"task-priority " + answer.priority}>
                          {answer.priority}
                        </div>
                      </div>
                      <div className="value task-status">{answer.status}</div>
                    </div>
                  );
                })}
              </Scrollbars>
              <div className="row">
                <div className="value">2/8 bug(s) with high risk</div>
              </div>
            </div>
          </div>
        </div>
        <div className="users-dashboard-boards full-screen-wrapper">
          <div className="dashboard-section-title">
            Active<span>Board</span>
          </div>
          <Board columns={board_data.columns} applyMax={false} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default UserDashboard;
