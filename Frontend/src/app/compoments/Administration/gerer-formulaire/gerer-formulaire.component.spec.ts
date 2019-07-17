import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererFormulaireComponent } from './gerer-formulaire.component';

describe('GererFormulaireComponent', () => {
  let component: GererFormulaireComponent;
  let fixture: ComponentFixture<GererFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
