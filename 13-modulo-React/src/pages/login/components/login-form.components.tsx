import React from "react";
import {
  Credentials,
  CredentialsFormErrors,
  createEmptyCredentials,
  createEmptyCredentialsFormErrors,
} from "../login.vm";
import { validateForm } from "../validation/login.validation";
import classes from "./login-form.component.module.css"

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginForComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [credentials, setCredentials] = React.useState<Credentials>(createEmptyCredentials());

  const [errors, setErrors] = React.useState<CredentialsFormErrors>(
    createEmptyCredentialsFormErrors()
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validateResult = validateForm(credentials);
    setErrors(validateResult.errors);

    if (validateResult.succeeded) {
      onLogin(credentials);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" id="username" name="user" onChange={handleFieldChange} placeholder="Usuario"/>
        {errors.user && <p className={classes.error}>{errors.user}</p>}
      </div>
      <div>
        <input type="password" id="password" name="password" onChange={handleFieldChange} placeholder="Contraseña" autoComplete="off"/>
        {errors.password && <p className={classes.error}>{errors.password}</p>}
      </div>
      <button type="submit">Acceder</button>
    </form>
  );
};
