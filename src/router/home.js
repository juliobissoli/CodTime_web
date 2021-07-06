import Home from "../modules/home/Home";
import WorkArea from "../modules/home/WorkArea";
import StatistcstDetail from "../modules/statistcs/StatistcstDetail";

const userRouter = {
  path: "/home",
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
      path: "statistics",
      name: "StatistcstDetail",
      component: StatistcstDetail,
      props: true,
    },
  ],
};

export default userRouter;
