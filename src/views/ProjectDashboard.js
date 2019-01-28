import React, { Component } from "react";
import Col from "react-bootstrap";
import {
  LineChart,
  BarChart,
  LabelList,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  ResponsiveContainer
} from "recharts";
import { Tab, Popup, Dropdown } from "semantic-ui-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Scrollbars } from "react-custom-scrollbars";
import { project_dashboard_spillover_data } from "../mockdata/projectDashboardSpillOver";

const phase_trend_list = [
  {
    text: "Average team velocity",
    value: 0
  },
  {
    text: "Velocity variance",
    value: 1
  },
  {
    text: "Sprint stretch factor",
    value: 2
  },
  {
    text: "Defects trend",
    value: 3
  }
];

const workload_data = [
  { name: "Mahesh Rudraiah", Spent: 2, Assigned: 20, Pending: 18 },
  { name: "Beatrice Priyadarshini", Spent: 12, Assigned: 32, Pending: 30 },
  { name: "Shanmuganathan Vijayaraman", Spent: 6, Assigned: 12, Pending: 6 },
  { name: "Gautham Kumar Rajendran", Spent: 22, Assigned: 54, Pending: 32 },
  { name: "Walter White", Spent: 8, Assigned: 14, Pending: 6 },
  { name: "Mike Ehrmantraut", Spent: 10, Assigned: 20, Pending: 10 },
  { name: "Jessie Pinkman", Spent: 21, Assigned: 41, Pending: 20 }
];

const workload_date_data = [
  { name: "6/2/2018", Spent: 2, Assigned: 20 },
  { name: "7/2/2018", Spent: 12, Assigned: 32 },
  { name: "8/2/2018", Spent: 6, Assigned: 12 },
  { name: "9/2/2018", Spent: 22, Assigned: 54 },
  { name: "10/2/2018", Spent: 8, Assigned: 14 },
  { name: "11/2/2018", Spent: 10, Assigned: 20 },
  { name: "12/2/2018", Spent: 21, Assigned: 41 }
];

const open_bugs_data = [
  { name: "Page A", Total: 10 },
  { name: "Page B", Total: 120 },
  { name: "Page C", Total: 20 },
  { name: "Page D", Total: 200 },
  { name: "Page E", Total: 50 },
  { name: "Page F", Total: 20 },
  { name: "Page G", Total: 88 }
];

const sprint_key_list = [
  {
    text: "Sprint 12",
    value: 165
  },
  {
    text: "Sprint 13",
    value: 150
  },
  {
    text: "Sprint 14",
    value: 196
  },
  {
    text: "Sprint 15",
    value: 194
  },
  {
    text: "Sprint 16",
    value: 149
  }
];

const user_details_key_list = [
  {
    text: "Mahesh Rudraiah",
    value: 165
  },
  {
    text: "Beatrice Priyadarshini",
    value: 150
  },
  {
    text: "Shanmuganathan Vijayaraman",
    value: 196
  },
  {
    text: "Gautham Kumar Rajendran",
    value: 194
  },
  {
    text: "Jessie Pinkman",
    value: 149
  }
];

