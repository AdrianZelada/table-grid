import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtGridHeadComponent } from './zt-grid-head.component';

describe('ZtGridHeadComponent', () => {
  let component: ZtGridHeadComponent;
  let fixture: ComponentFixture<ZtGridHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZtGridHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtGridHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
