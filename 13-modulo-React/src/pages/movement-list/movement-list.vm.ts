export interface MovementVM {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
}


export interface AccountDetailVM{
  id: string;
  iban: string;
  name: string;
  balance: number;
  lastTransaction: Date;
}

export const createEmptyAccountDetail:AccountDetailVM = {
id:"",
iban:"",
name:"",
balance:0,
lastTransaction:new Date("")
}