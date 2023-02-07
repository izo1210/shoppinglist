import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {
  @Input("product") product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

  get statusIcon(): string
  {
    switch(this.product.status)
    {
      case Product.STATUS_UNSELECTED: return "remove";
      case Product.STATUS_SELECTED: return "shopping_cart";
      case Product.STATUS_DONE: return "check";
      default: return "";
    }
  }

  get backgroundColor(): string
  {
    switch(this.product.status)
    {
      case Product.STATUS_UNSELECTED: return "dimgray";
      case Product.STATUS_SELECTED: return "navy";
      case Product.STATUS_DONE: return "green";
      default: return "";
    }
  }

}
