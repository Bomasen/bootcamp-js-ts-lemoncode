import { REPEAT_ALIAS_MESSAGE, isStringValueInformed } from "@/common/validation";
import {
  buildRequiredFieldValidationFailedResult,
  buildValidationFailedResult,
  buildValidationSucceededResult,
} from "@/common/validation/plain.validation.helper";
import { FieldValidationResult } from "@/common/validation/validation.model";
import { isNotAccountNameRepeat } from "./create-account.validation.helper";
import { AccountListVM } from "../create-account.model";

export const validationAccountTypeField = (id: string): FieldValidationResult => {
  if (!isStringValueInformed(id)) {
    return buildRequiredFieldValidationFailedResult();
  }

  return buildValidationSucceededResult();
};

export const validationAccountNameField = (
  accountList: AccountListVM[],
  name: string
): FieldValidationResult => {
  if (!isStringValueInformed(name)) {
    return buildRequiredFieldValidationFailedResult();
  }

  if (!isNotAccountNameRepeat(accountList, name)) {
    return buildValidationFailedResult(REPEAT_ALIAS_MESSAGE);
  }

  return buildValidationSucceededResult();
};
