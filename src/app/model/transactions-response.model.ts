import { Transaction } from "./transaction.modal";

export interface TransactionsResponse {
    total: number;
    data: Transaction[];
}