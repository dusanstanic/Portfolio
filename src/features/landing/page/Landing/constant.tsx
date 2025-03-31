import { IProject } from "./type";

import {
  AngularTool,
  AntDTool,
  CustomStylingTool,
  FigmaTool,
  FormikTool,
  GithubTool,
  MaterialUITool,
  ReactHookFormTool,
  ReactTool,
  ReduxTool,
  SendBirdTool,
  StyledComponentsTool,
  YupTool,
  ZodTool,
} from "./tools";

export const HeroProps = {
  title: ["Software", "Engineer", "Expert"],
  text: `Hello! I am Dusan, a high-performing software engineer with a passion for enabling growing businesses to scale by providing them with high-value technical solutions and possibilities, collaborating alongside various parties to identify business needs and consult on solutions.`,
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
        ReactTool,
        ReduxTool,
        SendBirdTool,
        FormikTool,
        YupTool,
        AntDTool,
        FigmaTool,
      ],
    },
    {
      title: "Vanilla",
      description:
        "Platform used to build a Document Generation product, enabling admins to create and publish document packages that can be purchased by an end client",
      keyPoints: [],
      tools: [
        ReactTool,
        StyledComponentsTool,
        CustomStylingTool,
        FigmaTool,
        GithubTool,
      ],
    },
    {
      title: "SchoolGig",
      keyPoints: [],
      description:
        "Platform used by schools to better engage with their employees and to provide job offers, helping them in choosing the right candidate",
      tools: [AngularTool, ReactTool, FigmaTool, GithubTool],
    },
    {
      title: "LCI",
      keyPoints: [],
      description:
        "Platform for the entire suite of LCI products and their associated systems. This transformation involves the utilization of cloud-based solutions that can easily be expanded and seamlessly integrated, ensuring the delivery of secure and scalable services to clients.",
      tools: [
        ReactTool,
        ReactHookFormTool,
        ZodTool,
        MaterialUITool,
        FigmaTool,
        GithubTool,
      ],
    },
  ],
};

export const AboutMeProps = {
  educations: [
    {
      title: "Information Technology",
      name: "Faculty of Sciences, University of Novi Sad",
    },
  ],
  languages: [
    {
      name: "English",
      level: "C2 (lived in Canada 10 years)",
    },
    {
      name: "Serbian",
      level: "C2",
    },
  ],
};
