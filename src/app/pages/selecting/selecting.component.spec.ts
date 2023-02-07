import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectingComponent } from './selecting.component';

describe('WritingComponent', () => {
  let component: SelectingComponent;
  let fixture: ComponentFixture<SelectingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
