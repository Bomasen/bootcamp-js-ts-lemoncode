import { FormValidationResult } from "@/common/validation/validation.model";
import { Credentials, CredentialsFormErrors } from "../login.vm";
import { validatePasswordField, validateUserField } from "./login-field.validation";

export const validateForm = (
  credentials: Credentials
): FormValidationResult<CredentialsFormErrors> => {
  const formValidationResult = [
    validateUserField(credentials.user),
    validatePasswordField(credentials.password),
  ];

  return {
    succeeded: formValidationResult.every((field) => field.succeeded === true),
    errors: {
      user: formValidationResult[0].errorMessage ?? "",
      password: formValidationResult[1].errorMessage ?? "",
    },
  };
};
