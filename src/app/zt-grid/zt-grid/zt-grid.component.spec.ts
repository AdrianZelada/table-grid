import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtGridComponent } from './zt-grid.component';

describe('ZtGridComponent', () => {
  let component: ZtGridComponent;
  let fixture: ComponentFixture<ZtGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZtGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
