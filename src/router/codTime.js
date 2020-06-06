import CodTime from "../views/CodTime";
import userRouter from "./user";

const CodTimeRouter = {
  path: "/",
  name: "CodTime",
  component: CodTime,
  children: [],
};

CodTimeRouter.children.push(userRouter);

export default CodTimeRouter;
