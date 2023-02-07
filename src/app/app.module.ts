//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
//CDK
import {DragDropModule} from '@angular/cdk/drag-drop';
//App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//AppComponents
import { NavigationButtonComponent } from './util/navigation-button/navigation-button.component';
import { SelectingComponent } from './pages/selecting/selecting.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DoneComponent } from './pages/done/done.component';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavigationButtonComponent,
    SelectingComponent,
    ShoppingComponent,
    DepartmentsComponent,
    ProductCardComponent,
    DoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Material
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatTooltipModule,
    //CDK
    DragDropModule,
    FormsModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: environment.baseHref }],
  bootstrap: [AppComponent]
})
export class AppModule { }
