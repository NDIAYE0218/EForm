import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormulaireService } from '../../../services/formulaire.service'
import { DataFormulaireService } from '../../../services/data-formulaire.service'
import { } from '@angular/platform-browser'
import Swal from 'sweetalert2'
import * as jsPDF from 'jspdf'
@Component({
  selector: 'app-nouvel-demande',
  templateUrl: './nouvel-demande.component.html',
  styleUrls: ['./nouvel-demande.component.css']
})
export class NouvelDemandeComponent implements OnInit {
  date_creation = ""
  tot_chmps_oblige = 0
  FormData = []
  style = ""
  data_form = []
  nom_tmp = []
  formulaire = { titre: "", Emailvalidation: "", boutton: { Nom: "Valider", Couleur: "#4a488d" }, donne: [], date_creation: "" }
  code_demande=""
  Link="http://demandeinfo.mairie-clichy.fr:4200/#/"
  titre=""
  constructor(private serviceformulaire: FormulaireService, private dataserviceform:DataFormulaireService, private params: ActivatedRoute, private router: Router) { }

  ngOnInit() { this.initialisation() }
  initialisation() {
    this.date_creation = this.params.snapshot.paramMap.get('date_creation')
    this.serviceformulaire.Recherche({ date_creation: this.date_creation }).subscribe((data: any) => {
      if (data.length == 0)
        Swal.fire({ type: "error", text: "Ce lien n'est pas valide" }).then(() => { this.router.navigate(['/Acceuil']) })
      else {
        this.initialistion_defaultvalue(data[0].donne)
        this.serviceformulaire.Initialise_titre(data[0].titre)
        this.titre=data[0].titre
        this.formulaire = data[0]
        this.FormData = data[0].donne
        this.style = this.formulaire.boutton.Couleur
      }
    })
  }
  initialistion_defaultvalue(data: any) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].oblig)
        this.save_Value(data[i].type, data[i].nomChamp, data[i].defaut, data[i].oblig)
      if ((typeof data[i].defaut == "string" && data[i].defaut != "" && data[i].defaut != "Moyen" && data[i].defaut != "Grand" && data[i].defaut != "Petit") || typeof data[i].defaut == "number" || typeof data[i].defaut == "boolean")
        this.save_Value(data[i].type, data[i].nomChamp, data[i].defaut, data[i].oblig)
    }
  }
  verifie_champs() {
    var ret = false
    for (var i = 0; i < this.data_form.length; i++)
      if (this.data_form[i].oblig)
        if ((typeof this.data_form[i].valeur == "string" && this.data_form[i].valeur == "") || (typeof this.data_form[i].valeur == "string" && this.data_form[i].valeur != "" && this.data_form[i].type == "email" && (!this.data_form[i].valeur.includes('@') || !this.data_form[i].valeur.includes('.') || this.data_form[i].valeur.length < 4)) || (typeof this.data_form[i].valeur == "number" && Number.isNaN(this.data_form[i].valeur)))
          ret = true
    return ret
  }
  save_Value(type, nomchmp, valeur, oblig,send_text="") {
    var jsn = { nom: nomchmp, valeur: (type == "number") ? parseInt(valeur) : valeur, type: type, oblig: oblig ,message:send_text}
    if (this.nom_tmp.includes(nomchmp))
      this.data_form[this.nom_tmp.indexOf(nomchmp)] = jsn
    else {
      this.nom_tmp.push(nomchmp)
      this.data_form.push(jsn)
    }
  }
  Pdf_downoald(code_dem){
    var img = new Image();
    img.src = '../../../../assets/img/images.png';
    var img1 = new Image();
    img1.src = '../../../../assets/img/logo.PNG';
    var doc = new jsPDF();
    doc.addImage(img1, 'PNG', 1, 2,45,16);
    doc.addImage(img, 'PNG', 160, 2,45,16);
    doc.setFontSize(25);doc.setTextColor(74,72,141)
    doc.setFontType('bold');doc.text(22, 37, this.titre+':');
    var long=40
    for(var i=0;i<this.FormData.length;i++){
      if(long>270){long=22;doc.addPage()}else{long+=10}
      var valeur=this.acces_valeur(this.FormData[i].nomChamp)
      if(valeur==null)
      {
        if(this.FormData[i].defaut=="Grand")
        doc.setFontSize(16);
        else if (this.FormData[i].defaut=="Moyen")
        doc.setFontSize(14);
        else
        doc.setFontSize(12);
        doc.setTextColor(74,72,141);doc.setFontType('bold');doc.text(25, long, this.FormData[i].nomChamp+'')
      
      }
      else
      {
        if(typeof valeur=="boolean")
        {
          doc.setFontSize(12);doc.setTextColor(0,0,0);doc.setFontType('bold');
          if(valeur)
          doc.rect(25, long-4, 5, 5, 'F')
          else
          doc.rect(25, long-4, 5, 5)
         doc.setFontType('');doc.text(35, long, this.FormData[i].nomChamp+'')
        }
        else
        {
          valeur=valeur+''
          doc.setFontSize(12);doc.setTextColor(0,0,0);doc.setFontType('bold');doc.text(25, long, this.FormData[i].nomChamp+':');
          if(this.FormData[i].nomChamp.length>42) //taille de debordement
          {
            var sub_part=valeur.length/50
            for(var j=0;j<sub_part;j++)
            {
              if(j==sub_part)
              break;
              long+=5
              doc.setFontType('');doc.text(30, long+5, valeur.substring(j*50,(j*50)+50))
            }
            long+=5
          }
          else
          {
            if(valeur.length>40)
            {
              var sub_part= Math.floor(valeur.length/100)+1
            long=long+5
            for(var j=0;j<sub_part;j++)
            {
              if(j==sub_part)
              break;
              long=long+5
              var val_tmp=valeur.substring(j*100,((j+1)*100))
              doc.setFontType('');doc.text(30, (long+5), val_tmp)
            }
            long=long+5
            }
            else
            doc.setFontType('');doc.text(80, long, valeur)
          }

        }
      }
    }
    doc.save(this.titre+code_dem+ '.pdf');
  }
  EnregistrerDemande() {
    var verif = this.verifie_champs()
    if (verif)
      Swal.fire("veuillez remplir correctement tous les champs obligatoires SVP")
    else {
      var data={id_form:this.date_creation,data:this.data_form}
      this.dataserviceform.Ajouter(data).subscribe((data:any)=>{
        this.code_demande=data
        this.Pdf_downoald(data)
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
  acces_valeur(nom_chmp){
    var k=this.nom_tmp.indexOf(nom_chmp)
    return (k==-1)?null:this.data_form[k].valeur
  }
}

