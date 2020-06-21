import Home from "../modules/home/Home";
import WorkArea from "../modules/home/WorkArea";
import Project from "../modules/projects/ProjectDetail";

const userRouter = {
  path: "/user",
  name: "Home",
  component: Home,
  redirect: { name: "WorkArea" },
  children: [
    {
      path: "list",
      name: "WorkArea",
      component: WorkArea,
      props: true,
    },
    {
      path: "detail",
      name: "Project",
      component: Project,
      props: true,
    },
  ],
};

export default userRouter;
