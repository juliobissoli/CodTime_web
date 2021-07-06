import Performance from "../modules/performance/Performance";
// import TaskList from "../modules/tasks/TaskList";

const performanceRouter = {
  path: "/performance",
  name: "Performance",
  component: Performance,
//   redirect: { name: "TaskList" },
//   children: [
//     {
//       path: "list",
//       name: "TaskList",
//       component: TaskList,
//       meta: {
//         requiresAuth: true,
//       },
//     },
//   ],
};

export default performanceRouter;