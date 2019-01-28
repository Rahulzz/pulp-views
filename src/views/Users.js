import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from "match-sorter";
import { Radio, Popup } from "semantic-ui-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Users extends Component {
  renderUserCount(initials, names, colors, count) {
    initials = initials.split(",");
    names = names.split(",");
    colors = colors.split(",");

    return (
      <div className="user-count">
        <div className="avatar">
          {initials.map((answer, i) => {
            console.log("answer : " + answer);
            console.log("i : " + i);
            return (
              <Popup
                trigger={
                  <div className="item" style={{ background: colors[i] }}>
                    {answer}
                  </div>
                }
                content={names[i]}
                position="top center"
                className="app-popup"
                basic
              />
            );
          })}
        </div>
        <div>{count} users</div>
      </div>
    );
  }

  render() {
    const users_data = [
      {
        name: "Europe Thinline developers",
        created: "25 Jan, 2018",
        modified: "13:40, 25 Jan, 2018",
        initials: "AS,DB,EC,TC",
        names: "Alfreda Sherville,Dag Bonner,Eleanora Chidley,Terrijo Coomber",
        colors: "#B5B546,#5F813F,#2F4D48,#212B2F",
        users: "23",
        disabled: false
      },
      {
        name: "Europe Thinline testers",
        created: "25 Jan, 2018",
        modified: "13:40, 25 Jan, 2018",
        initials: "PL,MW,WG,TH",
        names:
          "Peadar Lukehurst,Marlow Wastling,Windham Girardot,Tomlin Haslen",
        colors: "#F9CA06,#B5B546,#5F813F,#2F4D48",
        users: "10",
        disabled: false
      },
      {
        name: "Sonair developers",
        created: "25 Jan, 2018",
        modified: "13:40, 25 Jan, 2018",
        initials: "AD,TC,HG,KO",
        names: "Audrye Dudney,Tannie Cullinan,Haily Garvin,Kacy Oxbe",
        colors: "#B5B546,#5F813F,#2F4D48,#212B2F",
        users: "23",
        disabled: true
      },
      {
        name: "Sonair testers",
        created: "25 Jan, 2018",
        modified: "13:40, 25 Jan, 2018",
        initials: "EN,AT,MI,BL",
        names:
          "Ethelda Nicolls,Aleen Thoumas,Myranda Ickeringill,Bernardina Longhi",
        colors: "#F9CA06,#B5B546,#5F813F,#2F4D48",
        users: "23",
        disabled: false
      },
      {
        name: "Hatity developers",
        created: "25 Jan, 2018",
        modified: "13:40, 25 Jan, 2018",
        initials: "CA,DD,JF,RS",
        names: "Carolan Ankers,Darrin Dello,Joshia Furber,Rebeca Schwander",
        colors: "#B5B546,#5F813F,#2F4D48,#212B2F",
        users: "23",
        disabled: false
      },
      {
        name: "Hatity testers",
        created: "25 Jan, 2018",
        modified: "13:40, 25 Jan, 2018",
        initials: "EB,KD,SG,TE",
        names: "Ed Bilsborrow,Kally Donoher,Sybille Guisby,Truda Elsay",
        colors: "#F9CA06,#B5B546,#5F813F,#2F4D48",
        users: "10",
        disabled: true
      },
      {
        name: "Voyatouch developers",
        created: "25 Jan, 2018",
        modified: "13:40, 25 Jan, 2018",
        initials: "FJ,TL,MH,UP",
        names: "Frank Janaud,Thain Lefwich,Marius Haughton,Ugo Proppers",
        colors: "#B5B546,#5F813F,#2F4D48,#212B2F",
        users: "23",
        disabled: true
      },
      {
        name: "Voyatouch testers",
        created: "25 Jan, 2018",
        modified: "13:40, 25 Jan, 2018",
        initials: "BG,BC,SG,EH",
        names: "Broderick Giacaponi,Bridie Cayette,Stacee Gores,Elisha Hele",
        colors: "#F9CA06,#B5B546,#5F813F,#2F4D48",
        users: "23",
        disabled: false
      }
    ];

    const columns = [
      {
        Header: "Group Name",
        accessor: "name",
        Cell: props => (
          <div className="pulp-data-item pulp-data-table-column-left">
            <div className="group-name">
              <div className="name">{props.value}</div>
              <div className="date">created on {props.original.created}</div>
            </div>
          </div>
        ),
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["name"] }),
        filterAll: true,
        Filter: ({ filter, onChange }) => (
          <input
            type="text"
            placeholder="Search by Group Name"
            value={filter ? filter.value : ""}
            onChange={event => onChange(event.target.value)}
          />
        )
      },
      {
        Header: "Last modified",
        width: 250,
        accessor: "modified",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["modified"] }),
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
        Header: "Users",
        width: 250,
        accessor: "users",
        Cell: props => (
          <div className="pulp-data-item pulp-data-table-column-left">
            {this.renderUserCount(
              props.original.initials,
              props.original.names,
              props.original.colors,
              props.value
            )}
          </div>
        ),
        filterable: false,
        sortable: false
      }
    ];

    return (
      <React.Fragment>
        <Header selected="users" />
        <div className="page-header full-screen-wrapper">
          <div className="title">
            <div className="name">Users</div>
          </div>
          <div className="options">
            <button className="active-button to-left">
              CHECK USER DETAILS
            </button>
            <button className="active-button to-left">
              CREATE A USER GROUP
            </button>
          </div>
        </div>
        <div className="users-data-table pulp-data-table full-screen-wrapper">
          <ReactTable
            data={users_data}
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

export default Users;
