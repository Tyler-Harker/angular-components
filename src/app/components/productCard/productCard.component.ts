import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-productCard',
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() name: string  = '';
  @Input() id: string = '';
  @Input() price: number = 0;
  @Input() imgUrl: string = '';
  @Input() numberInCart: number = 0;
  @Output() numberInCartChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();
  @Output() onAdd: EventEmitter<string> = new EventEmitter<string>();

  currencyFormater = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  constructor() { }
  ngOnInit() {
  }

  addToCart(){
    this.onAdd.emit(this.id);
  }
  removeFromCart(){
    this.onRemove.emit(this.id);
  }



}
