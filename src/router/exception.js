import Exception from "../modules/exceptions/Exceptions";

const exceptionRouter = {
  path: "/exception#:code(\\d+)",
  name: "Exception",
  component: Exception,
  props: true
//   redirect: { name: "ExpenseList" },
//   children: [
//     {
//       path: "list",
//       name: "ExpenseList",
//       component: ExpenseList,
//       props: true,
//       meta: {
//         requiresAuth: true,
//       },
//     },
//   ],
};

export default exceptionRouter;