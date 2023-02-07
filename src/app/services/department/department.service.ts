import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ProductService } from '../product/product.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(
    private storageService: StorageService,
    private productService: ProductService,
  ) { }

  readonly departments$=this.storageService.value$.pipe(
    map(shoppinglist=>[...shoppinglist.departments].sort()),
  );

  readonly defaultSelection=null;
  readonly defaultName="";
  
  readonly selection$=new BehaviorSubject<string|null>(this.defaultSelection);
  readonly name$=new BehaviorSubject<string>(this.defaultName);

  get departments(): string[]
  {
    return this.storageService.getValue().departments;
  }

  set departments(newDepartments: string[])
  {
    this.storageService.getValue().departments=newDepartments;
    this.storageService.valueChanged();
  }
  
  select(department: string)
  {
    this.selection$.next(department);
    this.name$.next(department);
  }

  add()
  {
    const newName=this.name$.getValue();
    this.departments.push(newName);
    this.storageService.valueChanged();
    this.resetName();
    this.resetSelection();
  }

  remove()
  {
    const oldName: string|null=this.selection$.getValue();
    if(oldName==null) return;
    this.departments=this.departments.filter(department=>department!==oldName);
    this.resetSelection();
  }

  update()
  {
    const oldName: string|null=this.selection$.getValue();
    if(oldName==null) return;
    const newName=this.name$.getValue();
    this.departments=this.departments.map(department=>(department===oldName ? newName : department));
    this.productService.updateDepartment(oldName, newName);
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
    moveItemInArray(this.departments, event.previousIndex, event.currentIndex);
    this.storageService.valueChanged();
  }

}
