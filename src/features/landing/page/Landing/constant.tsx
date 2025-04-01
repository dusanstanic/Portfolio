import { PROJECTS } from "@/features/project/api/contant";

import { IProject } from "@/features/project/api/type";

import {
  AngularMaterialTool,
  AngularTool,
  AntDTool,
  ApolloClient,
  AxiosTool,
  FigmaTool,
  FormikTool,
  GithubTool,
  GraphQL,
  JavascriptTool,
  Jest,
  JiraTool,
  MaterialUITool,
  NgRxTool,
  ReactHookFormTool,
  ReactTestingLibrary,
  ReactTool,
  ReduxTool,
  RESTTool,
  SendBirdTool,
  StyledComponentsTool,
  TailWindCSSTool,
  TanstackQueryTool,
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
  projects: PROJECTS,
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
    ReactTestingLibrary,
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
    TanstackQueryTool,
    AxiosTool,
    ApolloClient,
    RESTTool,
    GraphQL,
    Jest,
    FigmaTool,
    GithubTool,
    JiraTool,
  ],
};

export const IdeaProps = {
  text: "Ready for a development journey, or need development advice? Ping me for fun collaboration",
  socialLinks: HeroProps.socialLinks,
  email: HeroProps.email,
};
