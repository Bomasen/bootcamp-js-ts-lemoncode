import { isStringValueInformed } from "@/common/validation";
import {
  buildRequiredFieldValidationFailedResult,
  buildValidationSucceededResult,
} from "@/common/validation/plain.validation.helper";
import { FieldValidationResult } from "@/common/validation/validation.model";

export const validateUserField = (user: string) :FieldValidationResult => {
  if (!isStringValueInformed(user)) {
    return buildRequiredFieldValidationFailedResult();
  }

  return buildValidationSucceededResult();
};

export const validatePasswordField = (password: string):FieldValidationResult => {
  if (!isStringValueInformed(password)) {
    return buildRequiredFieldValidationFailedResult();
  }

  return buildValidationSucceededResult();
};
