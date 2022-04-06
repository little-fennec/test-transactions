import {Component, OnInit} from '@angular/core';
import {Transaction} from "../model/transaction.modal";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StoreService} from "../services/store.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit  {

    tabList: string[] = [];
    selectedTab: number = 0;
    visibleTransactions:Transaction[] = [];

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
        this.route.queryParams.subscribe((params: Params) => {
            this.selectedTab = params['tab'];
            this.visibleTransactions = this.storeService.getTransactionsByType(this.selectedTab);
        });
    }

}
