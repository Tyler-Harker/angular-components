import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IBasketItem from 'src/app/models/basketItem';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-productCardList',
  templateUrl: './productCardList.component.html',
  styleUrls: ['./productCardList.component.scss']
})
export class ProductCardListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() basketItems: IBasketItem[] = [];

  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() onRemoveProduct: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  onAddProductCallback(product: Product){
    this.onAddProduct.emit(product);
  }

  onRemoveProductCallback(product: Product){
    this.onRemoveProduct.emit(product);
  }

  getProductQty(product: Product): number{
    let index = this.basketItems.findIndex(b => b.product === product);
    return index === -1 ? 0 : this.basketItems[index].qty;
  }



}
