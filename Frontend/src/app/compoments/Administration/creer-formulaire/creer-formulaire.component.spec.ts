import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerFormulaireComponent } from './creer-formulaire.component';

describe('CreerFormulaireComponent', () => {
  let component: CreerFormulaireComponent;
  let fixture: ComponentFixture<CreerFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
