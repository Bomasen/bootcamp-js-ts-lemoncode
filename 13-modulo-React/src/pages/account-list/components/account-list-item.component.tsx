import React from "react";
import { AccountVM } from "../account-list.vm";
import classes from "./account-list-item.component.module.css";
import { Link, generatePath, useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

const ACTION_NONE = "";
const ACTION_TRANSFER = "1";
const ACTION_MOVEMENTS = "2";

interface Props {
  accountItem: AccountVM;
}

export const AccountListItemComponent: React.FC<Props> = (props) => {
  const { accountItem } = props;
  const navigate = useNavigate();

  const handleSelectOptionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case ACTION_TRANSFER:
        navigate(generatePath(appRoutes.transferFromAccount, { id: accountItem.id }));
        break;
      case ACTION_MOVEMENTS:
        navigate(generatePath(appRoutes.movements, { id: accountItem.id }));
        break;
    }
  };

  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell} ${classes.bold}`}>
        <Link to={generatePath(appRoutes.movements, { id: accountItem.id })}>
          {accountItem.iban}
        </Link>
      </span>
      <span className={classes.dataCell}>{accountItem.name}</span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>{accountItem.balance}</span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {accountItem.lastTransaction.toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.selectContainer}`}>
        <select className={classes.select} onChange={handleSelectOptionsChange}>
          <option value={ACTION_NONE}>Seleccionar</option>
          <option value={ACTION_TRANSFER}>Transferir</option>
          <option value={ACTION_MOVEMENTS}>Movimientos</option>
        </select>
      </span>
    </div>
  );
};
