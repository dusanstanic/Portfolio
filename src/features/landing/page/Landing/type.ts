import { ReactElement } from "react";

export interface ITool {
  name: string;
  Icon: ReactElement;
}

export interface IProject {
  title: string;
  description: string;
  keyPoints: Array<string>;
  tools: Array<ITool>;
}
