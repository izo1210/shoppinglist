import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { DoneComponent } from './pages/done/done.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { SelectingComponent } from './pages/selecting/selecting.component';
import { Path } from './util/path/path';

export class Paths
{
  static readonly get=new Paths();

  selecting=new Path('selecting');
  shopping=new Path('shopping');
  done=new Path('done');
  departments=new Path('departments');
}

const paths=Paths.get;

const routes: Routes = [
  { path: '', redirectTo: paths.selecting.path, pathMatch: 'full'},
  { path: paths.selecting.path, component: SelectingComponent},
  { path: paths.shopping.path, component: ShoppingComponent},
  { path: paths.done.path, component: DoneComponent},
  { path: paths.departments.path, component: DepartmentsComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
