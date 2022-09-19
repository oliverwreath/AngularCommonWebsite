import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CaseconverterComponent} from './caseconverter.component';

describe('CaseconverterComponent', () => {
  let component: CaseconverterComponent;
  let fixture: ComponentFixture<CaseconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseconverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
