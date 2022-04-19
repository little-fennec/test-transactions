import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import {StoreService} from "../services/store.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public totalTransactions$!: Observable<number>;

    constructor(
        public storeService: StoreService
    ) {}

    ngOnInit(): void {
        this.totalTransactions$ = this.storeService.getTransactions()
            .pipe(map(response => response.total));
    }

}
