import Task from "../modules/tasks/Task";
import TaskList from "../modules/tasks/TaskList";

const taskRouter = {
  path: "/issue",
  name: "Tasks",
  component: Task,
  redirect: { name: "TaskList" },
  children: [
    {
      path: "list",
      name: "TaskList",
      component: TaskList,
      meta: {
        requiresAuth: true,
      },
    },
  ],
};

export default taskRouter;