import { IProject } from "@/features/project/api/type";

import {
  AngularMaterialTool,
  AngularTool,
  AntDTool,
  CustomStylingTool,
  FigmaTool,
  FormikTool,
  GithubTool,
  JavascriptTool,
  MaterialUITool,
  NgRxTool,
  ReactHookFormTool,
  ReactTool,
  ReduxTool,
  SendBirdTool,
  StyledComponentsTool,
  TailWindCSSTool,
  TypescriptTool,
  YupTool,
  ZodTool,
} from "@/features/tool/api/tools";

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
  title:
    "Hello! I am Dusan, a dedicated and creative software engineer with a passion for shaping the digital world.",
  text: "I specialize in developing scalable and robust software architectures emphasizing reusability and maintainability, boosting team productivity and reduced bug occurrences",
};

export const StacksProps = {
  tools: [
    JavascriptTool,
    TypescriptTool,
    ReactTool,
    ReduxTool,
    AngularTool,
    NgRxTool,
    AngularMaterialTool,
    SendBirdTool,
    FormikTool,
    YupTool,
    ReactHookFormTool,
    ZodTool,
    AntDTool,
    MaterialUITool,
    TailWindCSSTool,
    StyledComponentsTool,
    FigmaTool,
    GithubTool,
  ],
};
