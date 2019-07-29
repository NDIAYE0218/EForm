import { Component, OnInit } from '@angular/core';
import {FormulaireService} from '../../../services/formulaire.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-gerer-formulaire',
  templateUrl: './gerer-formulaire.component.html',
  styleUrls: ['./gerer-formulaire.component.css']
})
export class GererFormulaireComponent implements OnInit {
  Donnee=[]
  Link="http://demandeinfo.mairie-clichy.fr/#/"
  ColumnsInformation = ['Titre', 'Administrateur', 'liena','lienp','lienSui', 'act']
  constructor(private serviceformulaire:FormulaireService) { }

  ngOnInit() {this.findData()  }
  findData(){
    this.serviceformulaire.Initialise_titre("Generateur de formulaire electronique")
    this.serviceformulaire.Recherche({}).subscribe((data:any)=>{
      this.Donnee=data
    })
  }
  Supprimer(_id){
    Swal.fire({
      title: 'Vous êtes sur le point de supprimer un formulaire',
      text: "êtes vous sûr?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer',
      cancelButtonText:"Retour"
    }).then((result) => {
      if (result.value) {
        this.serviceformulaire.Supprimer(_id).subscribe(()=>{
          Swal.fire({
            position: 'top-end',
            type:"success",
            width:"20%",
            title: 'Formulaire supprimé!',
            showConfirmButton: false,
            timer: 1000
          })
          this.findData()
        })
      }
    })
  }
}
