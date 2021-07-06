import CodTime from "../views/CodTime";
import userRouter from "./home";
import taskRouter from './tasks'
import performanceRouter from './performace'
import projectRouter from './project'
import project_detailRouter from './project_detail'

const CodTimeRouter = {
  path: "/",
  name: "CodTime",
  component: CodTime,
  children: [],
};

CodTimeRouter.children.push(userRouter);
CodTimeRouter.children.push(taskRouter)
CodTimeRouter.children.push(performanceRouter)
CodTimeRouter.children.push(projectRouter)
CodTimeRouter.children.push(project_detailRouter)




export default CodTimeRouter;
