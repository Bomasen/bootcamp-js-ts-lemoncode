import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components/transfer-form.component";
import classes from "./transfer.page.module.css";
import { getAccountList, saveTransfer } from "./api";
import { mapAccountFromApiToVM, mapTransferFromVmToAPi } from "./transfer.mapper";
import { useParams } from "react-router-dom";

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const {id} = useParams<{id:string}>()

  React.useEffect(() => {
    getAccountList().then((response) => {
      const accountVM = response.map((accountList) => mapAccountFromApiToVM(accountList));
      setAccountList(accountVM);
    });
  }, []);

  const handleTransfer = (transferInfo: TransferVm) => {
    const transferApi = mapTransferFromVmToAPi(transferInfo);
    saveTransfer(transferApi).then((response) => {
      if (response) {
        alert("Transferencia realizada con éxito");
      } else {
        alert("Error al realizar la transferencia");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Transferencias Nacionales</h1>
        <TransferFormComponent accountList={accountList} onTransfer={handleTransfer} defaultAccountId={id} />
      </div>
    </AppLayout>
  );
};
