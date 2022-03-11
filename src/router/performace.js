import Performance from "../modules/performance/Performance";

const performanceRouter = {
  path: "/performance",
  name: "Performance",
  component: Performance,
  meta: {
    requiresAuth: true,
  },

};

export default performanceRouter;