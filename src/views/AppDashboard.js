import React, { Component } from "react";
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
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { Dropdown, Radio, Popup } from "semantic-ui-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { app_dashboard_bugs_data } from "../mockdata/appDashboardBugs";
import { app_dashboard_engineers_data } from "../mockdata/appDashboardEngineers";
import { app_dashboard_factor_data } from "../mockdata/appDashboardFactor";

const effort_teams = [
  { key: 1, text: "Rhino", value: 1 },
  { key: 2, text: "Pony", value: 2 },
  { key: 3, text: "Chipmunk", value: 3 }
];

const workload_data_1 = [
  { name: "Sprint 1", planned: 208, spent: 236 },
  { name: "Sprint 2", planned: 217, spent: 206 },
  { name: "Sprint 3", planned: 221, spent: 209 },
  { name: "Sprint 4", planned: 240, spent: 219 },
  { name: "Sprint 5", planned: 218, spent: 220 }
];

const workload_data_2 = [
  { name: "Sprint 1", planned: 218, spent: 195 },
  { name: "Sprint 2", planned: 238, spent: 216 },
  { name: "Sprint 3", planned: 205, spent: 237 },
  { name: "Sprint 4", planned: 213, spent: 198 },
  { name: "Sprint 5", planned: 235, spent: 216 }
];

const workload_data_3 = [
  { name: "Sprint 1", planned: 211, spent: 203 },
  { name: "Sprint 2", planned: 229, spent: 232 },
  { name: "Sprint 3", planned: 232, spent: 200 },
  { name: "Sprint 4", planned: 210, spent: 233 },
  { name: "Sprint 5", planned: 212, spent: 203 }
];

const backlog_epic_data = [
  { team: "Pony", value: 16 },
  { team: "Tiger", value: 7 },
  { team: "Rhino", value: 3 },
  { team: "Team Ad", value: 10 },
  { team: "Panda", value: 11 },
  { team: "Chipmunk", value: 8 }
];

const backlog_story_data = [
  { team: "Pony", value: 31 },
  { team: "Tiger", value: 10 },
  { team: "Rhino", value: 9 },
  { team: "Team Ad", value: 16 },
  { team: "Panda", value: 20 },
  { team: "Chipmunk", value: 13 }
];

const project_risk_data = [
  { name: "Advertising", type: "Scrum", extremity: "low" },
  { name: "Marketing", type: "Scrum", extremity: "safe" },
  { name: "Online Sales", type: "Kanban", extremity: "medium" },
  { name: "PoS Sales", type: "Waterfall", extremity: "low" },
  { name: "Trade Promotion", type: "Scrum", extremity: "safe" },
  { name: "Merchandise Management", type: "Waterfall", extremity: "safe" },
  { name: "Logistics", type: "Scrum", extremity: "low" },
  { name: "Store Management", type: "Kanban", extremity: "high" }
];

const epic_workflow_data = [
  {
    team: "Team Ad",
    new: "2",
    triage: "",
    clarification: "",
    design: "1",
    progress: "1",
    complete: "",
    testing: "",
    documentation: "",
    closed: ""
  },
  {
    team: "Rhino",
    new: "3",
    triage: "",
    clarification: "",
    design: "",
    progress: "1",
    complete: "",
    testing: "",
    documentation: "",
    closed: ""
  },
  {
    team: "Pony",
    new: "1",
    triage: "",
    clarification: "",
    design: "1",
    progress: "",
    complete: "1",
    testing: "1",
    documentation: "",
    closed: ""
  },
  {
    team: "Chipmunk",
    new: "",
    triage: "",
    clarification: "",
    design: "",
    progress: "1",
    complete: "",
    testing: "",
    documentation: "1",
    closed: ""
  },
  {
    team: "Tiger",
    new: "",
    triage: "",
    clarification: "",
    design: "1",
    progress: "1",
    complete: "",
    testing: "1",
    documentation: "",
    closed: "1"
  },
  {
    team: "Panda",
    new: "",
    triage: "",
    clarification: "1",
    design: "",
    progress: "",
    complete: "1",
    testing: "",
    documentation: "1",
    closed: ""
  },
  {
    team: "Team Ad",
    new: "2",
    triage: "",
    clarification: "",
    design: "1",
    progress: "1",
    complete: "",
    testing: "",
    documentation: "",
    closed: ""
  },
  {
    team: "Rhino",
    new: "3",
    triage: "",
    clarification: "",
    design: "",
    progress: "1",
    complete: "",
    testing: "",
    documentation: "",
    closed: ""
  },
  {
    team: "Pony",
    new: "1",
    triage: "",
    clarification: "",
    design: "1",
    progress: "",
    complete: "1",
    testing: "1",
    documentation: "",
    closed: ""
  },
  {
    team: "Chipmunk",
    new: "",
    triage: "",
    clarification: "",
    design: "",
    progress: "1",
    complete: "",
    testing: "",
    documentation: "1",
    closed: ""
  },
  {
    team: "Tiger",
    new: "",
    triage: "",
    clarification: "",
    design: "1",
    progress: "1",
    complete: "",
    testing: "1",
    documentation: "",
    closed: "1"
  },
  {
    team: "Panda",
    new: "",
    triage: "",
    clarification: "1",
    design: "",
    progress: "",
    complete: "1",
    testing: "",
    documentation: "1",
    closed: ""
  }
];

