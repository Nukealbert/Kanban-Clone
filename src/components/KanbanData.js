import { v4 as uuidv4 } from "uuid";

// import "" from "../../../../assets/Recruitment/india."""

export const CandidatesData = [
  {
    id: "1",
    task: "Brainstorming brings team members' diverse experience into play.",
    ttl: 'Brainstorming',
    Status: 'To-do',
    priority: 'Low',
    due_Date: "25-May-2020",
  },
  {
    id: "2",
    task: "User research helps you to create an optimal product for users.",
    ttl: 'Research',
    Status: 'To-do',
    priority: 'Low',
    due_Date: "26-May-2020",
  },
  {
    id: "3",
    task: "Low fidelity wireframes include the most basic content and visuals.",
    ttl: 'Wireframes',
    Status: 'To-do',
    priority: 'Low',
    due_Date: "27-May-2020",
  },
  {
    id: "4",
    task: "morbi",
    ttl: 'Onboarding Illustrations ',
    Status: 'Done',
    priority: 'High',
    due_Date: "23-Aug-2020",
  },
  {
    id: "5",
    task: "proin",
    ttl: 'Moodboard',
    Status: 'In Progress',
    priority: 'Medium',
    
  },
];


export const columnsFromBackend = {
  [uuidv4()]: {
    title: 'To-Do',
    items: CandidatesData,
    color:'#5030E5',
  },
  [uuidv4()]: {
    title: 'In Progress',
    items: [],
    color:'#FFA500',
  },
  [uuidv4()]: {
    title: 'Done',
    items: [],
    color:'#8BC48A',
  },
  
};