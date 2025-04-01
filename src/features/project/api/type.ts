import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ITool {
  name: string;
  description?: string;
  icon: IconDefinition;
}

export interface IProject {
  title: string;
  description: string;
  keyPoints: Array<string>;
  tools: Array<ITool>;
}
