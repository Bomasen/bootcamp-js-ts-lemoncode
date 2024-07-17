import React from "react";
import classes from "./create-account.component.module.css";
import {
  AccountAddedVM,
  AccountAddedErrors,
  AccountTypeList,
  createEmptyAccountAdded,
  createEmptyAccountAddedErrors,
  AccountListVM,
} from "../create-account.model";
import { validationCreateAccountForm } from "../validation";

interface Props {
  accountTypeList: AccountTypeList[];
  accountList: AccountListVM[];
  onSave: (accountAdded: AccountAddedVM) => void;
}

export const CreateAccountComponent: React.FC<Props> = (props) => {
  const { accountTypeList, accountList, onSave } = props;

  const [accountAdded, setAccountAdded] = React.useState<AccountAddedVM>(createEmptyAccountAdded());
  const [errors, setErrors] = React.useState<AccountAddedErrors>(createEmptyAccountAddedErrors());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = validationCreateAccountForm(accountAdded, accountList);
    setErrors(validationResult.errors);

    if (validationResult.succeeded) {
      onSave(accountAdded);
    }
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccountAdded({
      ...accountAdded,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.sectionContainer}>
        <div>
          <label id="type">Tipo de cuenta:</label>
          <select name="type" id="type" className={classes.selectType} onChange={handleFieldChange}>
            <option value="">Seleccionar</option>
            {accountTypeList.map((account) => (
              <option key={account.type} value={account.type}>
                {account.description}
              </option>
            ))}
          </select>
          <p className={classes.error}>{errors.type}</p>
        </div>
        <div>
          <label id="name">Alias:</label>
          <input
            type="text"
            name="name"
            id="name"
            className={classes.inputAlias}
            onChange={handleFieldChange}
          />
          <p className={classes.error}>{errors.name}</p>
        </div>
      </div>
      <button className={classes.button} type="submit">
        GUARDAR
      </button>
    </form>
  );
};
