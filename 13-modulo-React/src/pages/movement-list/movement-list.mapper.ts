import * as accountDetailApiVM from "./api/account-detail.api-model";
import * as accountDetailVM from "./movement-list.vm";
import * as movementApiVM from "./api/movement-list.api-model";
import * as movementVM from "./movement-list.vm";

export const mapAccountDetailFromApiToVM = (
  accountDetail: accountDetailApiVM.AccountDetailApiVM
): accountDetailVM.AccountDetailVM => ({
  id: accountDetail.id,
  iban: accountDetail.iban,
  name: accountDetail.name,
  balance: accountDetail.balance,
  lastTransaction: new Date(accountDetail.lastTransaction),
});

export const mapMovementFromApiToVM = (
  movementList: movementApiVM.MovementApiVM[]
): movementVM.MovementVM[] =>
  movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    amount: Number(movement.amount),
    balance: Number(movement.balance),
    transaction: new Date(movement.transaction),
    realTransaction: new Date(movement.realTransaction),
    accountId: movement.accountId,
  }));
