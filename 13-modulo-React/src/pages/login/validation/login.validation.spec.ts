import { validateForm } from "./login.validation";
import { Credentials } from "../login.vm";
import { REQUIRED_FIELD_MESSAGE } from "@/common/validation";

describe("pages/login/login.validation.ts", () => {
  it("should return validation succeeded if both fields are filled", () => {
    //Arrange
    const myCredentials: Credentials = {
      user: "myUser",
      password: "myPassword",
    };
    //Act
    const result = validateForm(myCredentials);

    //Assert
    expect(result.succeeded).toBeTruthy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual("");
  });

  it("should return validation failed if user is empty", () => {
    //Arrange
    const myCredentials: Credentials = {
      user: "",
      password: "myPassword",
    };
    //Act
    const result = validateForm(myCredentials);

    //Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
    expect(result.errors.password).toEqual("");
  });

  it("should return validation failed if password is empty", () => {
    //Arrange
    const myCredentials: Credentials = {
      user: "myUser",
      password: "",
    };
    //Act
    const result = validateForm(myCredentials);

    //Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
  });

  it("should return validation failed if both fields are empty", () => {
    //Arrange
    const myCredentials: Credentials = {
      user: "",
      password: "",
    };
    //Act
    const result = validateForm(myCredentials);

    //Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
    expect(result.errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
  });
});
