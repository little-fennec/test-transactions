import {Component, OnInit} from '@angular/core';
import {Transaction} from "../model/transaction.modal";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StoreService} from "../services/store.service";
import { map, Observable, switchMap } from 'rxjs';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit  {

    tabList: string[] = [];
    selectedTab$!: Observable<number>;
    visibleTransactions$!: Observable<Transaction[]>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private storeService: StoreService
    ) {}

    openTab(event: MouseEvent, tab: number): void {
        event.preventDefault();
        this.router.navigate(['navigator'], {
            queryParams: {
                tab: tab
            }
        })
    }

    ngOnInit(): void {
        this.tabList = this.storeService.tabList;
        this.selectedTab$ = this.route.queryParams.pipe(map(params => +params['tab']));
        this.visibleTransactions$ = this.selectedTab$.pipe(
            switchMap(type => this.storeService.getTransactionsByType(type))
        );
    }

}
