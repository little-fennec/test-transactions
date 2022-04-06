import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from "../services/store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string = '';
  @Input() index: number = 0;

  count:number = 0;

  constructor(
        public storeService: StoreService,
        private router: Router
  ) {}


  ngOnInit(): void {
      this.count = this.storeService.transactionsList.filter(item => {
          return item.type.toLowerCase() == this.title.toLowerCase();
      }).length;
  }

}