const user_details_data = [
  {
    id: 165,
    name: "Amberly De Cleen",
    completedtasks: "06",
    closedbugs: 30,
    review: 10,
    effort: [{ value: 30 }, { value: 48 }, { value: 20 }],
    pending: [{ value: 29 }, { value: 16 }, { value: "08" }],
    average: 30,
    max: 48,
    min: 20,
    tostart: 29,
    inprogress: 16,
    pendingbugs: "08",
    history: [
      { name: "Oct 8 - 14", value: 37 },
      { name: "Oct 1 - 7", value: 36 },
      { name: "Sep 24 - 30", value: 31 },
      { name: "Sep 17 - 23", value: 42 },
      { name: "Sep 10 - 16", value: 46 },
      { name: "Sep 3 - 9", value: 48 },
      { name: "This week", value: 37 }
    ],
    concerns: [
      {
        title: "Task Update",
        description:
          "Doesn’t update tasks on time inspite of repetitive reminders"
      },
      {
        title: "Blocked Tasks",
        description: "Keeps tasks in bocked status for long."
      },
      {
        title:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        description:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
      },
      {
        title:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        description: "In congue. Etiam justo. Etiam pretium iaculis justo."
      },
      {
        title:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        description: "Sed ante. Vivamus tortor. Duis mattis egestas metus."
      },
      {
        title:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        description: "Sed ante. Vivamus tortor. Duis mattis egestas metus."
      },
      {
        title:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        description:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
      },
      {
        title:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        description:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
      },
      {
        title:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        description:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
      },
      {
        title:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        description:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
      }
    ]
  },
  {
    id: 150,
    name: "Chick Horburgh",
    completedtasks: 25,
    closedbugs: 11,
    review: "03",
    effort: [{ value: 45 }, { value: 38 }, { value: 42 }],
    pending: [{ value: 24 }, { value: 50 }, { value: 42 }],
    average: 45,
    max: 38,
    min: 42,
    tostart: 24,
    inprogress: 50,
    pendingbugs: 42,
    history: [
      { name: "Oct 8 - 14", value: 59 },
      { name: "Oct 1 - 7", value: 52 },
      { name: "Sep 24 - 30", value: 44 },
      { name: "Sep 17 - 23", value: 55 },
      { name: "Sep 10 - 16", value: 49 },
      { name: "Sep 3 - 9", value: 35 },
      { name: "This week", value: 32 }
    ],
    concerns: [
      {
        title:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
        description:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
      },
      {
        title: "Task Update",
        description:
          "Doesn’t update tasks on time inspite of repetitive reminders"
      },
      {
        title: "Blocked Tasks",
        description: "Keeps tasks in bocked status for long."
      },
      {
        title:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        description:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
      },
      {
        title:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        description:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
      },
      {
        title:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        description:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
      },
      {
        title:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        description:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
      }
    ]
  },
  {
    id: 196,
    name: "Mickie Allix",
    completedtasks: 25,
    closedbugs: 25,
    review: 17,
    effort: [{ value: 11 }, { value: "09" }, { value: "03" }],
    pending: [{ value: "07" }, { value: 50 }, { value: 40 }],
    average: 11,
    max: "09",
    min: "03",
    tostart: "07",
    inprogress: 50,
    pendingbugs: 40,
    history: [
      { name: "Oct 8 - 14", value: 45 },
      { name: "Oct 1 - 7", value: 32 },
      { name: "Sep 24 - 30", value: 31 },
      { name: "Sep 17 - 23", value: 31 },
      { name: "Sep 10 - 16", value: 43 },
      { name: "Sep 3 - 9", value: 58 },
      { name: "This week", value: 45 }
    ],
    concerns: [
      {
        title:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        description:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
      },
      {
        title: "Task Update",
        description:
          "Doesn’t update tasks on time inspite of repetitive reminders"
      },
      {
        title: "Blocked Tasks",
        description: "Keeps tasks in bocked status for long."
      }
    ]
  },
  {
    id: 194,
    name: "Ailsun McRonald",
    completedtasks: 26,
    closedbugs: "03",
    review: 13,
    effort: [{ value: 11 }, { value: 19 }, { value: 38 }],
    pending: [{ value: 37 }, { value: 44 }, { value: 25 }],
    average: 11,
    max: 19,
    min: 38,
    tostart: 37,
    inprogress: 44,
    pendingbugs: 25,
    history: [
      { name: "Oct 8 - 14", value: 53 },
      { name: "Oct 1 - 7", value: 56 },
      { name: "Sep 24 - 30", value: 43 },
      { name: "Sep 17 - 23", value: 58 },
      { name: "Sep 10 - 16", value: 49 },
      { name: "Sep 3 - 9", value: 38 },
      { name: "This week", value: 37 }
    ],
    concerns: [
      {
        title:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        description:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
      },
      {
        title:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        description:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
      },
      {
        title:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        description:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
      },
      {
        title:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        description: "Sed ante. Vivamus tortor. Duis mattis egestas metus."
      },
      {
        title:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        description: "Sed ante. Vivamus tortor. Duis mattis egestas metus."
      },
      {
        title:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        description:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
      }
    ]
  },
  {
    id: 149,
    name: "Abbe Alessandone",
    completedtasks: 25,
    closedbugs: 11,
    review: 27,
    effort: [{ value: "06" }, { value: "07" }, { value: 27 }],
    pending: [{ value: 15 }, { value: 12 }, { value: 16 }],
    average: "06",
    max: "07",
    min: 27,
    tostart: 15,
    inprogress: 12,
    pendingbugs: 16,
    history: [
      { name: "Oct 8 - 14", value: 30 },
      { name: "Oct 1 - 7", value: 38 },
      { name: "Sep 24 - 30", value: 56 },
      { name: "Sep 17 - 23", value: 51 },
      { name: "Sep 10 - 16", value: 51 },
      { name: "Sep 3 - 9", value: 59 },
      { name: "This week", value: 35 }
    ],
    concerns: [
      {
        title:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
        description:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
      },
      {
        title:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        description:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
      },
      {
        title:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        description:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
      },
      {
        title:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        description:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
      }
    ]
  }
];

