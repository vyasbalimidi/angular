import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoSheetComponent } from './eco-sheet.component';

describe('EcoSheetComponent', () => {
  let component: EcoSheetComponent;
  let fixture: ComponentFixture<EcoSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
