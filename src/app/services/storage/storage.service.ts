import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Shoppinglist } from 'src/app/model/shoppinglist';
import { LocalStorageWrapper } from 'src/app/util/local-storage-wrapper/local-storage-wrapper';

@Injectable({
  providedIn: 'root'
})
export class StorageService extends LocalStorageWrapper<Shoppinglist> {

  constructor()
  { 
    super(
      "shoppinglist",
      ()=>Shoppinglist.empty,
      (source: any)=>new Shoppinglist(source)
    );
  }

  get departments(): string[]
  {
    return this.getValue().departments;
  }

  set departments(newDepartments: string[])
  {
    this.getValue().departments=newDepartments;
    this.valueChanged();
  }

  get products(): Product[]
  {
    return this.getValue().products;
  }

  set products(newProducts: Product[])
  {
    this.getValue().products=newProducts;
    this.valueChanged();
  }

  addDepartment(name: string)
  {
    this.getValue().departments.push(name);
    this.valueChanged();
  }

  removeDepartment(name: string|null)
  {
    if(name==null) return;

    this.departments=this.departments.filter(department=>department!==name);
 }

  updateDepartment(oldName: string|null, newName: string)
  {
    if(oldName==null) return;

    this.departments=this.departments.map(department=>(department===oldName ? newName : department));
    this.products.forEach(product=>product.department=(product.department===oldName ? newName : product.department));
  }
}
