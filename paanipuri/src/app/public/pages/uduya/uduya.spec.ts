import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uduya } from './uduya';

describe('Uduya', () => {
  let component: Uduya;
  let fixture: ComponentFixture<Uduya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uduya],
    }).compileComponents();

    fixture = TestBed.createComponent(Uduya);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
