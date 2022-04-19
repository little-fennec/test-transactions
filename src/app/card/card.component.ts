import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from "../services/store.service";
import {Router} from "@angular/router";
import { map, Observable } from 'rxjs';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() title: string = '';
    @Input() index: number = 0;

    count$!: Observable<number>;

    constructor(
        public storeService: StoreService,
        private router: Router
    ) {}


    ngOnInit(): void {
        this.count$ = this.storeService.getTransactions().pipe(
            map(response => response.data),
            map(transactions => transactions.filter(item => item.type.toLowerCase() == this.title.toLowerCase())),
            map(transactions => transactions.length)
        );
    }
}
