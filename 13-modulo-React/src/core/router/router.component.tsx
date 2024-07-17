import { appRoutes } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AccountListPage, AccountPage, LoginPage, MovementListPage, TransferPage } from "@/pages";
import { CreateAccountPage } from "@/pages/create-account";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<LoginPage />}></Route>
        <Route path={appRoutes.accountList} element={<AccountListPage />}></Route>
        <Route path={appRoutes.editAccount} element={<AccountPage />}></Route>
        <Route path={appRoutes.movements} element={<MovementListPage />}></Route>
        <Route path={appRoutes.transfer} element={<TransferPage />}></Route>
        <Route path={appRoutes.transferFromAccount} element={<TransferPage />}></Route>
        <Route path={appRoutes.createAccount} element={<CreateAccountPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
