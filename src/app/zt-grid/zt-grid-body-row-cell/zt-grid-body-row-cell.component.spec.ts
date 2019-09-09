import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtGridBodyRowCellComponent } from './zt-grid-body-row-cell.component';

describe('ZtGridBodyRowCellComponent', () => {
  let component: ZtGridBodyRowCellComponent;
  let fixture: ComponentFixture<ZtGridBodyRowCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZtGridBodyRowCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtGridBodyRowCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