const stories_work_flow_data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

const defects_trend_data = [
  { date: "2018-08-01", month: "August", active: 4, open: 16, closed: 12 },
  { date: "2018-08-02", month: "August", active: 6, open: 11, closed: 9 },
  { date: "2018-08-03", month: "August", active: 8, open: 9, closed: 7 },
  { date: "2018-08-04", month: "August", active: 9, open: 15, closed: 14 },
  { date: "2018-08-05", month: "August", active: 11, open: 13, closed: 11 },
  { date: "2018-08-06", month: "August", active: 10, open: 2, closed: 3 },
  { date: "2018-08-07", month: "August", active: 9, open: 0, closed: 1 },
  { date: "2018-08-08", month: "August", active: 15, open: 23, closed: 17 },
  { date: "2018-08-09", month: "August", active: 23, open: 22, closed: 14 },
  { date: "2018-08-10", month: "August", active: 20, open: 7, closed: 10 },
  { date: "2018-08-11", month: "August", active: 24, open: 12, closed: 8 },
  { date: "2018-08-12", month: "August", active: 32, open: 29, closed: 21 },
  { date: "2018-08-13", month: "August", active: 34, open: 7, closed: 5 },
  { date: "2018-08-14", month: "August", active: 33, open: 2, closed: 3 },
  { date: "2018-08-15", month: "August", active: 35, open: 9, closed: 7 },
  { date: "2018-08-16", month: "August", active: 38, open: 16, closed: 13 },
  { date: "2018-08-17", month: "August", active: 37, open: 5, closed: 6 },
  { date: "2018-08-18", month: "August", active: 39, open: 22, closed: 20 },
  { date: "2018-08-19", month: "August", active: 41, open: 12, closed: 10 },
  { date: "2018-08-20", month: "August", active: 43, open: 10, closed: 8 },
  { date: "2018-08-21", month: "August", active: 46, open: 27, closed: 24 },
  { date: "2018-08-22", month: "August", active: 48, open: 19, closed: 17 },
  { date: "2018-08-23", month: "August", active: 53, open: 23, closed: 18 },
  { date: "2018-08-24", month: "August", active: 51, open: 1, closed: 3 },
  { date: "2018-08-25", month: "August", active: 50, open: 4, closed: 5 },
  { date: "2018-08-26", month: "August", active: 53, open: 15, closed: 12 },
  { date: "2018-08-27", month: "August", active: 51, open: 1, closed: 3 },
  { date: "2018-08-28", month: "August", active: 56, open: 25, closed: 20 },
  { date: "2018-08-29", month: "August", active: 58, open: 10, closed: 8 },
  { date: "2018-08-30", month: "August", active: 63, open: 12, closed: 7 },
  { date: "2018-08-31", month: "August", active: 60, open: 10, closed: 10 },
  { date: "2018-09-01", month: "September", active: 66, open: 23, closed: 20 },
  { date: "2018-09-02", month: "September", active: 65, open: 6, closed: 7 },
  { date: "2018-09-03", month: "September", active: 63, open: 1, closed: 3 },
  { date: "2018-09-04", month: "September", active: 65, open: 8, closed: 6 },
  { date: "2018-09-05", month: "September", active: 67, open: 16, closed: 14 },
  { date: "2018-09-06", month: "September", active: 73, open: 26, closed: 20 },
  { date: "2018-09-07", month: "September", active: 77, open: 22, closed: 18 },
  { date: "2018-09-08", month: "September", active: 81, open: 22, closed: 18 },
  { date: "2018-09-09", month: "September", active: 83, open: 7, closed: 5 },
  { date: "2018-09-10", month: "September", active: 85, open: 16, closed: 14 },
  { date: "2018-09-11", month: "September", active: 87, open: 12, closed: 10 },
  { date: "2018-09-12", month: "September", active: 83, open: 0, closed: 4 },
  { date: "2018-09-13", month: "September", active: 87, open: 16, closed: 12 },
  { date: "2018-09-14", month: "September", active: 90, open: 19, closed: 16 },
  { date: "2018-09-15", month: "September", active: 92, open: 9, closed: 7 },
  { date: "2018-09-16", month: "September", active: 94, open: 10, closed: 8 },
  { date: "2018-09-17", month: "September", active: 96, open: 12, closed: 10 },
  { date: "2018-09-18", month: "September", active: 98, open: 11, closed: 9 },
  { date: "2018-09-19", month: "September", active: 102, open: 11, closed: 7 },
  { date: "2018-09-20", month: "September", active: 104, open: 9, closed: 7 },
  { date: "2018-09-21", month: "September", active: 111, open: 22, closed: 15 },
  { date: "2018-09-22", month: "September", active: 121, open: 25, closed: 15 },
  { date: "2018-09-23", month: "September", active: 128, open: 29, closed: 22 },
  { date: "2018-09-24", month: "September", active: 127, open: 11, closed: 12 },
  { date: "2018-09-25", month: "September", active: 130, open: 23, closed: 20 },
  { date: "2018-09-26", month: "September", active: 128, open: 7, closed: 9 },
  { date: "2018-09-27", month: "September", active: 126, open: 3, closed: 5 },
  { date: "2018-09-28", month: "September", active: 127, open: 8, closed: 7 },
  { date: "2018-09-29", month: "September", active: 129, open: 8, closed: 6 },
  { date: "2018-09-30", month: "September", active: 131, open: 20, closed: 18 },
  { date: "2018-10-01", month: "October", active: 129, open: 16, closed: 18 },
  { date: "2018-10-02", month: "October", active: 125, open: 2, closed: 6 },
  { date: "2018-10-03", month: "October", active: 122, open: 0, closed: 3 },
  { date: "2018-10-04", month: "October", active: 123, open: 3, closed: 2 },
  { date: "2018-10-05", month: "October", active: 125, open: 5, closed: 3 },
  { date: "2018-10-06", month: "October", active: 127, open: 3, closed: 1 },
  { date: "2018-10-07", month: "October", active: 128, open: 15, closed: 14 },
  { date: "2018-10-08", month: "October", active: 131, open: 6, closed: 3 },
  { date: "2018-10-09", month: "October", active: 135, open: 12, closed: 8 },
  { date: "2018-10-10", month: "October", active: 136, open: 1, closed: 0 },
  { date: "2018-10-11", month: "October", active: 137, open: 10, closed: 9 },
  { date: "2018-10-12", month: "October", active: 141, open: 14, closed: 10 },
  { date: "2018-10-13", month: "October", active: 143, open: 10, closed: 8 },
  { date: "2018-10-14", month: "October", active: 145, open: 17, closed: 15 },
  { date: "2018-10-15", month: "October", active: 146, open: 13, closed: 12 }
];

