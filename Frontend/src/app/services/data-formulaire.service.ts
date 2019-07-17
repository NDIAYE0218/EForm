import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataFormulaireService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  Recherche(recherche){
    return this.http.post(`${this.uri}/DataForms`,recherche)
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