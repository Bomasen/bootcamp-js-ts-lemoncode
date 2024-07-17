import { REPEAT_ALIAS_MESSAGE, REQUIRED_FIELD_MESSAGE } from "@/common/validation";
import {
  validationAccountNameField,
  validationAccountTypeField,
} from "./create-account-field.validation";
import { AccountListVM } from "../create-account.model";

describe("create-account-field.validation.ts", () => {
  describe("validationAccountTypeField", () => {
    it("should return succeeded if account type is filled", () => {
      //Arrange
      const accountTypeId = "3";
      //Act
      const result = validationAccountTypeField(accountTypeId);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });
    it("should return failed if account type is empty", () => {
      //Arrange
      const accountTypeId = "";
      //Act
      const result = validationAccountTypeField(accountTypeId);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });
  describe("validationAccountNameField", () => {
    it("should return succeeded if account name is filled", () => {
      //Arrange
      const accountName = "Cuenta Inversión";
      const accountList: AccountListVM[] = [{ name: "Gastos Mes" }, { name: "Ahorro" }];
      //Act
      const result = validationAccountNameField(accountList, accountName);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });
    it("should return failed if account name is empty", () => {
      //Arrange
      const accountName = "";
      const accountList: AccountListVM[] = [{ name: "Gastos Mes" }, { name: "Ahorro" }];

      //Act
      const result = validationAccountNameField(accountList, accountName);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("should return failed if accountName value is same as some accountList value ", () => {
      //Arrange
      const accountName = "Ahorro";
      const accountList: AccountListVM[] = [{ name: "Gastos Mes" }, { name: "Ahorro" }];

      //Act
      const result = validationAccountNameField(accountList, accountName);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REPEAT_ALIAS_MESSAGE);
    });
  });
});