const velocity_variance_data = [
  { sprint: "Sprint 1", vv: 17 },
  { sprint: "Sprint 2", vv: 10 },
  { sprint: "Sprint 3", vv: 2 },
  { sprint: "Sprint 4", vv: 20 },
  { sprint: "Sprint 5", vv: 20 },
  { sprint: "Sprint 6", vv: 14 },
  { sprint: "Sprint 7", vv: 15 }
];

const stretch_factor_data = [
  { sprint: "Sprint 1", ssf: 16 },
  { sprint: "Sprint 2", ssf: 11 },
  { sprint: "Sprint 3", ssf: 7 },
  { sprint: "Sprint 4", ssf: 19 },
  { sprint: "Sprint 5", ssf: 10 },
  { sprint: "Sprint 6", ssf: 13 },
  { sprint: "Sprint 7", ssf: 13 }
];

const average_team_velocity_data = [
  { sprint: "Sprint 1", planned: 20, complete: 19, average: 19, sma: 0 },
  { sprint: "Sprint 2", planned: 20, complete: 18, average: 18.5, sma: 0 },
  { sprint: "Sprint 3", planned: 20, complete: 16, average: 17.67, sma: 17.67 },
  { sprint: "Sprint 4", planned: 18, complete: 16, average: 17.25, sma: 16.67 },
  { sprint: "Sprint 5", planned: 18, complete: 18, average: 17.4, sma: 16.67 },
  { sprint: "Sprint 6", planned: 20, complete: 17, average: 17.33, sma: 17 },
  { sprint: "Sprint 7", planned: 22, complete: 17, average: 17.29, sma: 17.33 },
  { sprint: "Sprint 8", planned: 20, complete: 15, average: 17, sma: 16.33 }
];

