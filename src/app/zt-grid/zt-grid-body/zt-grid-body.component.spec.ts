import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtGridBodyComponent } from './zt-grid-body.component';

describe('ZtGridBodyComponent', () => {
  let component: ZtGridBodyComponent;
  let fixture: ComponentFixture<ZtGridBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZtGridBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtGridBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
