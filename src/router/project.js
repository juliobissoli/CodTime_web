// import Task from "../modules/tasks/Task";
import ProjectsList from "../modules/projects/ProjectsList";
import ProjectDetail from '../modules/projects/ProjectDetail'

const projectRouter = {
  path: "/projects",
  name: "Projects",
  component: ProjectsList,
//   redirect: { name: "TaskList" },
//   children: [
//     {
//       path: "detail",
//       name: "ProjectDetail",
//       component: ProjectDetail,
//       meta: { requiresAuth: true,},
//     },
//   ],
};

export default projectRouter;