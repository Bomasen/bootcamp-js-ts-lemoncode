import { AccountListApiVM } from "./api";
import { mapAccountAddedFromVmToApi, mapAccountListFromApiToVM } from "./create-account.mapper";
import { AccountAddedVM } from "./create-account.model";

describe("create-account.mapper.spec", () => {
  describe("mapAccountAddedFromVmToApi", () => {
    it("should return same account structure but using apiVM structure", () => {
      //Arrange
      const accountAdded: AccountAddedVM = {
        type: "1",
        name: "Gastos negocio",
      };
      //Act
      const result = mapAccountAddedFromVmToApi(accountAdded);
      //Assert
      expect(result).toEqual({
        type: "1",
        name: "Gastos negocio",
      });
    });
  });

  describe("mapAccountListFromApiToVm", () => {
    it("should return same account structure but using apiVM structure", () => {
      //Arrange
      const accountList: AccountListApiVM = {
        id: "2",
        iban: "ES79 2100 0813 6101 2345 6789",
        type: "3",
        name: "Compartida",
        balance: 2480,
        lastTransaction: "2019-11-21T14:07:38",
      };
      //Act
      const result = mapAccountListFromApiToVM(accountList);
      //Assert
      expect(result).toEqual({
        name: "Compartida",
      });
    });
  });
});
