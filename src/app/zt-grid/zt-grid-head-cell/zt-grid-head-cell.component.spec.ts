import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtGridHeadCellComponent } from './zt-grid-head-cell.component';

describe('ZtGridHeadCellComponent', () => {
  let component: ZtGridHeadCellComponent;
  let fixture: ComponentFixture<ZtGridHeadCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZtGridHeadCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtGridHeadCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