const project_data = [
  { name: "Kanban", value: 1 },
  { name: "Waterfall", value: 4 },
  { name: "Scrum", value: 3 }
];
const COLORS = ["#d0d6e1", "#bec6d8", "#adb6c8"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
  value
}) => {
  var radius = outerRadius;
  if (midAngle > 0 && midAngle < 90) {
    radius += 15;
  } else if (midAngle >= 90 && midAngle < 180) {
    radius += 15;
  } else {
    radius += 35;
  }
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <React.Fragment>
      <text
        x={x}
        y={y - 25}
        fill="#aab5c1"
        textAnchor={midAngle > 90 && midAngle <= 270 ? "end" : "start"}
        dominantBaseline="central"
        fontFamily="bw_modelicaregular"
      >
        {name} ({value})
      </text>
      <text
        x={x}
        y={y}
        fill="#47586a"
        textAnchor={midAngle > 90 && midAngle <= 270 ? "end" : "start"}
        dominantBaseline="central"
        fontFamily="bw_modelicabold"
        fontSize="1.5em"
      >
        {(percent * 100).toFixed(0)}%
      </text>
    </React.Fragment>
  );
};

class AppDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backlogState: true,
      workloadChart: workload_data_1,
      backlogChart: backlog_epic_data
    };
  }

  toggleBacklogSlider = () => {
    this.setState({
      backlogState: !this.state.backlogState
    });
  };

  setWorkloadData = (event, { value }) => {
    if (1 == value) {
      this.setState({
        workloadChart: workload_data_1
      });
    } else if (2 == value) {
      this.setState({
        workloadChart: workload_data_2
      });
    } else if (3 == value) {
      this.setState({
        workloadChart: workload_data_3
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header selected="appdashboard" />
        <div className="app-dashboard-status full-screen-wrapper">
          <div className="project-name">Things could go bad in 12 days</div>
          <div className="project-condition">
            you've got to be<br />
            <div className="gradient-text status warning">
              cautious<Popup
                trigger={<span className="icon icon-info" />}
                content="Key points on what went wrong is displayed."
                position="right center"
                className="app-popup"
                basic
              />
            </div>
          </div>
        </div>
        <div className="app-dashboard-factor full-screen-wrapper">
          <div className="factor-container">
            <div className="factor-current">
              <div className="factor">
                <div className="value">9.5</div>
                <div className="title">pulp factor</div>
              </div>
              <div className="detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eu pulvinar risus. Vestibulum a velit non urna molestie
                ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Praesent et hendrerit nunc. Sed dolor tellus, facilisis
                nec orci fringilla, lacinia dapibus lorem. Vestibulum sit amet
                dignissim lacus.
              </div>
            </div>
            <div className="factor-graph">
              <LineChart
                width={300}
                height={50}
                data={app_dashboard_factor_data}
              >
                <defs>
                  <linearGradient id="bugLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="20%" stopColor="#E94057" stopOpacity={1} />
                    <stop offset="95%" stopColor="#F27121" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <YAxis type="number" domain={[8.0, 9.7]} hide={true} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="factor"
                  stroke="url(#bugLine)"
                  strokeWidth={1.5}
                />
              </LineChart>
            </div>
            <div className="factor-history">
              <div className="factor">
                <div className="value">8.8</div>
                <div className="title">20 OCT, 2018</div>
              </div>
              <div className="factor-seperator" />
              <div className="factor">
                <div className="value">8.6</div>
                <div className="title">10 NOV, 2018</div>
              </div>
              <div className="factor-seperator" />
              <div className="factor">
                <div className="value">8.9</div>
                <div className="title">20 NOV, 2018</div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-dashboard-sections full-screen-wrapper">
          <div className="dashboard-section project-risks table-section">
            <div className="dashboard-section-title">
              Project<span>Risk Status</span>
            </div>
            <div className="data">
              <div className="header">
                <div className="title">project</div>
                <div className="title">type</div>
                <div className="title">extremity</div>
              </div>
              <Scrollbars className="pulp-scrollbar" style={{ height: 200 }}>
                {project_risk_data.map((answer, i) => {
                  return (
                    <div className="row">
                      <div className="value">
                        <Link to="projectDashboard">{answer.name}</Link>
                      </div>
                      <div className="value type">{answer.type}</div>
                      <div className="value extremity">
                        {"safe" != answer.extremity ? (
                          <Popup
                            trigger={
                              <span
                                className={"data-extremity " + answer.extremity}
                              >
                                {answer.extremity}
                              </span>
                            }
                            content="Reason for risk is displayed. Hiccups/blocked task along with an estimate on when it is expected to be solved is shown."
                            position="right center"
                            className="app-popup"
                            basic
                          />
                        ) : (
                          <span
                            className={"data-extremity " + answer.extremity}
                          >
                            {answer.extremity}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </Scrollbars>
              <div className="row result">
                <div className="value">2/8 project(s) with high risk</div>
                <div className="value" />
                <div className="value" />
              </div>
            </div>
          </div>
          <div className="dashboard-section active-projects">
            <ResponsiveContainer width="100%">
              <PieChart>
                <text
                  x="50%"
                  y="53%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={"#47586a"}
                  fontFamily="bw_modelicabold"
                  fontSize="4em"
                >
                  8
                </text>
                <Pie
                  data={project_data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  innerRadius={50}
                  fill="#47586a"
                  paddingAngle={3}
                >
                  {project_data.map((entry, index) => (
                    <Cell fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="dashboard-section active-engineers">
            <div className="dashboard-section-title">
              Active<span>Engineers</span>
            </div>
            <div className="active-engineers-data">
              <div className="engineer-count">
                205<span> / 225</span>
              </div>
              <div className="active-percentage">
                91<span> %</span>
              </div>
            </div>
            <div className="active-engineers-graph">
              <ResponsiveContainer width="100%">
                <LineChart data={app_dashboard_engineers_data}>
                  <defs>
                    <linearGradient
                      id="engineersline"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="20%" stopColor="#2ed321" stopOpacity={1} />
                      <stop offset="95%" stopColor="#94e30b" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <YAxis type="number" domain={[180, 225]} hide={true} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="active"
                    stroke="url(#engineersline)"
                    strokeWidth={1.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="app-dashboard-bugs full-screen-wrapper">
          <div className="dashboard-section-title">
            Active<span>Bugs</span>
          </div>
          <div className="app-dashboard-bugs-chart-container">
            <div className="app-dashboard-bugs-chart-background">
              <div className="app-dashboard-bug-data">
                <div className="bug-total">
                  <div className="bug-item">
                    <div className="value">231</div>
                    <div className="title">Bugs</div>
                  </div>
                </div>
                <div className="bug-severity">
                  <div className="title">by severity</div>
                  <div className="data">
                    <div className="bug-item">
                      <div className="value">130</div>
                      <div className="title">High</div>
                    </div>
                    <div className="bug-item">
                      <div className="value">051</div>
                      <div className="title">Medium</div>
                    </div>
                    <div className="bug-item">
                      <div className="value">050</div>
                      <div className="title">Low</div>
                    </div>
                  </div>
                </div>
                <div className="bug-age">
                  <div className="title">by age</div>
                  <div className="data">
                    <div className="bug-item">
                      <div className="value">034</div>
                      <div className="title">{"<"} 5 days</div>
                    </div>
                    <div className="bug-item">
                      <div className="value">030</div>
                      <div className="title">5 to 10 days</div>
                    </div>
                    <div className="bug-item">
                      <div className="value">051</div>
                      <div className="title">10 to 20 days</div>
                    </div>
                    <div className="bug-item">
                      <div className="value">050</div>
                      <div className="title">{">"} 20 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-dashboard-bugs-chart-foreground">
              <ResponsiveContainer width="100%" height="40%">
                <AreaChart
                  data={app_dashboard_bugs_data}
                  margin={{ right: 0, left: 0 }}
                >
                  <defs>
                    <linearGradient id="bugsline" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="20%" stopColor="#c2cadb" stopOpacity={1} />
                      <stop offset="95%" stopColor="#d8deea" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <YAxis type="number" domain={[200, 450]} hide={true} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stroke="url(#bugsline)"
                    strokeWidth={1.5}
                    fillOpacity="1"
                    fill="#F9FAFC"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="app-dashboard-workflow full-screen-wrapper table-section">
          <div className="dashboard-section-title">
            Epic<span>Workflow</span>
          </div>
          <div className="data">
            <div className="header">
              <div className="title" />
              <div className="title">new</div>
              <div className="title">triage</div>
              <div className="title">need clarification</div>
              <div className="title">design</div>
              <div className="title">in progress</div>
              <div className="title">dev complete</div>
              <div className="title">system testing</div>
              <div className="title">documentation</div>
              <div className="title">closed</div>
            </div>
            <Scrollbars className="pulp-scrollbar" style={{ height: 300 }}>
              {epic_workflow_data.map((answer, i) => {
                return (
                  <div className="row">
                    <div className="value">{answer.team}</div>
                    <div className="value">
                      {answer.new != "" ? (
                        <div className="highlight-green">{answer.new}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="value">
                      {answer.triage != "" ? <div>{answer.triage}</div> : ""}
                    </div>
                    <div className="value">
                      {answer.clarification != "" ? (
                        <div className="highlight-warning">
                          {answer.clarification}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="value">
                      {answer.design != "" ? <div>{answer.design}</div> : ""}
                    </div>
                    <div className="value">
                      {answer.progress != "" ? (
                        <div>{answer.progress}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="value">
                      {answer.complete != "" ? (
                        <div>{answer.complete}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="value">
                      {answer.testing != "" ? <div>{answer.testing}</div> : ""}
                    </div>
                    <div className="value">
                      {answer.documentation != "" ? (
                        <div>{answer.documentation}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="value">
                      {answer.closed != "" ? (
                        <div className="highlight-green">{answer.closed}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}
            </Scrollbars>
            <div className="row result">
              <div className="value">12 teams</div>
              <div className="value">
                <div className="highlight-green">12</div>
              </div>
              <div className="value" />
              <div className="value">
                <div className="highlight-warning">2</div>
              </div>
              <div className="value">
                <div>4</div>
              </div>
              <div className="value">
                <div>6</div>
              </div>
              <div className="value">
                <div>2</div>
              </div>
              <div className="value">
                <div>2</div>
              </div>
              <div className="value">
                <div>2</div>
              </div>
              <div className="value">
                <div className="highlight-green">2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-dashboard-sections full-screen-wrapper">
          <div className="dashboard-section effort-section">
            <div className="title-and-choice">
              <div className="dashboard-section-title">
                Effort<span>Breakdown</span>
              </div>
              <div className="choice-box select">
                <Dropdown
                  options={effort_teams}
                  defaultValue={effort_teams[0].value}
                  inline
                  icon=""
                  onChange={this.setWorkloadData}
                />
              </div>
            </div>
            <div className="charts-section">
              <ResponsiveContainer width="100%">
                <BarChart
                  data={this.state.workloadChart}
                  barGap={0}
                  margin={{ right: -20, left: -20 }}
                >
                  <XAxis dataKey="name" stroke="#b8c5d4" />
                  <YAxis type="number" domain={[0, 300]} hide={true} />
                  <Tooltip cursor={false} />
                  <Bar dataKey="planned" fill="#d9e0e8">
                    <LabelList
                      dataKey="planned"
                      position="top"
                      fill={"#adb8c2"}
                      fontFamily="bw_modelicabold"
                    />
                  </Bar>
                  <Bar dataKey="spent" fill="#b8c5d4">
                    <LabelList
                      dataKey="spent"
                      position="top"
                      fill={"#adb8c2"}
                      fontFamily="bw_modelicabold"
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="dashboard-section effort-section">
            <div className="title-and-choice">
              <div className="dashboard-section-title">
                Work<span>Backlog</span>
              </div>
              <div className="choice-box epic-story-toggle">
                <Radio
                  slider
                  label={this.state.backlogState ? "EPICS" : "STORIES"}
                  checked={this.state.backlogState}
                  onClick={this.toggleBacklogSlider}
                />
              </div>
            </div>
            <div className="charts-section">
              <ResponsiveContainer width="100%">
                <BarChart
                  data={
                    this.state.backlogState
                      ? backlog_epic_data
                      : backlog_story_data
                  }
                  barGap={0}
                  margin={{ right: -20, left: -20 }}
                >
                  <XAxis dataKey="team" stroke="#b8c5d4" />
                  <YAxis type="number" domain={[0, 40]} hide={true} />
                  <Tooltip cursor={false} />
                  <Bar dataKey="value" fill="#d9e0e8">
                    <LabelList
                      dataKey="value"
                      position="top"
                      fill={"#adb8c2"}
                      fontFamily="bw_modelicabold"
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AppDashboard;
