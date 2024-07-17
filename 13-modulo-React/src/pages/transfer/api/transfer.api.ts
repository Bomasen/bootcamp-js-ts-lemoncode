import Axios from "axios";
import { AccountApi, TransferApi } from "./transfer.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<AccountApi[]> =>
  Axios.get<AccountApi[]>(urlAccount).then(({ data }) => data);

const urlTransfer = `${import.meta.env.VITE_BASE_API_URL}/transfer`;

export const saveTransfer = (transfer: TransferApi): Promise<boolean> =>
  Axios.post<boolean>(urlTransfer, transfer).then(({ data }) => data);
