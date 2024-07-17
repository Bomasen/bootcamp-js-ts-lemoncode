import React from "react";
import classes from "./movement-list-header.component.module.css";
import { AccountDetailVM } from "../movement-list.vm";
import { helperCurrencyConvert } from "../movement-list.helper";

interface Props {
  accountList: AccountDetailVM;
}

export const MovementListHeaderComponent: React.FC<Props> = (props) => {
  const { accountList } = props;

  return (
    <>
      <div className={classes.headerContainer}>
        <div className={classes.headerTop}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.headerBalance}>
            <h2>SALDO DISPONIBLE</h2>
            <span>{helperCurrencyConvert(accountList.balance)}</span>
          </div>
        </div>
        <div className={classes.headerBottom}>
          <span>{`Alias: ${accountList.name}`}</span>
          <span>{`IBAN: ${accountList.iban}`}</span>
        </div>
      </div>
    </>
  );
};
