import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DiffcheckerComponent} from './diffchecker.component';

describe('DiffcheckerComponent', () => {
  let component: DiffcheckerComponent;
  let fixture: ComponentFixture<DiffcheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffcheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
