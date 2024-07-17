export interface Credentials {
  user: string;
  password: string;
}

export const createEmptyCredentials = (): Credentials => ({ user: "", password: "" });

export interface CredentialsFormErrors {
  user: string;
  password: string;
}

export const createEmptyCredentialsFormErrors = (): CredentialsFormErrors => ({ user: "", password: "" });
