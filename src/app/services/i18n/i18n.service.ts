import { Injectable } from '@angular/core';
import { Hu } from 'src/app/messages/hu';
import { I18nBase } from 'src/app/util/i18n/i18n-base';

@Injectable({
  providedIn: 'root'
})
export class I18nService extends I18nBase {
  constructor()
  {
    super();
    I18nBase._languages={
      "en": {...this},
      "hu": new Hu(),
    };
  }

Shopping_list="Shopping list"
Open_menu="Open menu"
Selecting="Selecting"
Shopping="Shopping"
Done="Done"
Departments="Departments"
Product_name="Product name"
Department="Department"
Note="Note"
All="All"
Department_name="Department name"
Add="Add"
Update="Update"
Delete="Delete"
  
}
