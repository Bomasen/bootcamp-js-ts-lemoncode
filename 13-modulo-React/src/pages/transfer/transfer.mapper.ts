import * as apiModel from "./api";
import * as viewModel from "./transfer.vm";

export const mapAccountFromApiToVM = (account: apiModel.AccountApi): viewModel.AccountVm => ({
  id: account.id,
  alias: account.name,
  iban: account.iban,
});

export const mapTransferFromVmToAPi = (transfer: viewModel.TransferVm): apiModel.TransferApi => ({
  accountId: transfer.accountId,
  iban: transfer.iban,
  name: transfer.name,
  amount: transfer.amount,
  concept: transfer.concept,
  notes: transfer.notes,
  transferDate: transfer.dateTransfer,
  realTransfer: transfer.realDateTransfer ?? "",
});
