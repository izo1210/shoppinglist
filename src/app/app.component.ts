import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Paths } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Shopping list';
  readonly sidenavOpened$=new BehaviorSubject<boolean>(false);
  paths=Paths.get;
  readonly writingActivated$=new BehaviorSubject<boolean>(false);
  readonly shoppingActivated$=new BehaviorSubject<boolean>(false);
  readonly doneActivated$=new BehaviorSubject<boolean>(false);
  readonly departmentsActivated$=new BehaviorSubject<boolean>(false);


  constructor(
    public router: Router,
  )
  {
    router.events.subscribe(event=>this.onRouterEvent(event));
  }

  onRouterEvent(event: any): void
  {
    if(!(event instanceof NavigationEnd)) return;
    const path=event.urlAfterRedirects;
    const p=this.paths;
    this.sidenavOpened$.next(false);
    this.writingActivated$.next(p.selecting.eq(path));
    this.shoppingActivated$.next(p.shopping.eq(path));
    this.doneActivated$.next(p.done.eq(path));
    this.departmentsActivated$.next(p.departments.eq(path));
  }

}
