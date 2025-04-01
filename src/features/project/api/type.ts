import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IProject {
  id: string;
  title: string;
  description: string;
  keyPoints: Array<string>;
  tools: Array<ITool>;
}

export interface ITool {
  name: string;
  description?: string;
  icon: IconDefinition;
}
