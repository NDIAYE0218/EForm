import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { FormulaireService } from '../../../services/formulaire.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  NewForm: FormGroup
  ConForm: FormGroup
  date_creation = ""
  crypto = ""
  vue_con: boolean
  vue_alerte = false
  vue_conform = false
  constructor(private serviceformulaire: FormulaireService, private fb: FormBuilder, private router: Router, private params: ActivatedRoute) {
    this.NewForm = this.fb.group({
      Email: ['', [Validators.required, Validators.minLength(7), Validators.email]],
      MDP: ['', [Validators.required, Validators.minLength(8)]],
      Confirm: ['', [Validators.required, Validators.minLength(8)]]
    })
    this.ConForm = this.fb.group({
      Email: ['', [Validators.required, Validators.minLength(7), Validators.email]],
      MDP: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  ngOnInit() { this.initialise() }
  initialise() {
    this.date_creation = this.params.snapshot.paramMap.get('date_creation')
    this.serviceformulaire.Access(this.date_creation,"")
    this.crypto = this.params.snapshot.paramMap.get('crypto')
    this.vue_con = (this.crypto == null) ? true : false
  }
  NouveauMDP(Email, MDP) {
    var data = { date_creation: this.date_creation, Crypto: this.crypto, Email: Email.toLowerCase(), MDP }
    this.serviceformulaire.NewMDP(data).subscribe((data: any) => {
      if (data == 'ok') {
        Swal.fire({
          position: 'top-end',
          width: "50%",
          title: 'Mot de passe changé, connecter vous!',
          showConfirmButton: false,
          timer: 1000,
          type: "success"
        })
        this.vue_con = true
      }
      else if (data == 'ko1')
        Swal.fire({
          position: 'top-end',
          width: "50%",
          title: 'Ce lien n\'est pas valide!',
          showConfirmButton: false,
          timer: 1200,
          type: "error"
        })
      else
        Swal.fire({
          position: 'top-end',
          width: "50%",
          title: 'Ce lien n\'est plus valide!',
          showConfirmButton: false,
          timer: 1200,
          type: "warning"
        })
    })
  }
  MDPOublie(Email) {
    this.serviceformulaire.Forget(this.date_creation, Email.toLowerCase()).subscribe((data: any) => {
      if (data == 'ok') {
        Swal.fire({
          position: 'top-end',
          width: "50%",
          text: 'Vous avez recu un email. Celui-ci vous permettrat de changer votre mot de passe',
          showConfirmButton: false,
          timer: 2000,
          type: "success"
        })
      }
      else if (data == 'ko1')
        Swal.fire({
          position: 'top-end',
          width: "50%",
          title: 'Ce lien n\'est pas valide!',
          showConfirmButton: false,
          timer: 1200,
          type: "error"
        })
      else
        Swal.fire({
          position: 'top-end',
          width: "50%",
          title: 'aucune correpondance avec cet addresse email',
          showConfirmButton: false,
          timer: 1300,
          type: "warning"
        })
    })
  }
  oublie_act() {
    Swal.fire({
      title: 'Mot de passe oublié',
      input: 'email',
      inputAttributes: {
        autocapitalize: 'on'
      },
      showCancelButton: true,
      cancelButtonText: "Retour",
      confirmButtonText: 'recevoir email',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.value) {
        this.MDPOublie(result.value)
      }
    })
  }
  Connexion(Email, MDP) {
    var data = { date_creation: this.date_creation, Email: Email.toLowerCase(), MDP }
    this.serviceformulaire.Connexion(data).subscribe((data: any) => {
      if (data == 'ko1')
        Swal.fire({
          position: 'top-end',
          width: "50%",
          title: 'Ce lien n\'est pas valide!',
          showConfirmButton: false,
          timer: 1200,
          type: "error"
        })
      if (data == 'ko2')
        Swal.fire({
          position: 'top-end',
          width: "50%",
          title: 'login ou mot de passe incorrecte',
          showConfirmButton: false,
          timer: 1200,
          type: "warning"
        })
      else {
        this.serviceformulaire.Initialise_conne(Email, data)
        this.router.navigate(['/Suivis/'+this.date_creation])
      }
    })
  }
  Conformite(MDP, Confirm) { this.vue_conform = MDP == Confirm; return MDP == Confirm }
  conformiteMDP(MDP) { //verifie la conformité du password
    var format = /[é&çà%ù£$¨^:!§;,.£ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var number = "1 2 3 4 5 6 7 8 9 0"
    var ret1 = format.test(MDP)
    var ret2 = false
    var ret3 = MDP.length >= 8
    var MDP_sp = MDP.split('')
    for (var i = 0; i < MDP_sp.length; i++)
      if (number.includes(MDP[i]))
        ret2 = true
    this.vue_alerte = ret1 && ret2 && ret3
    return ret1 && ret2 && ret3
  }
}
