import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CsvValidatorComponent} from './csv-validator.component';

describe('CsvValidatorComponent', () => {
  let component: CsvValidatorComponent;
  let fixture: ComponentFixture<CsvValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
