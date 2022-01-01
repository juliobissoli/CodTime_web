import Home from "../modules/home/Home";
import Overview from "../modules/home/Overview";
import StatistcstDetail from "../modules/statistcs/StatistcstDetail";

const homeRouter = {
  path: "/home",
  name: "Home",
  component: Home,
  redirect: { name: "Overview" },
  meta: {
    requiresAuth: true,
  },
  children: [
    {
      path: "list",
      name: "Overview",
      component: Overview,
      props: true,
    },
    // {
    //   path: "statistics",
    //   name: "StatistcstDetail",
    //   component: StatistcstDetail,
    //   props: true,
    // },
  ],
};

export default homeRouter;
