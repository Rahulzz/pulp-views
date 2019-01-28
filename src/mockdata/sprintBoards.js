const sprint_boards_data = [
  {
    id: "1011",
    name: "Release 1.0.0 - Sprint 1",
    start: "August 25, 2018",
    end: "November 20, 2018",
    duration: "30",
    type: "WATERFALL",
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
  },
  {
    id: "2011",
    name: "Release 1.0.0 - Sprint 2",
    start: "December 21, 2018",
    end: "March 20, 2019",
    duration: "52",
    type: "KANBAN",
    columns: [
      {
        id: 1011,
        name: "to do",
        max: "6",
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
        max: "3",
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
        name: "unit testing",
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
      },
      {
        id: 4011,
        name: "done",
        max: "",
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
      }
    ]
  },
  {
    id: "3011",
    name: "Release 1.0.0 - Sprint 3",
    start: "May 21, 2019",
    end: "October 20, 2019",
    duration: "44",
    type: "SCRUM",
    columns: [
      {
        id: 1011,
        name: "to do",
        max: "6",
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
        max: "3",
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
        id: 4011,
        name: "done",
        max: "",
        cards: [
          {
            id: "301",
            name: "IA156 - UI/UX Rework",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
            owner: "Mahesh Rudraiah",
            state: ""
          },
          {
            id: "302",
            name: "IA189 - Alg Calculations with weighted average",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut sem at erat pulvinar posuere ac nec justo. Cras interdum bibendum metus,",
            owner: "Shanmuganathan Vijayaraman",
            state: ""
          }
        ]
      }
    ]
  }
];

export { sprint_boards_data };
