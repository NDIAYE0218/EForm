import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { FormulaireService } from '../../../services/formulaire.service'
import { DataFormulaireService } from '../../../services/data-formulaire.service'
import Swal from 'sweetalert2';
import * as jsPDF from 'jspdf'
@Component({
  selector: 'app-gerer-demande',
  templateUrl: './gerer-demande.component.html',
  styleUrls: ['./gerer-demande.component.css']
})
export class GererDemandeComponent implements OnInit {
  date_creation=""
  date_demande=""
  shearchform:FormGroup
  data_demande=[]
  affiche=0
  ColumnsInformation = ['numD', 'dte', 'Etat', 'act']
  FormData=[]
  titre=""
  constructor(private serviceformulaire: FormulaireService, private dataserviceform:DataFormulaireService,private fb: FormBuilder,private router:Router, private params: ActivatedRoute) {
    this.shearchform = this.fb.group({
      Recherche:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]]
    })
   }
  ngOnInit() {this.initialise()}
  initialise(){
    this.date_creation = this.params.snapshot.paramMap.get('date_creation')
    this.date_demande = this.params.snapshot.paramMap.get('date_demande')
    this.date_demande=(this.date_demande!=null)?this.date_demande:""
    this.serviceformulaire.Access(this.date_creation,this.date_demande)
    this.serviceformulaire.Recherche({ date_creation: this.date_creation }).subscribe((data: any) => {
      if(data.length==0)
      Swal.fire({type:"error",text:"ce lien n'est pas valide"}).then(() => { this.router.navigate(['/Acceuil']) })
      else
    {
      this.FormData = data[0].donne
      this.serviceformulaire.Initialise_titre(data[0].titre)
      this.titre=data[0].titre
      if(this.date_demande!="")
    {this.shearch_form(this.date_demande)
      this.shearchform.controls.Recherche.setValue(this.date_demande)}
    else
    this.shearch_form("",0,"",1)}
  })
  }
  shearch_form(val="",eta=0,date="",option=0){
    if(option==0)
    this.dataserviceform.Recherche({id_form:this.date_creation,dte_dem:val}).subscribe((data:any)=>{
      if(data.length>0)
      this.data_demande=data
      else
      this.shearch_form("",0,"",1)
    })
    else if(option==1)
    this.dataserviceform.Recherche({id_form:this.date_creation}).subscribe((data:any)=>{this.data_demande=data;})
    else if(option==2)
    this.dataserviceform.Recherche_spec({date_creation:this.date_creation,etat:eta,option:1}).subscribe((data:any)=>{
      if(data.length>0)
      this.data_demande=data
      else
      this.shearch_form("",0,"",1)
    })
    else if(option==3)
    this.dataserviceform.Recherche_spec({date_creation:this.date_creation,date:date,option:0}).subscribe((data:any)=>{
      if(data.length>0)
      this.data_demande=data
      else
      this.shearch_form("",0,"",1)
    })
  }
  getDate(dte){
    var event = new Date(parseInt(dte))
    return event.toLocaleDateString('fr-FR')
  }
  getEtat(val){
    return (val==0)?"En attente":(val==1)?"Refusé":(val==2)?"Accepté/En cours de traitement":"traité"
  }
  change(element,option){
    var titre=(option==1)?"Refuser":(option==2)?"Accepter":"Traiter"
    Swal.fire({
      title: 'Details de "'+titre+'"',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'on'
      },
      showCancelButton: true,
      cancelButtonText: "Retour",
      confirmButtonText: titre,
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.value) {
        var dte= new Date()
        var detail={etat:option,date:dte.getTime()+'',detail:result.value}
        element.Date_etat.push(detail)
        this.dataserviceform.Modifier(element).subscribe((data:any)=>{})
      }
    })
   }
   Pdf_downoald(element,code_dem){
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
      var valeur=this.acces_valeur(this.FormData[i].nomChamp,element)
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
  init_nomchamp(elem){
    var ret=[]
    for(var i=0;i<elem.length;i++)
    ret.push(elem[i].nom)
    return ret
  }
  acces_valeur(nom_chmp,elem){
    var k=this.init_nomchamp(elem).indexOf(nom_chmp)
    return (k==-1)?null:elem[k].valeur
  }
  deconnecte(){
    this.serviceformulaire.Deconnecte(this.date_creation)
  }
}
