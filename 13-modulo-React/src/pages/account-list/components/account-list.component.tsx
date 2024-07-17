import React from "react";
import { AccountVM } from "../account-list.vm";
import classes from "./account-list-table.component.module.css";
import { AccountListItemComponent } from "./account-list-item.component";

interface Props {
  accountList: AccountVM[];
}

export const AccountListTableComponent: React.FC<Props> = (props) => {
  const { accountList } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>IBAN</span>
            <span className={classes.headerCell}>ALIAS</span>
            <span className={classes.headerCell}>SALDO DISPONIBLE</span>
            <span className={classes.headerCell}>ULTIMA OPERACIÓN</span>
            <span className={classes.headerCell}>OPERACIÓN</span>
          </div>
          {accountList.map((account) => (
        <AccountListItemComponent key={account.id} accountItem={account}/>
          ))}
        </div>
      </div>
    </>
  );
};
