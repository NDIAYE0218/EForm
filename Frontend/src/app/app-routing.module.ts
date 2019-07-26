import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreerFormulaireComponent } from './compoments/Administration/creer-formulaire/creer-formulaire.component';
import { GererFormulaireComponent } from './compoments/Administration/gerer-formulaire/gerer-formulaire.component';
import { NouvelDemandeComponent } from './compoments/Demandes/nouvel-demande/nouvel-demande.component';
import { SuivreDemandeComponent } from './compoments/Demandes/suivre-demande/suivre-demande.component';
import { AuthentificationComponent } from './compoments/Supervision/authentification/authentification.component';
import { GererDemandeComponent } from './compoments/Supervision/gerer-demande/gerer-demande.component';
import { PresentationComponent } from './compoments/presentation/presentation.component';
const routes: Routes = [
  { path: 'Informatique/:action', component:CreerFormulaireComponent  },
  { path: 'Informatique', component:GererFormulaireComponent  },
  { path: 'Demande/:date_creation', component:NouvelDemandeComponent },
  { path: 'Suivre/:date_creation', component:SuivreDemandeComponent  },
  { path: 'Suivre/:date_creation/:date_demande', component:SuivreDemandeComponent  },
  { path: 'Administration/:date_creation/:crypto', component:AuthentificationComponent  },
  { path: 'Administration/:date_creation', component:AuthentificationComponent  },
  { path: 'Suivis/:date_creation', component:GererDemandeComponent  },
  { path: 'Suivis/:date_creation/:date_demande', component:GererDemandeComponent  },
  { path: 'Acceuil', component:PresentationComponent  },
  { path: '', redirectTo: 'Acceuil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
