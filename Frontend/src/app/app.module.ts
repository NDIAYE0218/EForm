import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreerFormulaireComponent } from './compoments/Administration/creer-formulaire/creer-formulaire.component';
import { GererFormulaireComponent } from './compoments/Administration/gerer-formulaire/gerer-formulaire.component';
import { GererDemandeComponent } from './compoments/Supervision/gerer-demande/gerer-demande.component';
import { NouvelDemandeComponent } from './compoments/Demandes/nouvel-demande/nouvel-demande.component';
import { SuivreDemandeComponent } from './compoments/Demandes/suivre-demande/suivre-demande.component';
import { AuthentificationComponent } from './compoments/Supervision/authentification/authentification.component';
import { PresentationComponent } from './compoments/presentation/presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatFormFieldModule,MatRadioModule, MatInputModule, MatExpansionModule,MatCheckboxModule, MatProgressBarModule, MatGridListModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatMenuModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatAutocompleteModule, MatTabsModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookieService } from "angular2-cookie/services/cookies.service";
//importation des services
import {FormulaireService} from './services/formulaire.service'
import {DataFormulaireService} from './services/data-formulaire.service';

@NgModule({
  declarations: [
    AppComponent,
    CreerFormulaireComponent,
    GererFormulaireComponent,
    GererDemandeComponent,
    NouvelDemandeComponent,
    SuivreDemandeComponent,
    AuthentificationComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatGridListModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [FormulaireService,DataFormulaireService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
