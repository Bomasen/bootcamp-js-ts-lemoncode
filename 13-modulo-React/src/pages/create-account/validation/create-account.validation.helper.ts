import { AccountListVM } from "../create-account.model";

export const isNotAccountNameRepeat = (accountList:AccountListVM[], name:string):boolean => 
accountList.every((account)=> account.name.trim().toLocaleLowerCase() !== name.trim().toLocaleLowerCase())

