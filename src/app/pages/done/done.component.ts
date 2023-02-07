import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from 'src/app/model/product';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.sass']
})
export class DoneComponent implements OnInit {

  readonly products$=this.storageService.value$.pipe(
    map(shoppinglist=>shoppinglist.products
      .filter(product=>product.status===Product.STATUS_DONE)
      .sort((a, b)=>a.compareByDepartmentAndName(b, this.storageService.getValue().departments))
    )
  );

  constructor(
    public storageService: StorageService,
  ) { }

  ngOnInit(): void {
  }

}
