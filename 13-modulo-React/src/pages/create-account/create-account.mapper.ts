import * as viewModel from "./create-account.model";
import * as apiModel from "./api/create-account.api-model";

export const mapAccountAddedFromVmToApi = (
  AccountAdded: viewModel.AccountAddedVM
): apiModel.AccountAddedApiVM => ({
  type: AccountAdded.type,
  name: AccountAdded.name,
});

export const mapAccountListFromApiToVM = (
  accountList: apiModel.AccountListApiVM
): viewModel.AccountListVM => ({
  name: accountList.name,
});
