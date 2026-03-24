import { PROJECTS } from '@/features/project/api/constant';

export const fetchProject = (id: string | undefined) => {
  return PROJECTS.find((project) => project.id === id)!;
};
