import { Component, Input, OnInit } from '@angular/core';
import IBasketItem from 'src/app/models/basketItem';

@Component({
  selector: 'app-basketCard',
  templateUrl: './basketCard.component.html',
  styleUrls: ['./basketCard.component.scss']
})
export class BasketCardComponent implements OnInit {
  @Input() basketItems: IBasketItem[] = [];

  static currencyFormatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

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
    console.log('remove', basketItem, this.basketItems.indexOf(basketItem))
    this.basketItems.splice(this.basketItems.indexOf(basketItem), 1)
    console.log(this.basketItems.length)
  }

  getBasketTotalFormatted(): string{
    let formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    return formatter.format(this.getBasketTotal());
  }
  getBasketItemTotalFormatted(basketItem: IBasketItem): string{
    let formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    return formatter.format(basketItem.qty * basketItem.product.price);
  }
}
