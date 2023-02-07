import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department/department.service';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-selecting',
  templateUrl: './selecting.component.html',
  styleUrls: ['./selecting.component.sass']
})
export class SelectingComponent implements OnInit {

  constructor(
    public productService: ProductService,
    public departmentService: DepartmentService,
    public i18n: I18nService,
  ) { }

  ngOnInit(): void {
  }
}
