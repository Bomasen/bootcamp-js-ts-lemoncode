import { vi } from "vitest";
import { AccountAddedVM, AccountListVM } from "../create-account.model";
import * as createAccountFieldValidations from "./create-account-field.validation";
import { validationCreateAccountForm } from "./create-account.validation";

describe("create-account.validation.ts", () => {
  describe("validationCreateAccountForm", () => {
    it("should return succeeded when all fields are correct", () => {
      //Arrange
      const accountAdded: AccountAddedVM = {
        type: "3",
        name: "Cuenta Inversión",
      };
      const accountList: AccountListVM[] = [{ name: "Gastos Mes" }, { name: "Ahorro" }];

      vi.spyOn(createAccountFieldValidations, "validationAccountTypeField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(createAccountFieldValidations, "validationAccountNameField").mockReturnValue({
        succeeded: true,
      });

      //Act

      const result = validationCreateAccountForm(accountAdded,accountList);

      //Assert

      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({ type: "", name: "" });
    });

    it("should return failed when validateAccountTypeField is incorrect", () => {
      //Arrange
      const accountAdded: AccountAddedVM = {
        type: "",
        name: "Cuenta Inversión",
      };
      const accountList: AccountListVM[] = [{ name: "Gastos Mes" }, { name: "Ahorro" }];


      vi.spyOn(createAccountFieldValidations, "validationAccountTypeField").mockReturnValue({
        succeeded: false,
        errorMessage: "error",
      });
      vi.spyOn(createAccountFieldValidations, "validationAccountNameField").mockReturnValue({
        succeeded: true,
      });

      //Act

      const result = validationCreateAccountForm(accountAdded,accountList);

      //Assert

      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({ type: "error", name: "" });
    });

    it("should return failed when validateAccountNameField is incorrect", () => {
      //Arrange
      const accountAdded: AccountAddedVM = {
        type: "3",
        name: "",
      };
      const accountList: AccountListVM[] = [{ name: "Gastos Mes" }, { name: "Ahorro" }];


      vi.spyOn(createAccountFieldValidations, "validationAccountTypeField").mockReturnValue({
        succeeded: true,
        errorMessage: "",
      });
      vi.spyOn(createAccountFieldValidations, "validationAccountNameField").mockReturnValue({
        succeeded: false,
        errorMessage: "error",
      });

      //Act

      const result = validationCreateAccountForm(accountAdded,accountList);

      //Assert

      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({ type: "", name: "error" });
    });
  });
});
