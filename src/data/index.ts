import {
  bookDash,
  bookDetail,
  bookProfile,
  financeDash,
  financeInput,
  financeSetting,
  github,
  gsDashBoard,
  gsLogin,
  gsSale,
  linkedin,
  skype,
} from "../assets";

const navLinks = [
  {
    id: "aboutme",
    title: "About",
  },
  {
    id: "milestones",
    title: "Milestones",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const experiences = [
  {
    title: "Font-End Developer",
    date: "July 2024 - Present",
    details: [
      "<span style='color: white'>Freelancer</span>",
      "Maintain high standards of quality in both codes and processes,with <span style='color: white;'>task driven development (TDD)</span>, conducting reviews every weeks",
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Full-Stack Developer",
    date: "August 2022 - July 2024",
    details: [
      "<span style='color: white'>Myanmar Information Technology Co., Ltd.</span>",
      "Built custom enterprise applications for a <span style='color: white;'>local branded company</span> as a full-stack software engineer.",
      "Managed production-level projects which have <span style='color: white;'> +3k daily active users </span>",
      "Acted as a member of <span style='color: white;'> the client-facing develpement </span> team focusing on creating an intuitive and visually appealing user experience ",
    ],
  },
  {
    title: "Flutter/Web Developer",
    date: "Jan 2021 - June 2022",
    details: [
      "<span style='color: white'>TASTYSOFT Software Outsourcing Co., Ltd.</span>",
      "Participated in development of the SchoolFlow utilizing <span style='color: white;'> Dart and Flutter </span> Framework.",
      "<span style='color: white;'>Collaborated with the team</span> to design and implement front-end interfaces.",
      "Perticipated on the entire product cycle of <span style='color: white;'>finance application.</span>",
    ],
  },
];

const milestones = [
  {
    name: "MMBookHive",
    description:
      "Platform for  reviewing burmese books. Users can write reviews, read others' reviews, recommend books, and create reading challenges, fostering a community around book discussions and discovery.Still in process!",
    tech: ["Next.js","Prisma","Typescript","Postgres"],
    images: [bookDash,bookDetail,bookProfile],

  },
  {
    name: "Gold Shop",
    description:
      "A real-time using application for tracking product transactions including buying and selling. Using socket to maintain synchronized records across devices, with different authorization levels for user access.",
    tech:["Angular","Javascript","Tailwind","Node.js"],
    images: [gsDashBoard,gsLogin,gsSale],
  },

  {
    name: "Personal Finance",
    description:
      "Scaleable basic finance managment application with intuitive UI and user-centered functionality. Also including localizations and firebase cloud services.",
    tech: ["Flutter","Firebase"],
    images: [financeDash,financeInput,financeSetting],
  },
  
];


const contactlist = [
  { listid: "github", icon: github, url: "https://github.com/Zaw-Nayla" },
  { listid: "linkedin", icon: linkedin, url: "https://www.linkedin.com/in/zaw-nay-la" },
  { listid: "skype", icon: skype,  url: `skype:live:.cid.3accda1400a188d7?chat` }
]



export { experiences, milestones,navLinks,contactlist};

