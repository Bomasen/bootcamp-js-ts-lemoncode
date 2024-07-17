import { REQUIRED_FIELD_MESSAGE } from "./validation.const";
import { FieldValidationResult } from "./validation.model";

export const buildValidationFailedResult = (errorMessage: string): FieldValidationResult => ({
  succeeded: false,
  errorMessage: errorMessage,
});

export const buildValidationSucceededResult = () => ({ succeeded: true });

export const buildRequiredFieldValidationFailedResult = () =>
  buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
