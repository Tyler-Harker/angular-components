import { Component, Input, OnInit } from '@angular/core';
import IBasketItem from 'src/app/models/basketItem';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-ShoppingCart',
  templateUrl: './ShoppingCart.component.html',
  styleUrls: ['./ShoppingCart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() availableProducts: Product[] = [];
  @Input() basketItems: IBasketItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  onAddProductToCart(product: Product){
    let index = this.basketItems.findIndex(p => p.product === product);
    if(index > -1){
      this.basketItems[index].qty++;
    }
    else{
      this.basketItems.push(<IBasketItem>{
        qty: 1,
        product
      });
    }
  }
  onRemoveProductFromCart(product: Product){
    let index = this.basketItems.findIndex(p => p.product === product);
    if(index > -1){
      this.basketItems[index].qty--;
    }
    if(this.basketItems[index].qty === 0){
      this.basketItems.splice(index, 1);
    }
  }


}
