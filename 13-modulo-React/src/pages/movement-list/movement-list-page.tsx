import { AppLayout } from "@/layouts";
import React, { useEffect, useState } from "react";
import classes from "./movement-list.module.css";
import { MovementListHeaderComponent,MovementListTableComponent } from "./components";
import { AccountDetailVM, MovementVM, createEmptyAccountDetail } from "./movement-list.vm";
import { useParams } from "react-router-dom";
import { getAccountDetail, getMovementList } from "./api";
import { mapAccountDetailFromApiToVM, mapMovementFromApiToVM } from "./movement-list.mapper";

export const MovementListPage: React.FC = () => {
  const [movementList,setMovementList] = useState<MovementVM[]>([]);
  const [accountDetail, setAccountDetail] = useState<AccountDetailVM>(createEmptyAccountDetail);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getAccountDetail(id).then((response) =>
        setAccountDetail(mapAccountDetailFromApiToVM(response))
      );

      getMovementList(id).then((response)=>setMovementList(mapMovementFromApiToVM(response)))
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <MovementListHeaderComponent accountList={accountDetail} />
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
