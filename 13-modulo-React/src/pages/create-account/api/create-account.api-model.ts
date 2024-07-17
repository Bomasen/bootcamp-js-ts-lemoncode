export interface AccountAddedApiVM {
  type: string;
  name: string;
}

export interface AccountListApiVM {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: number;
  lastTransaction: string;
}
