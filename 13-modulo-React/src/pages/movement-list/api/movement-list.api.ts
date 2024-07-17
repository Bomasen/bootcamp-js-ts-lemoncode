import Axios from "axios";
import { MovementApiVM } from "./movement-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovementList = (accountId: string): Promise<MovementApiVM[]> =>
  Axios.get(urlMovements, { params: { accountId } }).then(({ data }) => data);
