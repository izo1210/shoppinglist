import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Product } from 'src/app/model/product';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-selecting',
  templateUrl: './selecting.component.html',
  styleUrls: ['./selecting.component.sass']
})
export class SelectingComponent implements OnInit {
  private readonly defaultProductFilter="";
  private readonly defaultDepartmentFilter=null;
  private readonly defaultNote="";

  readonly productFilter$=new BehaviorSubject<string>(this.defaultProductFilter);
  readonly departmentFilter$=new BehaviorSubject<string|null>(this.defaultDepartmentFilter);
  readonly note$=new BehaviorSubject<string>(this.defaultNote);

  readonly products$=combineLatest({
      data: this.storageService.value$, 
      productFilter: this.productFilter$,
      departmentFilter: this.departmentFilter$,
    }).pipe(
      map(stream=>stream.data.products
        .filter(product=>product.name.includes(stream.productFilter))
        .filter(product=>stream.departmentFilter==null || product.department===stream.departmentFilter)
        .sort((product1, product2)=>product1.compareByName(product2)))
    );

  readonly departments$=this.storageService.value$.pipe(
    map(shoppinglist=>shoppinglist.departments.sort()),
  );

  constructor(
    public storageService: StorageService,
  ) { }

  ngOnInit(): void {
  }

  clickProduct(product: Product)
  {
    switch(product.status)
    {
      case Product.STATUS_UNSELECTED: 
      case Product.STATUS_DONE: 
        product.select(this.note$.getValue());
        break;
      case Product.STATUS_SELECTED: 
        product.unselect();
        break;
    }
    this.storageService.valueChanged();
    this.resetProductFilter();
    this.resetNote();
  }

  addProduct()
  {
    const product: Product=new Product({
      name: this.productFilter$.getValue(),
      department: this.departmentFilter$.getValue(),
      status: Product.STATUS_SELECTED,
      note: this.note$.getValue()
    });
    this.storageService.getValue().products.push(product);
    this.storageService.valueChanged();
    this.resetProductFilter();
    this.resetNote();
  }

  resetProductFilter()
  {
    this.productFilter$.next(this.defaultProductFilter);
  }

  resetDepartmentFilter()
  {
    this.departmentFilter$.next(this.defaultDepartmentFilter);
  }

  resetNote()
  {
    this.note$.next(this.defaultNote);
  }

  resetDoneProducts()
  {
    if(!confirm("Reset done products?")) return;

    this.storageService.getValue().products.forEach(product=>{
      if(product.status===Product.STATUS_DONE)
      {
        product.unselect();
      }
    });

    this.storageService.valueChanged();
  }


}
