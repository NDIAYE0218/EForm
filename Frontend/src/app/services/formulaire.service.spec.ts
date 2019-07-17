import { TestBed,inject } from '@angular/core/testing';

import { FormulaireService } from './formulaire.service';
describe('AteliersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [FormulaireService]
  })
  );
  it('should be created', inject([FormulaireService],(service: FormulaireService)=>{
    expect(service).toBeTruthy();
  }))
});
