import { FormValidationResult} from "@/common/validation"

import {
  validateAccountIdField,
  validateIBANField,
  validateNameField,
  validateAmountField,
  validateConceptField,
  validateNotesField,
  validateRealDateTransferField,
  validateEmailField,
} from "./transfer-field.validation";
import { TransferError, TransferVm } from "../transfer.vm";

export const validateForm = (transfer: TransferVm): FormValidationResult<TransferError>=> {
  const fieldValidationResults = [
    validateAccountIdField(transfer.accountId),
    validateIBANField(transfer.iban),
    validateNameField(transfer.name),
    validateAmountField(transfer.amount),
    validateConceptField(transfer.concept),
    validateNotesField(transfer.notes),
    validateRealDateTransferField(transfer.realDateTransfer),
    validateEmailField(transfer.email),
  ];
  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      accountId: fieldValidationResults[0].errorMessage ?? "",
      iban: fieldValidationResults[1].errorMessage ?? "",
      name: fieldValidationResults[2].errorMessage ?? "",
      amount: fieldValidationResults[3].errorMessage ?? "",
      concept: fieldValidationResults[4].errorMessage ?? "",
      notes: fieldValidationResults[5].errorMessage ?? "",
      realDateTransfer: fieldValidationResults[6].errorMessage ?? "",
      email: fieldValidationResults[7].errorMessage ?? "",
      dateTransfer: "",
    },
  };
};
