import { AppLayout } from "@/layouts";
import React, { useEffect, useState } from "react";
import classes from "./account-list.module.css";
import { AccountListTableComponent } from "./components";
import { AccountVM } from "./account-list.vm";
import { getAccountList } from "./api";
import { mapAccountListFromApiToVM } from "./account-list.mapper";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = useState<AccountVM[]>([]);
  const navigate = useNavigate();

  const handleClickCreateAccount = () => {
    navigate(appRoutes.createAccount);
  };

  useEffect(() => {
    getAccountList().then((response) => {
      setAccountList(mapAccountListFromApiToVM(response));
    });
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis Cuentas</h1>
          <button onClick={handleClickCreateAccount}>AGREGAR CUENTA NUEVA</button>
        </div>
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};

// <Link to={appRoutes.createCount}></Link>
