import { AppLayout } from "@/layouts";
import React, { useEffect, useState } from "react";
import classes from "./create-account.module.css";
import { CreateAccountComponent } from "./components";
import { accountTypeList } from "./create-account.list";
import { AccountAddedVM, AccountListVM } from "./create-account.model";
import { getAccountList, savedAccount } from "./api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { mapAccountListFromApiToVM } from "./create-account.mapper";

export const CreateAccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [accountList, setAccountList] = useState<AccountListVM[]>([]);

  useEffect(() => {
    getAccountList().then((response) => {
      const accountListVM = response.map((account) => mapAccountListFromApiToVM(account));
      setAccountList(accountListVM);
    });
  }, []);

  const handleOnSave = (accountAdded: AccountAddedVM) => {
    savedAccount(accountAdded).then((response) => {
      if (response) {
        alert("CUENTA AGREGADA CON ÉXITO");
        navigate(appRoutes.accountList);
      } else {
        alert("ERROR AL AGREGAR CUENTA");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta Bancaria</h1>
        </div>
        <CreateAccountComponent
          accountTypeList={accountTypeList}
          accountList={accountList}
          onSave={handleOnSave}
        />
      </div>
    </AppLayout>
  );
};
