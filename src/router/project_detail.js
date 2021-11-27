import ProjectDetail from "../modules/projects/ProjectDetail";

import ProjectTask from "../modules/projects/ProjectTask";
import ProjectEpc from "../modules/projects/ProjectEpc";
import ProjectHours from "../modules/projects/ProjectHours";
import ProjectOverview from "../modules/projects/ProjectOverview";
import ProjectPerform from "../modules/projects/ProjectPerform";

const project_detailRouter = {
  path: "project/:id(\\d+)",
  props: true,
  name: "ProjectDetail",
  component: ProjectDetail,
  redirect: { name: "ProjectOverview" },
  children: [
    {
      path: "overview",
      name: "ProjectOverview",
      props: true,
      component: ProjectOverview,
      meta: { requiresAuth: true },
    },
    {
      path: "hours",
      name: "ProjectHours",
      props: true,
      component: ProjectHours,
      meta: { requiresAuth: true },
    },
    {
      path: "epc",
      name: "ProjectEpc",
      props: true,
      component: ProjectEpc,
      meta: { requiresAuth: true },
    },
    {
      path: "task",
      name: "ProjectTask",
      props: true,
      component: ProjectTask,
      meta: { requiresAuth: true },
    },
    {
      path: "perform",
      name: "ProjectPerform",
      props: true,
      component: ProjectPerform,
      meta: { requiresAuth: true },
    },
  ],
};

export default project_detailRouter;
