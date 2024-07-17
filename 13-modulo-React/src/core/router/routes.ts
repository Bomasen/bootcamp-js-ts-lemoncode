export const routesPrefixes = {
  accountList: "/accountList",
  transfer: "/transfer",
  movements: "/movements",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  editAccount: "/editAccount/:id",
  movements: "/movements/:id",
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
  createAccount: "/create-account",
};
