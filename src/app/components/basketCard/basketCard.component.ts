import { Component, Input, OnInit } from '@angular/core';
import IBasketItem from 'src/app/models/basketItem';

@Component({
  selector: 'app-basketCard',
  templateUrl: './basketCard.component.html',
  styleUrls: ['./basketCard.component.scss']
})
export class BasketCardComponent implements OnInit {
  @Input() basketItems: IBasketItem[] = [];

  currencyFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

  constructor() { }

  ngOnInit() {
  }

  getBasketTotalItems(){
    let total = 0;
    for(let item of this.basketItems){
      total += item.qty;
    }
    return total;
  }

  getBasketTotal(){
    let total = 0;
    for(let item of this.basketItems){
      total += item.qty * item.product.price;
    }
    return total;
  }

  removeBasketItem(basketItem: IBasketItem): void {
    this.basketItems.splice(this.basketItems.indexOf(basketItem), 1)
  }
}
