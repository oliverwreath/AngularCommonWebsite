import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SqlCheatsheetComponent} from './sql-cheatsheet.component';

describe('SqlCheatsheetComponent', () => {
  let component: SqlCheatsheetComponent;
  let fixture: ComponentFixture<SqlCheatsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlCheatsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlCheatsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
