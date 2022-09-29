import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SqlValidatorComponent} from './sql-validator.component';

describe('SqlValidatorComponent', () => {
  let component: SqlValidatorComponent;
  let fixture: ComponentFixture<SqlValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
