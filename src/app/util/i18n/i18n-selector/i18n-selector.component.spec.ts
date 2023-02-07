import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nSelectorComponent } from './i18n-selector.component';

describe('I18nSelectorComponent', () => {
  let component: I18nSelectorComponent;
  let fixture: ComponentFixture<I18nSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I18nSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I18nSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
