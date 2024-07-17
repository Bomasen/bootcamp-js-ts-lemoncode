import { FormValidationResult } from "@/common/validation"
import { AccountAddedErrors, AccountAddedVM, AccountListVM } from "../create-account.model";
import {
  validationAccountNameField,
  validationAccountTypeField,
} from "./create-account-field.validation";

export const validationCreateAccountForm = (
  accountAdded: AccountAddedVM,
  accountList: AccountListVM[]
): FormValidationResult<AccountAddedErrors> => {
  const formValidationResult = [
    validationAccountTypeField(accountAdded.type),
    validationAccountNameField(accountList, accountAdded.name),
  ];

  return {
    succeeded: formValidationResult.every((f) => f.succeeded === true),
    errors: {
      type: formValidationResult[0].errorMessage ?? "",
      name: formValidationResult[1].errorMessage ?? "",
    },
  };
};
