import { AccountDetailApiVM } from "./account-detail.api-model";
import Axios from "axios";

const urlAccountList = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountDetail = (id: string): Promise<AccountDetailApiVM> =>
  Axios.get<AccountDetailApiVM>(`${urlAccountList}/${id}`).then((response) => response.data);
