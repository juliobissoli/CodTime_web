// import Task from "../modules/tasks/Task";
import ProjectsList from "../modules/projects/ProjectsList";
import ProjectDetail from '../modules/projects/ProjectDetail'


import ProjectTask from "../modules/projects/ProjectTask";
import ProjectEpc from "../modules/projects/ProjectEpc";
import ProjectHours from "../modules/projects/ProjectHours";
import ProjectOverview from "../modules/projects/ProjectOverview";


const projectRouter = {
  path: "/projects",
  name: "Projects",
  component: ProjectsList,
  redirect: { name: "ProjectsList" },
  children: [
    {
      path: "list",
      name: "ProjectsList",
      component: ProjectsList,
    },
  ],
};

export default projectRouter;