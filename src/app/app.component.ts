import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Paths } from './app-routing.module';
import { ProductService } from './services/product/product.service';
import { I18nService } from './services/i18n/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Shopping list';
  paths=Paths.get;
  readonly sidenavOpened$=new BehaviorSubject<boolean>(false);
  readonly selectingActivated$=new BehaviorSubject<boolean>(false);
  readonly shoppingActivated$=new BehaviorSubject<boolean>(false);
  readonly doneActivated$=new BehaviorSubject<boolean>(false);
  readonly departmentsActivated$=new BehaviorSubject<boolean>(false);


  constructor(
    public router: Router,
    public productService: ProductService,
    public i18n: I18nService,
  )
  {
    router.events.subscribe(event=>this.onRouterEvent(event));
    i18n.setLanguage("hu");
  }

  onRouterEvent(event: any): void
  {
    if(!(event instanceof NavigationEnd)) return;
    const path=event.urlAfterRedirects;
    const p=this.paths;
    this.sidenavOpened$.next(false);
    this.selectingActivated$.next(p.selecting.eq(path));
    this.shoppingActivated$.next(p.shopping.eq(path));
    this.doneActivated$.next(p.done.eq(path));
    this.departmentsActivated$.next(p.departments.eq(path));
  }

}
