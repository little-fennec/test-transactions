import { Injectable } from '@angular/core';
import transactions from '../data/transactions.data.json';
import {Transaction} from "../model/transaction.modal";

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    transactionsList: Transaction[] = [];
    totalTransactions: number = 0;
    tabList = ['Income', 'Outcome', 'Loan', 'Investment'];

    constructor() {
        this.totalTransactions = transactions.total;
        this.transactionsList = transactions.data
    }

    getTransactionsByType(selectedTab: number):Transaction[] {
        return this.transactionsList.filter((item) =>
            item.type.toLowerCase() === this.tabList[selectedTab].toLowerCase()
        )
    }

}
