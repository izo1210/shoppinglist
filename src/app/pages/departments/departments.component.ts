import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.sass']
})
export class DepartmentsComponent implements OnInit {
  constructor(
    public departmentService: DepartmentService,
  ) { }

  ngOnInit(): void {
  }

  
}
