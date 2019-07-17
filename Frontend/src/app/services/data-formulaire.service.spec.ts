import { TestBed,inject } from '@angular/core/testing';

import { DataFormulaireService } from './data-formulaire.service';

describe('AteliersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DataFormulaireService]
  })
  );
  it('should be created', inject([DataFormulaireService],(service: DataFormulaireService)=>{
    expect(service).toBeTruthy();
  }))
});
