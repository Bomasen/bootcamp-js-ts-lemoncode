import * as apiModel from "./api/login.api-model";
import * as viewModel from "./login.vm";

export const mapCredentialsFromVmToApi = (
  credentials: viewModel.Credentials
): apiModel.Credentials => ({
  user: credentials.user,
  password: credentials.password,
});
