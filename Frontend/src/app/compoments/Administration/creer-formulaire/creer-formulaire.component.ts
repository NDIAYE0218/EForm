import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FormulaireService } from '../../../services/formulaire.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-creer-formulaire',
  templateUrl: './creer-formulaire.component.html',
  styleUrls: ['./creer-formulaire.component.css']
})
export class CreerFormulaireComponent implements OnInit {
  AjoutForm: FormGroup
  AjoutEmail: FormGroup
  InformationForm: FormGroup
  vu_creation = true
  oblig = false
  send = false
  dis = true
  valid_list = true
  chx_def = false
  mess = ""
  titre_formulaire = ""
  liste = []
  FormData = []
  Emailvalidation = []
  formulaire = { titre: "", Emailvalidation: "", boutton: { Nom: "Valider", Couleur: "#4a488d" }, donne: [], date_creation: "" }
  Link = "http://localhost:4200/"
  uri = ""
  action = true
  constructor(private fb: FormBuilder, private serviceformulaire: FormulaireService, private params: ActivatedRoute, private router: Router) {
    this.AjoutForm = this.fb.group({
      Nom: ['', [Validators.required, Validators.minLength(3)]],
    })
    this.InformationForm = this.fb.group({
      Titre: ['', [Validators.required, Validators.minLength(3)]],
      TitreBouttont: ['', [Validators.nullValidator]],
    })
    this.AjoutEmail = this.fb.group({
      Email: ['', [Validators.required, Validators.email, Validators.minLength(7)]],
    })
  }

  ngOnInit() { this.initialise() }
  initialise() {
    this.serviceformulaire.Initialise_titre("Generateur de formulaire electronique")
    var action = this.params.snapshot.paramMap.get('action')
    if (action == "Nouveau")
      this.formulaire = { titre: "", Emailvalidation: "", boutton: { Nom: "Valider", Couleur: "#4a488d" }, donne: [], date_creation: "" }
    else {
      this.serviceformulaire.Recherche({ date_creation: action }).subscribe((data: any) => {
        if (data.length == 0)
          this.router.navigate(['/Acceuil'])
        else {
        this.formulaire = data[0]
          this.Emailvalidation = data[0].Emailvalidation.split(',')
          this.FormData = data[0].donne
          this.action = false
        }
      })
    }
    this.vu_creation = true
  }
  NouveauChamp(type, Nom, min, max, def, complexite) {
    this.AjoutForm.reset()
    var data = {
      nomChamp: Nom,
      type: type,
      oblig: this.oblig,
      defaut: (complexite == 1) ? this.chx_def : def,
      maxi: max,
      mini: min,
      send: this.send,
      send_texte: this.mess,
      list: this.liste,
      complexite: complexite //, si 0 input, si 1 checkbox, si 2 texterea, si 3 radiobouttont, si 4 select, 5 pour les titres
    }
    this.FormData.push(data)
    this.oblig = false; this.send = false; this.mess = ""; this.liste = []; this.chx_def = false
  }
  changeoblig() {
    this.oblig = !this.oblig
  }
  changdefchx() {
    this.chx_def = !this.chx_def
  }
  changesend() {
    this.send = !this.send
  }
  changemessage(mess) {
    this.mess = mess
  }
  changedis(valeur) {
    this.dis = (valeur.length >= 3) ? false : true
  }
  Nouvellist(valeur_ls) {
    this.liste.push(valeur_ls)
    this.dis = true
    this.valid_list = (this.liste.length > 1) ? false : true
  }
  supprimer_elem(i) {
    this.liste.splice(i, 1)
    this.valid_list = (this.liste.length > 1) ? false : true
  }
  supprimer_champ(i) {
    this.FormData.splice(i, 1)
  }
  supprime_admin(i) {
    this.Emailvalidation.splice(i, 1)
  }
  addAdmin(email_adm) {
    this.Emailvalidation.push(email_adm)
    this.AjoutEmail.reset()
  }
  Publie_form(titre_formulaire, TitreBouttont, couleurBouttont, action = 1) {
    var formulaire = {
      titre: titre_formulaire,
      Emailvalidation: this.Emailvalidation.join(',').toLowerCase(),
      boutton: { Nom: TitreBouttont, Couleur: couleurBouttont },
      donne: this.FormData
    }
    if (action == 1)
      this.serviceformulaire.Ajouter(formulaire).subscribe((data: any) => {
        if (data != 'ko') {
        this.uri = data
          this.vu_creation = false
          this.titre_formulaire = titre_formulaire
        }
        else
          Swal.fire({ type: "warning", text: "un formulaire portant le même titre existe déjà, veuillez changer de titre." })
      })
    else {
      this.serviceformulaire.Recherche({ titre: titre_formulaire }).subscribe((data_r: any) => {
        if (data_r.length > 0 && titre_formulaire!=this.formulaire.titre)
          Swal.fire({ type: "warning", text: "un formulaire portant le même titre existe déjà, veuillez changer de titre." })
        else {
          this.formulaire.titre = titre_formulaire; this.formulaire.Emailvalidation = this.Emailvalidation.join(','); this.formulaire.boutton = { Nom: TitreBouttont, Couleur: couleurBouttont }; this.formulaire.donne = this.FormData
          this.serviceformulaire.Modifier(this.formulaire).subscribe((data: any) => {
            this.uri = this.formulaire.date_creation
            this.vu_creation = false
            this.titre_formulaire = titre_formulaire
          })
        }
      })
    }
  }
  copier(lien) {
    lien.select()
    document.execCommand("copy");
    Swal.fire({
      position: 'top-end',
      width: "12%",
      title: 'Lien copié!',
      showConfirmButton: false,
      timer: 1000
    })
  }
}