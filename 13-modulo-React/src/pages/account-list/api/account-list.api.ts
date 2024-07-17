import Axios from "axios";
import { AccountApiVM } from "./account-list.api-model";


const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<AccountApiVM[]> =>
  Axios.get(url).then((response) => response.data);
