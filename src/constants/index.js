import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  event,
  employee,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "JS", icon: javascript },
  { title: "React", icon: reactjs },
    { title: "Node.js", icon: nodejs },
        { title: "Tailwind CSS", icon: tailwind },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "",
    company_name: "",
    icon: eduskill,
    iconBg: "",
    date: "",
    points: [
      "....",
    ],
  },
  {
    title: "",
    company_name: " | ",
    icon: mathwork,
    iconBg: "#",
    date: "",
    points: [
      "...",
    ],
  }
];

export const projects = [
  
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/Shubham-by/Personal-Portfolio-Website.git",
  },
   {
    name: "Event Management System",
    description:
      "A comprehensive, centralized digital platform designed to streamline event planning, registration, ticketing, and management from start to finish.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
       { name: "React", color: "pink-text-gradient" },
        { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: event,
    source_code_link: "https://github.com/Shubham-by/Event-management-System",
  },
  {
   name: "Employee Management System",
    description:
      "A secure, web-based platform designed to instantly add, update, and remove employee records while maintaining comprehensive staff information.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
       { name: "React", color: "pink-text-gradient" },
        { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: employee,
    source_code_link: "https://github.com/Shubham-by/Employee-Management-System",
  }
];
