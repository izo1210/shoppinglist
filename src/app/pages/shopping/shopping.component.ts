import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from 'src/app/model/product';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.sass']
})
export class ShoppingComponent implements OnInit {

  readonly products$=this.storageService.value$.pipe(
    map(shoppinglist=>shoppinglist.products
      .filter(product=>product.status===Product.STATUS_SELECTED)
      .sort((a, b)=>a.compareByDepartmentAndName(b, this.storageService.getValue().departments))
    )
  );

  constructor(
    public storageService: StorageService,
  ) { }

  ngOnInit(): void {
  }

  productDone(product: Product)
  {
    product.status=Product.STATUS_DONE;
    this.storageService.valueChanged();
  }

}
