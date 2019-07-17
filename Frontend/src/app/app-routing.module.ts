import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreerFormulaireComponent } from './compoments/Administration/creer-formulaire/creer-formulaire.component';
const routes: Routes = [
  { path: 'Informatique/Nouveau', component:CreerFormulaireComponent  },
  { path: 'Informatique', component:CreerFormulaireComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
