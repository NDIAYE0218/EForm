import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormulaireService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  Recherche(recherche){
    return this.http.post(`${this.uri}/Formulaires`,recherche)
  }
  Ajouter(formulaire){
    return this.http.post(`${this.uri}/Formulaire`,formulaire)
  }
  Modifier(formulaire){
    return this.http.put(`${this.uri}/Formulaire`,formulaire)
  }
  Supprimer(_id){
    return this.http.delete(`${this.uri}/Formulaire/`+_id)
  }
}
