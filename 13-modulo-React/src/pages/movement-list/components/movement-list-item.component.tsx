import React from "react";
import { MovementVM } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";
import { helperCurrencyConvert } from "../movement-list.helper";

interface Props {
  movementItem: MovementVM;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  return (
    <>
      <div className={classes.row} key={movementItem.id}>
        <span className={classes.dataCell}>{movementItem.transaction.toLocaleDateString()}</span>
        <span className={classes.dataCell}>
          {movementItem.realTransaction.toLocaleDateString()}
        </span>
        <span className={classes.dataCell}>{movementItem.description}</span>
        <span
          className={` ${classes.alignRight} ${
            movementItem.amount < 0 ? classes.dataCellRed : classes.dataCell
          }`}
        >
          {helperCurrencyConvert(movementItem.amount)}
        </span>
        <span className={`${classes.dataCell} ${classes.alignRight}`}>
          {helperCurrencyConvert(movementItem.balance)}
        </span>
      </div>
    </>
  );
};
