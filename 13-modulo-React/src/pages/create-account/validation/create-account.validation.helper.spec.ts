import { AccountListVM } from "../create-account.model";
import { isNotAccountNameRepeat } from "./create-account.validation.helper";

describe("create-account.validation.helper.spec", () => {
  it.each([
    [[{ name: "Ahorro" }, { name: "Gastos" }], "Ahorro", false],
    [[{ name: "Ahorro" }, { name: "Gastos" }], "Gastos", false],
    [[{ name: "Ahorro" }, { name: "Gastos" }], "aHoRrO", false],
    [[{ name: "Ahorro" }, { name: "Gastos" }], "    gasTos    ", false],
    [[{ name: "Ahorro" }, { name: "Gastos" }], "Inversiones", true],
    [[{ name: "Ahorro" }, { name: "Gastos" }], "Familiar", true],
  ])(
    "if account list is %s and input name is %s should return %s",
    (accountList: AccountListVM[], name: string, resultExpect: boolean) => {
      const result = isNotAccountNameRepeat(accountList, name);

      expect(result).toBe(resultExpect);
    }
  );
});
