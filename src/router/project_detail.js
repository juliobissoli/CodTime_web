// import Task from "../modules/tasks/Task";
// import ProjectsList from "../modules/projects/ProjectsList";
import ProjectDetail from "../modules/projects/ProjectDetail";

import ProjectTask from "../modules/projects/ProjectTask";
import ProjectEpc from "../modules/projects/ProjectEpc";
import ProjectHours from "../modules/projects/ProjectHours";
import ProjectOverview from "../modules/projects/ProjectOverview";

const project_detailRouter = {
  path: "/projects_detail",
  name: "ProjectDetail",
  component: ProjectDetail,
  redirect: { name: "ProjectOverview" },
  children: [
    {
      path: "overview",
      name: "ProjectOverview",
      component: ProjectOverview,
      meta: { requiresAuth: true },
    },
    {
      path: "hours",
      name: "ProjectHours",
      component: ProjectHours,
      meta: { requiresAuth: true },
    },
    {
      path: "epc",
      name: "ProjectEpc",
      component: ProjectEpc,
      meta: { requiresAuth: true },
    },
    {
      path: "task",
      name: "ProjectTask",
      component: ProjectTask,
      meta: { requiresAuth: true },
    },
  ],
};

export default project_detailRouter;
