import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { FormulaireService } from '../../../services/formulaire.service'
import { DataFormulaireService } from '../../../services/data-formulaire.service'
import * as jsPDF from 'jspdf'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-suivre-demande',
  templateUrl: './suivre-demande.component.html',
  styleUrls: ['./suivre-demande.component.css']
})
export class SuivreDemandeComponent implements OnInit {
  shearchform:FormGroup
  date_creation=""
  date_demande=""
  data_demande={}
  FormData=[]
  data_form
  Etat=-1
  date_de_demande=""
  titre=""
  nom_tmp=[]
  constructor(private serviceformulaire: FormulaireService, private dataserviceform:DataFormulaireService,private fb: FormBuilder,private router:Router, private params: ActivatedRoute) {
    this.shearchform = this.fb.group({
      Recherche:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]]
    })
  }

  ngOnInit() {
    this.initialisation()
  }
  initialisation(){
    this.date_creation = this.params.snapshot.paramMap.get('date_creation')
    this.date_demande = this.params.snapshot.paramMap.get('date_demande')
    if(this.date_demande!=null)
    {this.shearch_form(this.date_demande);this.shearchform.controls.Recherche.setValue(this.date_demande)}
    this.serviceformulaire.Recherche({ date_creation: this.date_creation }).subscribe((data: any) => {
      if(data.length==0)
      Swal.fire({type:"error",text:"ce lien n'est pas valide"}).then(() => { this.router.navigate(['/Acceuil']) })
      else
      this.FormData = data[0].donne
      this.serviceformulaire.Initialise_titre(data[0].titre)
      this.titre=data[0].titre
    })
  }
  shearch_form(valeur){
    this.date_demande=valeur
    this.dataserviceform.Recherche({id_form:this.date_creation,dte_dem:valeur}).subscribe((data:any)=>{
      this.data_demande=data[0]
      if(data[0]!=undefined)
     {
        this.data_form=data[0].data
        this.Etat=data[0].Date_etat[data[0].Date_etat.length-1].etat
        var event = new Date(parseInt(data[0].Date_etat[data[0].Date_etat.length-1].date));
        console.log(data[0].Date_etat[data[0].Date_etat.length-1].date)
        this.date_de_demande=event.toLocaleDateString('fr-FR')
        for(var i=0;i<this.data_form.length;i++)
        this.nom_tmp.push(this.data_form[i].nom)

    }
    })
  }
  Pdf_downoald(code_dem=this.date_demande){
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
        if(valeur=="true" || valeur=="false")
        {
          doc.setFontSize(12);doc.setTextColor(0,0,0);doc.setFontType('bold');
          if(valeur=="true")
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
  acces_valeur(nom_chmp){
    var k=this.nom_tmp.indexOf(nom_chmp)
    return (k==-1)?null:this.data_form[k].valeur
  }
  match(){
    return !(typeof this.data_demande=='undefined')
  }
}
