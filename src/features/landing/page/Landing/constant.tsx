import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faAngular,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMessage,
  faPenNib,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

import { IProject } from "./type";

export const HeroProps = {
  title: ["Software", "Engineer", "Expert"],
  text: `High-performing software engineer with a passion for enabling growing businesses to scale by providing them with high-value technical solutions and possibilities, collaborating alongside various parties to identify business needs and consult on solutions.`,
  socialLinks: { linkedInUrl: "https://www.linkedin.com/in/stanic-dusan/" },
  email: "dusan.stanic97@hotmail.com",
};

export const ProjectProps: { projects: Array<IProject> } = {
  projects: [
    {
      title: "Hive",
      description:
        "Health Information Network created to manage misleading information that appears in public spaces during epidemics using machine learning",
      keyPoints: [],
      tools: [
        {
          name: "React",
          Icon: <FontAwesomeIcon icon={faReact} />,
        },
        {
          name: "Redux",
          Icon: <FontAwesomeIcon icon={faToolbox} />,
        },
        {
          name: "SendBird",
          Icon: <FontAwesomeIcon icon={faMessage} />,
        },
        {
          name: "AntD",
          Icon: <FontAwesomeIcon icon={faPenNib} />,
        },
        {
          name: "Figma",
          Icon: <FontAwesomeIcon icon={faFigma} />,
        },
      ],
    },
    {
      title: "Vanilla",
      description:
        "Platform used to build a Document Generation product, enabling admins to create and publish document packages that can be purchased by an end client",
      keyPoints: [],
      tools: [
        {
          name: "React",
          Icon: <FontAwesomeIcon icon={faReact} />,
        },
        {
          name: "Styled Compoents",
          Icon: <FontAwesomeIcon icon={faPenNib} />,
        },
        {
          name: "Custom Styling",
          Icon: <FontAwesomeIcon icon={faPenNib} />,
        },
        {
          name: "Figma",
          Icon: <FontAwesomeIcon icon={faFigma} />,
        },
      ],
    },
    {
      title: "SchoolGig",
      keyPoints: [],
      description:
        "Platform used by schools to better engage with their employees and to provide job offers, helping them in choosing the right candidate",
      tools: [
        {
          name: "Angular",
          Icon: <FontAwesomeIcon icon={faAngular} />,
        },
        {
          name: "React",
          Icon: <FontAwesomeIcon icon={faReact} />,
        },
        {
          name: "Figma",
          Icon: <FontAwesomeIcon icon={faFigma} />,
        },
      ],
    },
    {
      title: "LCI",
      keyPoints: [],
      description:
        "Platform for the entire suite of LCI products and their associated systems. This transformation involves the utilization of cloud-based solutions that can easily be expanded and seamlessly integrated, ensuring the delivery of secure and scalable services to clients.",
      tools: [
        {
          name: "React",
          Icon: <FontAwesomeIcon icon={faReact} />,
        },
        {
          name: "React Hook Form",
          Icon: <FontAwesomeIcon icon={faToolbox} />,
        },
        {
          name: "Zod",
          Icon: <FontAwesomeIcon icon={faToolbox} />,
        },
        {
          name: "MaterialUI",
          Icon: <FontAwesomeIcon icon={faPenNib} />,
        },
        {
          name: "Figma",
          Icon: <FontAwesomeIcon icon={faFigma} />,
        },
      ],
    },
  ],
};
