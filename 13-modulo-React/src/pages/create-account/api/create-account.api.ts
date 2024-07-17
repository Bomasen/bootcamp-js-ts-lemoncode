import Axios from "axios";
import { AccountAddedApiVM, AccountListApiVM } from "./create-account.api-model";

const urlAccountList = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const savedAccount = (accountAdded: AccountAddedApiVM): Promise<boolean> =>
  Axios.post<boolean>(urlAccountList, accountAdded).then(({ data }) => data);


export const getAccountList = ():Promise<AccountListApiVM[]> => 
    Axios.get(urlAccountList).then(({data})=>data)