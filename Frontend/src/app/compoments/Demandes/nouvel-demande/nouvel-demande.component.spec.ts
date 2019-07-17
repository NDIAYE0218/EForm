import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelDemandeComponent } from './nouvel-demande.component';

describe('NouvelDemandeComponent', () => {
  let component: NouvelDemandeComponent;
  let fixture: ComponentFixture<NouvelDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
