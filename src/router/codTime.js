import CodTime from "../views/CodTime";
import homeRouter from "./home";
import taskRouter from "./tasks";
import performanceRouter from "./performace";
import projectRouter from "./project";
import project_detailRouter from "./project_detail";
import userRouter from './user'
import exceptionRouter from './exception'

const CodTimeRouter = {
  path: "/",
  name: "CodTime",
  component: CodTime,
  children: [],
};

CodTimeRouter.children.push(homeRouter);
CodTimeRouter.children.push(taskRouter);
CodTimeRouter.children.push(performanceRouter);
CodTimeRouter.children.push(projectRouter);
CodTimeRouter.children.push(project_detailRouter);
CodTimeRouter.children.push(userRouter);
CodTimeRouter.children.push(exceptionRouter);

export default CodTimeRouter;
