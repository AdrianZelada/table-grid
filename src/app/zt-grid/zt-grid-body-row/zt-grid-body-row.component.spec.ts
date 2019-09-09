import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtGridBodyRowComponent } from './zt-grid-body-row.component';

describe('ZtGridBodyRowComponent', () => {
  let component: ZtGridBodyRowComponent;
  let fixture: ComponentFixture<ZtGridBodyRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZtGridBodyRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtGridBodyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
