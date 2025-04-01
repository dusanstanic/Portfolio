import { HiveTools, LCITools, SchoolGigTools, VanillaTools } from "./tools";

export const PROJECTS = [
  {
    id: "1",
    title: "Hive",
    description:
      "Health Information Network created to manage misleading information that appears in public spaces during epidemics using machine learning",
    keyPoints: [
      `<b>Led, architectured and implemented a messaging system infrastructure using SendBird</b>, which resulted in robust and reusable outcomes that can easily be extended and adapted to changes, improving overall project execution`,
      `<b>Integrated and implemented numerous different features for user chat communication</b> using clean architectural solutions that made reusability seamless`,
      `<b>Architectured and implemented a notification system infrastructure</b>, worked closely with the <b>product owner</b> on providing various possible solutions`,
      `<b>Mentored team members</b> and supported with various tasks to reach sprint goals, improving productivity`,
      `<b>Documented</b> various aspects of the project in confluence to convey ideas, facilitate discussions, and <b>present information effectively to diverse audiences</b> helping others gain insights and knowledge of the current processes
`,
    ],
    tools: HiveTools,
  },
  {
    id: "2",
    title: "Vanilla",
    description:
      "Platform used to build a Document Generation product, enabling admins to create and publish document packages that can be purchased by an end client",
    keyPoints: [
      `<b>Implemented and integrated onlyOffice</b> which helped users work on their documentation in a seamless way`,
      `<b>Designed and presented extensive sets of data</b>, improving user experience in accessing and manipulating files`,
      `<b>Created most designs in Figma for various flows</b> based on complexity and needs, greatly improving the project and sprint execution`,
      `<b>Worked on implementing and integrating complex forms</b>, which resulted in an effortless experience for users handling their documentation`,
    ],
    tools: VanillaTools,
  },
  {
    id: "3",
    title: "SchoolGig",
    keyPoints: [
      `<b>Worked simultaneously on two projects</b> that consisted of the Admin Panel which used React and the Jammcard Web App which used Angular`,
      `<b>Led a team</b> on creating and implementing a reusable wizard`,
      `Implemented <b>authentication with JWT</b>; maintained and enhanced the messenger system`,
    ],
    description:
      "Platform used by schools to better engage with their employees and to provide job offers, helping them in choosing the right candidate",
    tools: SchoolGigTools,
  },
  {
    id: "4",
    title: "LCI",
    keyPoints: [
      `<b>Designed, developed and architectured the entire FE of the project; worked closely with stakeholders</b>`,
      `<b>Architectured</b> a dynamic wizard with complex forms for various configurations with steps that were interchangeable and configurable; Implemented and integrated <b>SSO</b>`,
    ],
    description:
      "Platform for the entire suite of LCI products and their associated systems. This transformation involves the utilization of cloud-based solutions that can easily be expanded and seamlessly integrated, ensuring the delivery of secure and scalable services to clients.",
    tools: LCITools,
  },
];
