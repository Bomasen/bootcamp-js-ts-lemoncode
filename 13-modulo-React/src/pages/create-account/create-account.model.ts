export interface AccountAddedVM {
  type: string;
  name: string;
}

export const createEmptyAccountAdded = (): AccountAddedVM => ({
  type: "",
  name: "",
});

export interface AccountListVM {
  name: string;
}

export interface AccountTypeList {
  type: string;
  description: string;
}

export interface AccountAddedErrors {
  type: string;
  name: string;
}

export const createEmptyAccountAddedErrors = (): AccountAddedErrors => ({
  type: "",
  name: "",
});
