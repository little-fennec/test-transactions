import { Injectable } from '@angular/core';
import { delay, filter, map, Observable, of } from 'rxjs';
import transactions from '../data/transactions.data.json';
import {Transaction} from "../model/transaction.modal";
import { TransactionsResponse } from '../model/transactions-response.model';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    tabList = ['Income', 'Outcome', 'Loan', 'Investment'];

    getTransactionsByType(selectedTab: number): Observable<Transaction[]> {
        const type = this.tabList[selectedTab];
        return this.getTransactions()
            .pipe(
                map(response => response.data),
                map(transactions => transactions.filter(t => t.type.toLowerCase() === type.toLowerCase()))
            );
    }

    getTransactions(): Observable<TransactionsResponse> {
        return of(transactions).pipe(delay(200));
    }

}
