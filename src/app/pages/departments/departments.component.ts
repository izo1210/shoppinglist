import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { BehaviorSubject, map } from 'rxjs';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.sass']
})
export class DepartmentsComponent implements OnInit {
  constructor(
    public storageService: StorageService,
  ) { }

  @ViewChild("departmentList") departmentList!: MatSelectionList;

  readonly departments$=this.storageService.value$.pipe(
    map(shoppinglist=>shoppinglist.departments.sort()),
  );

  readonly defaultSelection=null;
  readonly selection$=new BehaviorSubject<string|null>(null);

  readonly defaultName="";
  readonly name$=new BehaviorSubject<string>(this.defaultName);

  ngOnInit(): void {
  }

  selectDepartment(department: string)
  {
    this.selection$.next(department);
    this.name$.next(department);
  }

  add()
  {
    const newValue=this.name$.getValue();
    this.storageService.addDepartment(newValue);
    this.resetName();
    this.resetSelection();
  }

  remove()
  {
    this.storageService.removeDepartment(this.selection$.getValue());
    this.resetSelection();
  }

  update()
  {
    this.storageService.updateDepartment(this.selection$.getValue(), this.name$.getValue());
    this.resetName();
    this.resetSelection();
  }

  resetName()
  {
    this.name$.next(this.defaultName);
  }

  resetSelection()
  {
    this.selection$.next(this.defaultSelection);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.storageService.departments, event.previousIndex, event.currentIndex);
    this.storageService.valueChanged();
  }
  
}