const trends_panes = [
  {
    menuItem: "Average team velocity",
    render: () => (
      <Tab.Pane attached={false}>
        <ResponsiveContainer width="100%">
          <ComposedChart
            data={average_team_velocity_data}
            barGap={0}
            margin={{ right: -10, left: -10 }}
          >
            <defs>
              <linearGradient
                id="averageteamvelocityaverageline"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="20%" stopColor="#81d810" stopOpacity={1} />
                <stop offset="95%" stopColor="#03c076" stopOpacity={1} />
              </linearGradient>
              <linearGradient
                id="averageteamvelocitymovingaverageline"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="20%" stopColor="#f12711" stopOpacity={1} />
                <stop offset="95%" stopColor="#f5af19" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="sprint" stroke="#a5a9b2" />
            <YAxis type="number" domain={[0, 25]} hide={true} tickCount={5} />
            <Tooltip cursor={false} />
            <Legend />
            <Bar dataKey="planned" fill="#e2e7ee">
              <LabelList
                dataKey="planned"
                position="top"
                fill={"#adb8c2"}
                offset={10}
                fontFamily="bw_modelicaregular"
                fontSize={15}
              />
            </Bar>
            <Bar dataKey="complete" fill="#a2b0c0">
              <LabelList
                dataKey="complete"
                position="top"
                fill={"#adb8c2"}
                offset={10}
                fontFamily="bw_modelicaregular"
                fontSize={15}
              />
            </Bar>
            <Line
              type="monotone"
              dataKey="average"
              stroke="url(#averageteamvelocityaverageline)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="sma"
              name="simple moving average"
              stroke="url(#averageteamvelocitymovingaverageline)"
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Defects trend",
    render: () => (
      <Tab.Pane attached={false}>
        <ResponsiveContainer width="100%">
          <LineChart data={defects_trend_data}>
            <defs>
              <linearGradient
                id="defecttrendactiveline"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="20%" stopColor="#81d810" stopOpacity={1} />
                <stop offset="95%" stopColor="#03c076" stopOpacity={1} />
              </linearGradient>
              <linearGradient
                id="defecttrendopenline"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="20%" stopColor="#7871FF" stopOpacity={1} />
                <stop offset="95%" stopColor="#75D7FF" stopOpacity={1} />
              </linearGradient>
              <linearGradient
                id="defecttrendclosedline"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="20%" stopColor="#f12711" stopOpacity={1} />
                <stop offset="95%" stopColor="#f5af19" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="#a5a9b2" />
            <YAxis hide={true} tickCount={5} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="active"
              stroke="url(#defecttrendactiveline)"
              strokeWidth={2}
              activeDot={{ r: 8 }}
              dot={false}
            />
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="open"
              stroke="url(#defecttrendopenline)"
              dot={false}
            />
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="closed"
              stroke="url(#defecttrendclosedline)"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Velocity variance",
    render: () => (
      <Tab.Pane attached={false}>
        <ResponsiveContainer width="100%">
          <BarChart
            data={velocity_variance_data}
            margin={{ right: -10, left: -10 }}
          >
            <XAxis dataKey="sprint" stroke="#a5a9b2" />
            <YAxis type="number" domain={[0, 25]} hide={true} tickCount={5} />
            <Tooltip cursor={false} />
            <Legend />
            <Bar dataKey="vv" fill="#B8C5D4" name="velocity variance">
              <LabelList
                dataKey="vv"
                position="top"
                fill={"#adb8c2"}
                offset={10}
                fontFamily="bw_modelicaregular"
                fontSize={15}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Sprint stretch factor",
    render: () => (
      <Tab.Pane attached={false}>
        <ResponsiveContainer width="100%">
          <BarChart
            data={stretch_factor_data}
            margin={{ right: -10, left: -10 }}
          >
            <XAxis dataKey="sprint" stroke="#a5a9b2" />
            <YAxis type="number" domain={[0, 25]} hide={true} tickCount={5} />
            <Tooltip cursor={false} />
            <Legend />
            <Bar dataKey="ssf" fill="#B8C5D4" name="sprint stretch factor">
              <LabelList
                dataKey="ssf"
                position="top"
                fill={"#adb8c2"}
                offset={10}
                fontFamily="bw_modelicaregular"
                fontSize={15}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Tab.Pane>
    )
  }
];

class ProjectDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: user_details_data[0],
      activeIndex: 0
    };
  }

  handleTrendChange = (event, { value }) =>
    this.setState({ activeIndex: value });
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

  switchUserDetails = (event, { value }) => {
    user_details_data.map((answer, i) => {
      if (value == answer.id) {
        this.setState({
          userData: answer
        });
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header type="project" selected="projectdashboard" />
        <div className="project-dashboard-banner full-screen-wrapper">
          <div className="status-section">
            <div className="project-name">Europe Thinline</div>
            <div className="project-condition status">
              things are looking<br />
              all{" "}
              <div className="gradient-text">
                good
                <Popup
                  trigger={<span className="icon icon-info" />}
                  content="Key points on vital stats."
                  position="right center"
                  className="app-popup"
                  basic
                />
              </div>
            </div>
            <div className="project-pulp-factor">
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
          </div>
          <div className="points-section">
            <div className="methodology-section">
              <Popup
                trigger={<div>scrum</div>}
                position="left center"
                className="app-popup"
                content="This phase follows Scrum methodology. Click here to learn more about Scrum system"
                basic
              />
            </div>
            <div className="points-container">
              <div className="dashboard-section-title">
                Noteworthy <span>Points</span>
              </div>
              <div className="data">
                <Popup
                  trigger={
                    <div className="item">
                      <div className="value">
                        72<span className="symbol">%</span>
                      </div>
                      <div className="name">
                        story points<br />completed
                      </div>
                    </div>
                  }
                  content="story point details"
                  position="left center"
                  className="app-popup"
                  basic
                />
                <Popup
                  trigger={
                    <div className="item">
                      <div className="value">
                        83<span className="symbol">%</span>
                      </div>
                      <div className="name">
                        user stories<br />completed
                      </div>
                    </div>
                  }
                  content="user stories completion details"
                  position="left center"
                  className="app-popup"
                  basic
                />
                <Popup
                  trigger={
                    <div className="item highlight">
                      <div className="value">03</div>
                      <div className="name">
                        blocked<br />user stories
                      </div>
                    </div>
                  }
                  content="blocked user stories details"
                  position="left center"
                  className="app-popup"
                  basic
                />
                <Popup
                  trigger={
                    <div className="item">
                      <div className="value">735</div>
                      <div className="name">
                        effort spent<br />in hours
                      </div>
                    </div>
                  }
                  content="blocked user stories details"
                  position="left center"
                  className="app-popup"
                  basic
                />
                <Popup
                  trigger={
                    <div className="item">
                      <div className="value">180</div>
                      <div className="name">
                        active<br />engineers
                      </div>
                    </div>
                  }
                  content="blocked user stories details"
                  position="left center"
                  className="app-popup"
                  basic
                />
              </div>
            </div>
          </div>
        </div>
        <div className="project-dashboard-sections full-screen-wrapper">
          <div className="project-dashboard-spill-trend">
            <div className="dashboard-section-title">
              Stories <span>Spillover</span>
            </div>
            <div className="spillover-data">
              <div className="spillover-count">
                21<span> / 205</span>
              </div>
              <div className="spillover-percentage">
                12<span> %</span>
              </div>
            </div>
            <div className="spillover-graph">
              <ResponsiveContainer width="100%">
                <LineChart data={project_dashboard_spillover_data}>
                  <defs>
                    <linearGradient id="spillLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="20%" stopColor="#2ed321" stopOpacity={1} />
                      <stop offset="95%" stopColor="#94e30b" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <YAxis type="number" domain={[0, 5]} hide={true} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="spilled"
                    stroke="url(#spillLine)"
                    strokeWidth={1.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="project-dashboard-trends">
            <div className="title-and-choice">
              <div className="dashboard-section-title">
                Phase<span>Trends</span>
              </div>
              <div className="choice-box select">
                <Dropdown
                  inline
                  options={phase_trend_list}
                  defaultValue={phase_trend_list[0].value}
                  icon=""
                  on="hover"
                  onChange={this.handleTrendChange}
                />
              </div>
            </div>
            <div className="data">
              <Tab
                menu={{ secondary: true }}
                panes={trends_panes}
                activeIndex={this.state.activeIndex}
                onTabChange={this.handleTabChange}
              />
            </div>
          </div>
        </div>
        <div className="project-dashboard-bugs full-screen-wrapper alter-pattern">
          <div className="title vertical-text">open bugs</div>
          <div className="bug-total">
            <div className="item">
              <div className="value">088</div>
              <div className="name">Total</div>
            </div>
          </div>
          <div className="bug-graph">
            <LineChart width={200} height={50} data={open_bugs_data}>
              <defs>
                <linearGradient id="bugLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="20%" stopColor="#7871FF" stopOpacity={1} />
                  <stop offset="95%" stopColor="#76D7FF" stopOpacity={1} />
                </linearGradient>
              </defs>
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Total"
                stroke="url(#bugLine)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </div>
          <div className="bug-data">
            <div className="bug-weight">
              <div className="title">by severity</div>
              <div className="data">
                <div className="item">
                  <div className="value">032</div>
                  <div className="name">High</div>
                </div>
                <div className="item">
                  <div className="value">041</div>
                  <div className="name">Medium</div>
                </div>
                <div className="item">
                  <div className="value">015</div>
                  <div className="name">Low</div>
                </div>
              </div>
            </div>
            <div className="bug-age">
              <div className="title">by age</div>
              <div className="data">
                <div className="item">
                  <div className="value">020</div>
                  <div className="name">{"<"} 5 days</div>
                </div>
                <div className="item">
                  <div className="value">012</div>
                  <div className="name">5 to 10 days</div>
                </div>
                <div className="item">
                  <div className="value">015</div>
                  <div className="name">10 to 20 days</div>
                </div>
                <div className="item">
                  <div className="value">041</div>
                  <div className="name">{">"} 20 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-dashboard-sprint full-screen-wrapper">
          <div className="section-title">
            <div className="dashboard-section-title">
              Sprint<span>Metrics</span>
            </div>
            <div className="choice-box">
              details of{" "}
              <span>
                <Dropdown
                  inline
                  options={sprint_key_list}
                  defaultValue={sprint_key_list[0].value}
                  icon=""
                  on="hover"
                />
              </span>
            </div>
          </div>
          <div className="data-section">
            <div className="project-dashboard-workload">
              <div className="points-n-table-section">
                <div className="points-section">
                  <div className="data">
                    <Popup
                      trigger={
                        <div className="item">
                          <div className="value">04</div>
                          <div className="name">
                            tasks yet<br />to start
                          </div>
                        </div>
                      }
                      content="story point details"
                      position="right center"
                      className="app-popup"
                      basic
                    />
                    <Popup
                      trigger={
                        <div className="item highlight">
                          <div className="value">
                            05<span className="symbol" />
                          </div>
                          <div className="name">
                            tasks past<br />due date
                          </div>
                        </div>
                      }
                      content="user stories completion details"
                      position="right center"
                      className="app-popup"
                      basic
                    />
                    <Popup
                      trigger={
                        <div className="item highlight">
                          <div className="value">10</div>
                          <div className="name">
                            under<br />estimated tasks
                          </div>
                        </div>
                      }
                      content="blocked user stories details"
                      position="right center"
                      className="app-popup"
                      basic
                    />
                    <Popup
                      trigger={
                        <div className="item highlight">
                          <div className="value">08</div>
                          <div className="name">
                            over<br />estimated tasks
                          </div>
                        </div>
                      }
                      content="blocked user stories details"
                      position="right center"
                      className="app-popup"
                      basic
                    />
                    <Popup
                      trigger={
                        <div className="item highlight">
                          <div className="value">03</div>
                          <div className="name">
                            blocked<br />user stories
                          </div>
                        </div>
                      }
                      content="blocked user stories details"
                      position="right center"
                      className="app-popup"
                      basic
                    />
                  </div>
                  <div className="data">
                    <Popup
                      trigger={
                        <div className="item highlight">
                          <div className="value">02</div>
                          <div className="name">
                            user stories<br />to spill over
                          </div>
                        </div>
                      }
                      content="blocked user stories details"
                      position="right center"
                      className="app-popup"
                      basic
                    />
                  </div>
                </div>
                <div className="table-section">
                  <div className="dashboard-section-title">
                    Team{"'"}s<span>Workload</span>
                  </div>
                  <div className="data">
                    <div className="header">
                      <div className="title">engineer</div>
                      <div className="title">assigned</div>
                      <div className="title">spent</div>
                      <div className="title">pending</div>
                    </div>
                    <Scrollbars
                      className="app-scrollbar"
                      style={{ height: 200 }}
                    >
                      {workload_data.map((answer, i) => {
                        return (
                          <div className="row">
                            <div className="value">{answer.name}</div>
                            <div className="value">
                              <div className="numbers">
                                {answer.Assigned}
                                <span>hrs</span>
                              </div>
                            </div>
                            <div className="value">
                              <div className="numbers">
                                {answer.Spent}
                                <span>hrs</span>
                              </div>
                            </div>
                            <div className="value">
                              <div className="numbers">
                                {answer.Pending}
                                <span>hrs</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Scrollbars>
                    <div className="row">
                      <div className="value" />
                      <div className="value">
                        <div className="numbers">
                          193<span>hrs</span>
                        </div>
                      </div>
                      <div className="value">
                        <div className="numbers">
                          81<span>hrs</span>
                        </div>
                      </div>
                      <div className="value">
                        <div className="numbers">
                          122<span>hrs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-section">
                <div className="graph-container">
                  <ComposedChart
                    width={750}
                    height={620}
                    data={workload_date_data}
                  >
                    <defs>
                      <linearGradient
                        id="spentLine"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop
                          offset="20%"
                          stopColor="#03c076"
                          stopOpacity={1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#81d810"
                          stopOpacity={1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#eaeff4" />
                    <XAxis dataKey="name" stroke="#b8c5d4" />
                    <YAxis type="number" domain={[0, 70]} stroke="#b8c5d4" />
                    <Tooltip />
                    <Bar dataKey="Assigned" barSize={30} fill="#b8c5d4" />
                    <Line
                      type="monotone"
                      dataKey="Spent"
                      strokeWidth={2}
                      stroke="url(#spentLine)"
                    />
                  </ComposedChart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-dashboard-team full-screen-wrapper">
          <div className="section-title">
            <div className="dashboard-section-title">
              Team<span>Metrics</span>
            </div>
            <div className="choice-box">
              details of{" "}
              <span>
                <Dropdown
                  inline
                  options={user_details_key_list}
                  defaultValue={user_details_key_list[0].value}
                  icon=""
                  on="hover"
                  onChange={this.switchUserDetails}
                />
              </span>
            </div>
          </div>
          <div className="data-section">
            <div className="highlights">
              <div className="items">
                <div className="value">
                  {this.state.userData.completedtasks}
                </div>
                <div className="title">
                  completed<br />tasks
                </div>
              </div>
              <div className="items">
                <div className="value">{this.state.userData.closedbugs}</div>
                <div className="title">
                  closed<br />bugs
                </div>
              </div>
              <div className="items">
                <div className="value">{this.state.userData.review}</div>
                <div className="title">
                  review<br />effectiveness
                </div>
              </div>
            </div>
            <div className="section">
              <div className="effort-spent">
                <div className="title">Effort Spent in Sprints (Hours)</div>
                <div className="data">
                  <div className="graph">
                    <ComposedChart
                      width={150}
                      height={50}
                      data={this.state.userData.effort}
                    >
                      <Tooltip />
                      <Bar dataKey="value" barSize={30} fill="#03C076" />
                    </ComposedChart>
                  </div>
                  <div className="value">
                    <div className="item">
                      <div className="value">{this.state.userData.average}</div>
                      <div className="title">
                        Average<br />Effort
                      </div>
                    </div>
                    <div className="item">
                      <div className="value">{this.state.userData.max}</div>
                      <div className="title">
                        Max<br />Effort
                      </div>
                    </div>
                    <div className="item">
                      <div className="value">{this.state.userData.min}</div>
                      <div className="title">
                        Min<br />Effort
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pending-items">
                <div className="title">Occupied in</div>
                <div className="data">
                  <div className="graph">
                    <ResponsiveContainer height="100%" width="100%">
                      <PieChart>
                        <Pie
                          data={this.state.userData.pending}
                          cx={70}
                          cy={60}
                          innerRadius={40}
                          outerRadius={50}
                          fill="#03C076"
                        />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="value">
                    <div className="item">
                      <div className="value">{this.state.userData.tostart}</div>
                      <div className="title">
                        Tasks yet<br />to start
                      </div>
                    </div>
                    <div className="item">
                      <div className="value">
                        {this.state.userData.inprogress}
                      </div>
                      <div className="title">
                        Tasks<br />In Progress
                      </div>
                    </div>
                    <div className="item">
                      <div className="value">
                        {this.state.userData.pendingbugs}
                      </div>
                      <div className="title">
                        Pending<br />Bugs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="concerns">
              <div className="title">Concerns</div>
              <Scrollbars className="pulp-scrollbar" style={{ height: 330 }}>
                <div className="data">
                  {this.state.userData.concerns.map((answer, i) => {
                    return (
                      <div className="item">
                        <div className="name">{answer.title}</div>
                        <div className="description">{answer.description}</div>
                      </div>
                    );
                  })}
                </div>
              </Scrollbars>
            </div>
            <div className="sprint">
              <div className="title">Effort History (Hours)</div>
              <div className="data">
                <ComposedChart
                  width={450}
                  height={300}
                  data={this.state.userData.history}
                >
                  <defs>
                    <linearGradient id="spentLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="20%" stopColor="#03c076" stopOpacity={1} />
                      <stop offset="95%" stopColor="#81d810" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#b8c5d4" />
                  <YAxis
                    type="number"
                    domain={[10, 70]}
                    stroke="#b8c5d4"
                    hide={true}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    strokeWidth={2}
                    stroke="url(#spentLine)"
                  />
                </ComposedChart>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProjectDashboard;
