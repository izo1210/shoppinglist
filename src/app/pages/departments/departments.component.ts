import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department/department.service';
import { I18nService } from 'src/app/services/i18n/i18n.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.sass']
})
export class DepartmentsComponent implements OnInit {
  constructor(
    public departmentService: DepartmentService,
    public i18n: I18nService,
  ) { }

  ngOnInit(): void {
  }

  
}
