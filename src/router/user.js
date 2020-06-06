import User from "../modules/user/User";
import UserList from "../modules/user/UserList";

const userRouter = {
  path: "/user",
  name: "User",
  component: User,
  redirect: { name: "UserList" },
  children: [
    {
      path: "list",
      name: "UserList",
      component: UserList,
      props: true,
    },
  ],
};

export default userRouter;
