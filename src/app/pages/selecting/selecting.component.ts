import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department/department.service';
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
  ) { }

  ngOnInit(): void {
  }
}
