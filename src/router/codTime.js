import CodTime from "../views/CodTime";
import userRouter from "./home";

const CodTimeRouter = {
  path: "/",
  name: "CodTime",
  component: CodTime,
  children: [],
};

CodTimeRouter.children.push(userRouter);

export default CodTimeRouter;
