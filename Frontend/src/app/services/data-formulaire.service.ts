import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataFormulaireService {
  uri = 'http://demandeinfo.mairie-clichy.fr:4000';
  constructor(private http: HttpClient) { }
  Recherche(recherche){
    return this.http.post(`${this.uri}/DataForms`,recherche)
  }
  Recherche_spec(recherche){
    return this.http.post(`${this.uri}/DataFormr`,recherche)
  }
  Ajouter(formulaire){
    return this.http.post(`${this.uri}/DataForm`,formulaire)
  }
  Modifier(formulaire){
    return this.http.put(`${this.uri}/DataForm`,formulaire)
  }
  Supprimer(_id){
    return this.http.delete(`${this.uri}/DataForm/`+_id)
  }
}
