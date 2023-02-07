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
}
