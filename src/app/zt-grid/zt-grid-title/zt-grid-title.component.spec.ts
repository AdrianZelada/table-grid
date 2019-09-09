import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtGridTitleComponent } from './zt-grid-title.component';

describe('ZtGridTitleComponent', () => {
  let component: ZtGridTitleComponent;
  let fixture: ComponentFixture<ZtGridTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZtGridTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtGridTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
