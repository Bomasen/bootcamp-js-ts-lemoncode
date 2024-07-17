import { AccountDetailApiVM, MovementApiVM } from "./api";
import { mapAccountDetailFromApiToVM, mapMovementFromApiToVM } from "./movement-list.mapper";
import { AccountDetailVM, MovementVM } from "./movement-list.vm";

describe("pages/movement-list/movement-list.mapper", () => {
  describe("mapAccountDetailFromApiToVM", () => {
    it("should return empty field when API return empty data", () => {
      //Arrange
      const accountDetail: AccountDetailApiVM = {
        id: "",
        iban: "",
        type: "",
        name: "",
        balance: 0,
        lastTransaction: "",
      };
      //Act
      const result: AccountDetailVM = mapAccountDetailFromApiToVM(accountDetail);
      //Assert
      expect(result).toEqual({
        id: "",
        iban: "",
        name: "",
        balance: 0,
        lastTransaction: new Date(""),
      });
    });

    it("should return same structure data when it feeds for API", () => {
      //Arrange
      const accountDetail: AccountDetailApiVM = {
        id: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        type: "1",
        name: "Gastos mes",
        balance: 1490,
        lastTransaction: "2019-12-09T21:30:00",
      };
      //Act
      const result: AccountDetailVM = mapAccountDetailFromApiToVM(accountDetail);
      //Assert
      expect(result).toEqual({
        id: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "Gastos mes",
        balance: 1490,
        lastTransaction: new Date("2019-12-09T21:30:00"),
      });
    });
  });

  describe("mapMovementFromApiToVM", () => {
    it("should return empty array when API return empty data", () => {
      //Arrange
      const movementList: MovementApiVM[] = [
        {
          id: "",
          description: "",
          amount: 0,
          balance: 0,
          transaction: "",
          realTransaction: "",
          accountId: "",
        },
        {
          id: "",
          description: "",
          amount: 0,
          balance: 0,
          transaction: "",
          realTransaction: "",
          accountId: "",
        },
      ];
      //Act
      const result: MovementVM[] = mapMovementFromApiToVM(movementList);

      //Assert
      expect(result).toEqual([
        {
          id: "",
          description: "",
          amount: 0,
          balance: 0,
          transaction: new Date(""),
          realTransaction: new Date(""),
          accountId: "",
        },
        {
          id: "",
          description: "",
          amount: 0,
          balance: 0,
          transaction: new Date(""),
          realTransaction: new Date(""),
          accountId: "",
        },
      ]);
    });
    it("should return same structure data when it feeds for API", () => {
      //Arrange
      const movementList: MovementApiVM[] = [
        {
          id: "1",
          description: "Nómina noviembre",
          amount: 900,
          balance: 1490,
          transaction: "2019-12-09T21:30:00",
          realTransaction: "2019-12-09T21:30:00",
          accountId: "1",
        },
        {
          id: "2",
          description: "Alquiler noviembre",
          amount: -400,
          balance: 590,
          transaction: "2019-12-07T11:30:00",
          realTransaction: "2019-12-08T20:00:10",
          accountId: "1",
        },
      ];
      //Act
      const result: MovementVM[] = mapMovementFromApiToVM(movementList);

      //Assert
      expect(result).toEqual([
        {
          id: "1",
          description: "Nómina noviembre",
          amount: 900,
          balance: 1490,
          transaction: new Date("2019-12-09T21:30:00"),
          realTransaction: new Date("2019-12-09T21:30:00"),
          accountId: "1",
        },
        {
          id: "2",
          description: "Alquiler noviembre",
          amount: -400,
          balance: 590,
          transaction: new Date("2019-12-07T11:30:00"),
          realTransaction: new Date("2019-12-08T20:00:10"),
          accountId: "1",
        },
      ]);
    });
  });
});
