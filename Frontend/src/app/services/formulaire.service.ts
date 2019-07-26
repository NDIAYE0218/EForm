import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "angular2-cookie/core";
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FormulaireService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient,private cookieservice: CookieService, private router: Router) { }
  Recherche(recherche){
    return this.http.post(`${this.uri}/Formulaires`,recherche)
  }
  Ajouter(formulaire){
    return this.http.post(`${this.uri}/Formulaire`,formulaire)
  }
  Modifier(formulaire){
    return this.http.put(`${this.uri}/Formulaires`,formulaire)
  }
  Supprimer(_id){
    return this.http.delete(`${this.uri}/Formulaires/`+_id)
  }
  NewMDP(data){
    return this.http.put(`${this.uri}/Administrations`,data)
  }
  Forget(date_creation,email){
    return this.http.get(`${this.uri}/Administrations/`+date_creation+'/'+email)
  }
  Connexion(data){
    return this.http.post(`${this.uri}/Administrations`,data)
  }
  Access(date_creation,date_demande,email=this.cookieservice.get('email'),Crypto=this.cookieservice.get('tempo')){
    this.http.get(`${this.uri}/Administrations/`+date_creation+'/'+email+'/'+Crypto).subscribe((data:any)=>{
      if(data!="ok")
      this.router.navigate(['/Administration/'+date_creation])
      else
      this.router.navigate(['/Suivis/'+date_creation+'/'+date_demande])
    })
  }
  Deconnecte(date_creation){
    this.cookieservice.removeAll()
    this.router.navigate(['/Administration/'+date_creation])
  }
  Initialise_conne(email,Crypto){
    this.cookieservice.put("email",email)
    this.cookieservice.put("tempo",Crypto)
    }
  Initialise_titre(titre){this.cookieservice.put("titre",titre)}
}
