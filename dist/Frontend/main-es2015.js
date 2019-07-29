(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <img src=\"../assets/img/logo.PNG\" class=\"img\">\n    <span class=\"titre\">{{titre}}</span>\n    <img src=\"../assets/img/images.png\" class=\"img\">\n</mat-toolbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compoments/Administration/creer-formulaire/creer-formulaire.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compoments/Administration/creer-formulaire/creer-formulaire.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbarmenue\">\r\n    <div style=\"width: 80%;margin: auto\">\r\n        <button mat-raised-button class=\"men-item-ad\" routerLink=\"/Informatique/Nouveau\">\r\n            Nouveau Formulaire\r\n        </button>&nbsp;&nbsp;\r\n        <button mat-raised-button class=\"men-item-ad\" routerLink=\"/Informatique\">\r\n            Voir les formulaires existant\r\n        </button>\r\n    </div>\r\n</mat-toolbar>\r\n\r\n\r\n<!-- pannel d'ajout élément -->\r\n<div *ngIf=\"vu_creation\" class=\"pannel_creation\">\r\n    <div class=\"outil\" #informationForm>\r\n        <form [formGroup]=\"InformationForm\">\r\n            <mat-form-field class=\"mat_input_nouv\">\r\n                <input matInput placeholder=\"Titre du formulaire\" type=\"text\" formControlName=\"Titre\"\r\n                    [value]=\"formulaire.titre\" required #titre_formulaire>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"mat_input_nouv\">\r\n                <input matInput placeholder=\"Titre du boutton de validation\" type=\"text\"\r\n                    [value]=\"formulaire.boutton.Nom\" formControlName=\"TitreBouttont\" value=\"Valider\" #TitreBouttont>\r\n            </mat-form-field>\r\n            <div style=\"width: 100%\">\r\n                <span class=\"list_elem\" *ngFor=\"let list of Emailvalidation;let i= index\">{{list}} &nbsp;<mat-icon\r\n                        class=\"delete_elem\" (click)=\"supprime_admin(i);email_adm.value=''\">clear</mat-icon>\r\n                </span>\r\n            </div>\r\n            <mat-form-field class=\"mat_input_nouv\">\r\n                <input matInput placeholder=\"Couleur du boutton\" type=\"color\" [value]=\"formulaire.boutton.Couleur\"\r\n                    formControlName=\"TitreBouttont\" #couleurBouttont>\r\n            </mat-form-field>\r\n            <form [formGroup]=\"AjoutEmail\" style=\"display: inline-block;width: 48%;margin-left: 2%\">\r\n                <mat-form-field style=\"width: 76.5%;\">\r\n                    <input matInput placeholder=\"email administrateur (s)\" type=\"email\" formControlName=\"Email\"\r\n                        #email_adm>\r\n                </mat-form-field>\r\n                <button mat-raised-button color=\"primary\" [disabled]=\"AjoutEmail.pristine || AjoutEmail.invalid\"\r\n                    style=\"color: white;font-size: 120%;\" (click)=\"addAdmin(email_adm.value);email_adm.value=''\">\r\n                    <mat-icon>add_circle</mat-icon>\r\n                </button>\r\n            </form>\r\n            <span class=\"delete_elem\" *ngIf=\"Emailvalidation.length==0\">Il faut au minimum un administrateur du\r\n                formulaire, et ajout un champs au formulaire</span>\r\n            <button mat-raised-button *ngIf=\"!action\"\r\n                (click)=\"Publie_form(titre_formulaire.value,TitreBouttont.value,couleurBouttont.value,0)\"\r\n                color=\"primary\" [disabled]=\"Emailvalidation.length==0 || FormData.length==0\"\r\n                style=\"color: white;font-size: 120%;width: 100%\">\r\n                <mat-icon>send</mat-icon> Enregistrer les modifications\r\n            </button>\r\n            <button mat-raised-button *ngIf=\"action\"\r\n                (click)=\"Publie_form(titre_formulaire.value,TitreBouttont.value,couleurBouttont.value)\" color=\"primary\"\r\n                [disabled]=\"InformationForm.pristine || InformationForm.invalid || Emailvalidation.length==0 || FormData.length==0\"\r\n                style=\"color: white;font-size: 120%;width: 100%\">\r\n                <mat-icon>send</mat-icon> Publier le formulaire\r\n            </button>\r\n        </form>\r\n    </div>\r\n    <div class=\"outil\" #modelisationelement>\r\n        <mat-accordion>\r\n            <mat-expansion-panel hideToggle #titr>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title style=\"width: 95%;margin: auto\">\r\n                        Titre de section\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        <mat-icon>list_alt</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <form [formGroup]=\"AjoutForm\">\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput placeholder=\"Titre de la section\" type=\"text\" formControlName=\"Nom\" required\r\n                            #titre>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <mat-select value=\"Moyen\" placeholder=\"Taille du champs\" #taille_ch>\r\n                            <mat-option value=\"Grand\">Grand</mat-option>\r\n                            <mat-option value=\"Moyen\">Moyen</mat-option>\r\n                            <mat-option value=\"Petit\">Petit</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-action-row>\r\n                        <button mat-button color=\"primary\"\r\n                            (click)=\"NouveauChamp('titre',titre.value,0,0,taille_ch.value,5)\"\r\n                            [disabled]=\"AjoutForm.pristine || AjoutForm.invalid\">Ajouter</button>\r\n                    </mat-action-row>\r\n                </form>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </div>\r\n\r\n    <div class=\"outil\" #simpleelement>\r\n        <mat-accordion>\r\n            <mat-expansion-panel hideToggle #text>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title style=\"width: 95%;margin: auto\">\r\n                        Champs de type texte\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        &nbsp; &nbsp;&nbsp;&nbsp;<mat-icon>text_format</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <form [formGroup]=\"AjoutForm\">\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput placeholder=\"Nom du champs\" type=\"text\" formControlName=\"Nom\" required #nom_t>\r\n                    </mat-form-field>\r\n\r\n                    <mat-checkbox class=\"mat_input_nouv\" style=\"margin-left: 15%\" (click)=\"changeoblig()\" #obligg>Champs\r\n                        obligatoire\r\n                    </mat-checkbox>\r\n\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput type=\"number\" min=\"0\" value=\"0\" placeholder=\"Nbr carractère mini\" #min_t>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput type=\"number\" min=\"1\" placeholder=\"Nbr carractère maxi\" #max_t>\r\n                    </mat-form-field>\r\n                    <mat-form-field style=\"width: 100%\">\r\n                        <input matInput type=\"text\" placeholder=\"Valeur par defaut\" #def_t>\r\n                    </mat-form-field>\r\n                    <mat-action-row>\r\n                        <button mat-button color=\"primary\"\r\n                            (click)=\"NouveauChamp('text',nom_t.value,min_t.value,max_t.value,def_t.value,0);min_t.value=0;max_t.value='';def_t.value='';obligg.checked=false\"\r\n                            [disabled]=\"AjoutForm.pristine || AjoutForm.invalid\">Ajouter</button>\r\n                    </mat-action-row>\r\n                </form>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel hideToggle #numb>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title style=\"width: 95%;margin: auto\">\r\n                        Champs de type nombre\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        <mat-icon>filter_9</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <form [formGroup]=\"AjoutForm\">\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput placeholder=\"Nom du champs\" type=\"text\" formControlName=\"Nom\" required #nom_n>\r\n                    </mat-form-field>\r\n\r\n                    <mat-checkbox class=\"mat_input_nouv\" style=\"margin-left: 15%\" (click)=\"changeoblig()\" #obligg_n>\r\n                        Champs\r\n                        obligatoire\r\n                    </mat-checkbox>\r\n\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput type=\"number\" placeholder=\"Valeur mini\" #min_n>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput type=\"number\" min=\"1\" placeholder=\"Valeur maxi\" #max_n>\r\n                    </mat-form-field>\r\n                    <mat-form-field style=\"width: 100%\">\r\n                        <input matInput type=\"number\" placeholder=\"Valeur par defaut\" #def_n>\r\n                    </mat-form-field>\r\n                    <mat-action-row>\r\n                        <button mat-button color=\"primary\"\r\n                            (click)=\"NouveauChamp('number',nom_n.value,min_n.value,max_n.value,def_n.value,0);min_n.value=0;max_n.value='';def_n.value='';obligg_n.checked=false\"\r\n                            [disabled]=\"AjoutForm.pristine || AjoutForm.invalid\">Ajouter</button>\r\n                    </mat-action-row>\r\n                </form>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel hideToggle #email>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title style=\"width: 95%;margin: auto\">\r\n                        Champs de type e-mail\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        &nbsp;\r\n                        <mat-icon>alternate_email</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <form [formGroup]=\"AjoutForm\">\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput placeholder=\"Nom du champs\" type=\"text\" formControlName=\"Nom\" required #nom_e>\r\n                    </mat-form-field>\r\n\r\n                    <mat-checkbox class=\"mat_input_nouv\" style=\"margin-left: 15%\" (click)=\"changeoblig()\">Champs\r\n                        obligatoire\r\n                    </mat-checkbox>\r\n\r\n                    <mat-form-field style=\"width: 100%\">\r\n                        <input matInput type=\"text\" placeholder=\"domaine obligatoire\" #def_e>\r\n                    </mat-form-field>\r\n                    <mat-checkbox style=\"width: 65%\" (click)=\"changesend()\" #obligg_e>Envoie d'email après validation du\r\n                        formulaire\r\n                    </mat-checkbox>\r\n                    <mat-form-field *ngIf=\"send\" style=\"width: 30%;margin-left: 5%\">\r\n                        <textarea matInput placeholder=\"Message a envoyer\"\r\n                            (input)=\"changemessage($event.target.value)\"></textarea>\r\n                    </mat-form-field>\r\n                    <mat-action-row>\r\n                        <button mat-button color=\"primary\"\r\n                            (click)=\"NouveauChamp('email',nom_e.value,0,100,def_e.value,0);def_e.value='';obligg_e.checked=false\"\r\n                            [disabled]=\"AjoutForm.pristine || AjoutForm.invalid\">Ajouter</button>\r\n                    </mat-action-row>\r\n                </form>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel hideToggle #textera>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title style=\"width: 95%;margin: auto\">\r\n                        Champs de type commentaire\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        <mat-icon>comment</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <form [formGroup]=\"AjoutForm\">\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput placeholder=\"Nom du champs\" type=\"text\" formControlName=\"Nom\" required #nom_tx>\r\n                    </mat-form-field>\r\n\r\n                    <mat-checkbox class=\"mat_input_nouv\" style=\"margin-left: 15%\" (click)=\"changeoblig()\" #obligg_tx>\r\n                        Champs\r\n                        obligatoire\r\n                    </mat-checkbox>\r\n\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput type=\"number\" min=\"2\" value=\"4\" placeholder=\"Nbr de ligne\" #min_tx>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput type=\"number\" min=\"1\" placeholder=\"Nbr carractère maxi\" #max_tx>\r\n                    </mat-form-field>\r\n                    <mat-form-field style=\"width: 100%\">\r\n                        <input matInput type=\"text\" placeholder=\"Valeur par defaut\" #def_tx>\r\n                    </mat-form-field>\r\n                    <mat-action-row>\r\n                        <button mat-button color=\"primary\"\r\n                            (click)=\"NouveauChamp('textarea',nom_tx.value,min_tx.value,max_tx.value,def_tx.value,2);min_tx.value=0;max_tx.value='';def_tx.value='';obligg_tx.checked=false\"\r\n                            [disabled]=\"AjoutForm.pristine || AjoutForm.invalid\">Ajouter</button>\r\n                    </mat-action-row>\r\n                </form>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel hideToggle #dte>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title style=\"width: 95%;margin: auto\">\r\n                        Champs de type Date\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        <mat-icon>date_range</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <form [formGroup]=\"AjoutForm\">\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput placeholder=\"Nom du champs\" type=\"text\" formControlName=\"Nom\" required #nom_dte>\r\n                    </mat-form-field>\r\n\r\n                    <mat-checkbox class=\"mat_input_nouv\" style=\"margin-left: 15%\" (click)=\"changeoblig()\" #obligg_dte>\r\n                        Champs\r\n                        obligatoire\r\n                    </mat-checkbox>\r\n                    <mat-action-row>\r\n                        <button mat-button color=\"primary\"\r\n                            (click)=\"NouveauChamp('date',nom_chx.value,0,0,'',0);obligg_dte.checked=false\"\r\n                            [disabled]=\"AjoutForm.pristine || AjoutForm.invalid\">Ajouter</button>\r\n                    </mat-action-row>\r\n                </form>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel hideToggle #chx>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title style=\"width: 95%;margin: auto\">\r\n                        Champs de type CheckBox\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        <mat-icon>check_box</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <form [formGroup]=\"AjoutForm\">\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput placeholder=\"Nom du champs\" type=\"text\" formControlName=\"Nom\" required #nom_chx>\r\n                    </mat-form-field>\r\n\r\n                    <mat-checkbox class=\"mat_input_nouv\" style=\"margin-left: 15%\" (click)=\"changeoblig()\" #obligg_chx>\r\n                        Champs\r\n                        obligatoire\r\n                    </mat-checkbox>\r\n\r\n                    <mat-checkbox style=\"width: 100%\" (click)=\"changdefchx()\" #def_chx>Selectionner le champs par defaut\r\n                    </mat-checkbox>\r\n                    <mat-action-row>\r\n                        <button mat-button color=\"primary\"\r\n                            (click)=\"NouveauChamp('checkbox',nom_chx.value,0,0,'',1);obligg_chx.checked=false;def_chx.checked=false\"\r\n                            [disabled]=\"AjoutForm.pristine || AjoutForm.invalid\">Ajouter</button>\r\n                    </mat-action-row>\r\n                </form>\r\n            </mat-expansion-panel>\r\n\r\n        </mat-accordion>\r\n    </div>\r\n\r\n    <div class=\"outil\" #complexeelement>\r\n        <mat-accordion>\r\n            <mat-expansion-panel hideToggle #rb>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title style=\"width: 95%;margin: auto\">\r\n                        Radio boutton\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        <mat-icon>radio_button_checked</mat-icon>\r\n                        <mat-icon>radio_button_unchecked</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <form [formGroup]=\"AjoutForm\">\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput placeholder=\"Nom du champs\" type=\"text\" formControlName=\"Nom\" required #nom_rb>\r\n                    </mat-form-field>\r\n\r\n                    <mat-checkbox class=\"mat_input_nouv\" style=\"margin-left: 15%\" (click)=\"changeoblig()\" #obligg_rd>\r\n                        Champs\r\n                        obligatoire\r\n                    </mat-checkbox><br>\r\n                    <span class=\"delete_elem\" *ngIf=\"liste.length==0\">Ajouter au moins deux options</span>\r\n                    <div style=\"width: 100%\">\r\n                        <span class=\"list_elem\" *ngFor=\"let list of liste;let i= index\">{{list}} &nbsp;<mat-icon\r\n                                class=\"delete_elem\" (click)=\"supprimer_elem(i);def_rb.value=''\">clear</mat-icon> </span>\r\n                    </div>\r\n                    <br>\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput type=\"text\" (input)=\"changedis($event.target.value)\"\r\n                            placeholder=\"Nouvelle une valeur\" #valeur_rb>\r\n                    </mat-form-field>\r\n\r\n                    <button mat-button color=\"primary\" class=\"mat_input_nouv\"\r\n                        (click)=\"Nouvellist(valeur_rb.value);valeur_rb.value=''\" [disabled]=\"dis\">Ajouter aux\r\n                        options</button>\r\n                    <mat-form-field style=\"width: 100%\">\r\n                        <input matInput type=\"text\" placeholder=\"Valeur par defaut\" [matAutocomplete]=\"auto\" #def_rb>\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let list of liste\" [value]=\"list\">\r\n                                {{ list }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                    <mat-action-row>\r\n                        <button mat-button color=\"primary\"\r\n                            (click)=\"NouveauChamp('radio',nom_rb.value,0,0,def_rb.value,3);def_tx.value='';obligg_rd.checked=false\"\r\n                            [disabled]=\"(AjoutForm.pristine || AjoutForm.invalid) || valid_list\">Ajouter</button>\r\n                    </mat-action-row>\r\n                </form>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel hideToggle #lst>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title style=\"width: 95%;margin: auto\">\r\n                        Liste\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        <mat-icon>list</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <form [formGroup]=\"AjoutForm\">\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput placeholder=\"Nom du champs\" type=\"text\" formControlName=\"Nom\" required #nom_lst>\r\n                    </mat-form-field>\r\n\r\n                    <mat-checkbox class=\"mat_input_nouv\" style=\"margin-left: 15%\" (click)=\"changeoblig()\" #obligg_lst>\r\n                        Champs\r\n                        obligatoire\r\n                    </mat-checkbox><br>\r\n                    <span class=\"delete_elem\" *ngIf=\"liste.length==0\">Ajouter au moins deux options</span>\r\n                    <div style=\"width: 100%\">\r\n                        <span class=\"list_elem\" *ngFor=\"let list of liste;let i= index\">{{list}} &nbsp;<mat-icon\r\n                                class=\"delete_elem\" (click)=\"supprimer_elem(i);def_lst.value=''\">clear</mat-icon>\r\n                        </span>\r\n                    </div>\r\n                    <br>\r\n                    <mat-form-field class=\"mat_input_nouv\">\r\n                        <input matInput type=\"text\" (input)=\"changedis($event.target.value)\"\r\n                            placeholder=\"Nouvelle une valeur\" #valeur_lst>\r\n                    </mat-form-field>\r\n\r\n                    <button mat-button color=\"primary\" class=\"mat_input_nouv\"\r\n                        (click)=\"Nouvellist(valeur_lst.value);valeur_lst.value=''\" [disabled]=\"dis\">Ajouter aux\r\n                        options</button>\r\n                    <mat-form-field style=\"width: 100%\">\r\n                        <input matInput type=\"text\" placeholder=\"Valeur par defaut\" [matAutocomplete]=\"auto\" #def_lst>\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let list of liste\" [value]=\"list\">\r\n                                {{ list }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                    <mat-action-row>\r\n                        <button mat-button color=\"primary\"\r\n                            (click)=\"NouveauChamp('select',nom_lst.value,0,0,def_lst.value,4);def_lst.value='';obligg_lst.checked=false\"\r\n                            [disabled]=\"(AjoutForm.pristine || AjoutForm.invalid) || valid_list\">Ajouter</button>\r\n                    </mat-action-row>\r\n                </form>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </div>\r\n\r\n</div>\r\n<!--Presentation du formulaire -->\r\n<div *ngIf=\"vu_creation\" class=\"affiche_form\">\r\n    <span *ngFor=\"let data_frm of FormData; let i=index\">\r\n        <!--si titre-->\r\n        <h2 class=\"cadrant\" *ngIf=\"data_frm.complexite==5 && data_frm.defaut=='Grand'\">{{data_frm.nomChamp}} <mat-icon\r\n                class=\"delete_elem\" (click)=\"supprimer_champ(i)\">clear</mat-icon>\r\n        </h2>\r\n        <h4 class=\"cadrant\" *ngIf=\"data_frm.complexite==5 && data_frm.defaut=='Moyen'\">{{data_frm.nomChamp}} <mat-icon\r\n                class=\"delete_elem\" (click)=\"supprimer_champ(i)\">clear</mat-icon>\r\n        </h4>\r\n        <div class=\"input_vue_form\" *ngIf=\"data_frm.complexite==5 && data_frm.defaut=='Petit'\">{{data_frm.nomChamp}}\r\n            <mat-icon class=\"delete_elem\" (click)=\"supprimer_champ(i)\">clear</mat-icon>\r\n        </div>\r\n        <!--si les type texte nombre et email date-->\r\n        <span *ngIf=\"data_frm.complexite==0\">\r\n            <mat-form-field class=\"input_vue_form\">\r\n                <input matInput [placeholder]=\"data_frm.nomChamp\" [type]=\"data_frm.type\" [value]=\"data_frm.defaut\"\r\n                    [min]=\"data_frm.mini\" [max]=\"data_frm.maxi\" [required]=\"data_frm.oblig\">\r\n            </mat-form-field>\r\n            <mat-icon class=\"delete_elem\" (click)=\"supprimer_champ(i)\">clear</mat-icon>\r\n        </span>\r\n\r\n        <!--si les type checkbox-->\r\n        <span *ngIf=\"data_frm.complexite==1\">\r\n            <div class=\"input_vue_form\" style=\"display: inline-block;\">\r\n                <mat-checkbox [required]=\"data_frm.oblig\" [checked]=\"data_frm.defaut\">\r\n                    {{data_frm.nomChamp}}\r\n                </mat-checkbox>\r\n            </div>\r\n            <mat-icon class=\"delete_elem\" (click)=\"supprimer_champ(i)\">clear</mat-icon>\r\n        </span>\r\n        <!--si les type texterea-->\r\n        <span *ngIf=\"data_frm.complexite==2\">\r\n            <mat-form-field class=\"input_vue_form\">\r\n                <textarea matInput [placeholder]=\"data_frm.nomChamp\" [rows]=\"data_frm.mini\"\r\n                    [required]=\"data_frm.oblig\"></textarea>\r\n            </mat-form-field>\r\n            <mat-icon class=\"delete_elem\" (click)=\"supprimer_champ(i)\">clear</mat-icon>\r\n        </span>\r\n        <!--si les type radio boutton-->\r\n        <span *ngIf=\"data_frm.complexite==3\">\r\n            <div class=\"input_vue_form\" style=\"display: inline-block;\">\r\n                <h5>{{data_frm.nomChamp}}</h5>\r\n                <mat-radio-group [required]=\"data_frm.oblig\">\r\n                    <span *ngFor=\"let list of data_frm.list; let j=index\">\r\n                        <mat-radio-button [value]=\"list\" *ngIf=\"list==data_frm.defaut\" checked>{{list}}\r\n                        </mat-radio-button>\r\n                        <mat-radio-button [value]=\"list\" *ngIf=\"list!=data_frm.defaut\">{{list}}</mat-radio-button>\r\n                        &nbsp;&nbsp;\r\n                    </span>\r\n                </mat-radio-group>\r\n            </div>\r\n            <mat-icon class=\"delete_elem\" (click)=\"supprimer_champ(i)\">clear</mat-icon>\r\n        </span>\r\n        <!--si les type liste select-->\r\n        <span *ngIf=\"data_frm.complexite==4\">\r\n            <mat-form-field class=\"input_vue_form\">\r\n                <mat-select [(value)]=\"data_frm.defaut\" [placeholder]=\"data_frm.nomChamp\" [required]=\"data_frm.oblig\">\r\n                    <mat-option *ngFor=\"let list of data_frm.list; let j=index\" [value]=\"list\">{{list}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-icon class=\"delete_elem\" (click)=\"supprimer_champ(i)\">clear</mat-icon>\r\n        </span>\r\n    </span>\r\n</div>\r\n\r\n<div *ngIf=\"!vu_creation\" #vu_succes>\r\n\r\n    <mat-card class=\"success_mess\">\r\n        Le formulaire <i><b>{{titre_formulaire}}</b></i> a bien été <span *ngIf=\"action\">publié</span> <span\r\n            *ngIf=\"!action\">modifié</span>.<br>\r\n        il est accéssible au publique via les liens ci-dessous<br>\r\n        <table style=\"width: 100%\">\r\n            <tr>\r\n                <td style=\"width: 10%\">Lien nouvelle demande</td>\r\n                <td style=\"width: 60%\"><a [href]=\"Link+'Demande/'+uri\">{{Link+\"Demande/\"+uri.substring(0, 10)}}...</a>\r\n                    <input type=\"text\" [value]=\"Link+'Demande/'+uri\" style=\"width: 0%;background-color: #4a488d\"\r\n                        #lien_partag></td>\r\n                <td style=\"width: 26%\">\r\n                    <mat-icon style=\"cursor: pointer;\" (click)=\"copier(lien_partag)\">file_copy</mat-icon>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td style=\"width: 14%\">Lien suivis demande</td>\r\n                <td style=\"width: 60%\"><a\r\n                        [href]=\"Link+'Suivre/'+uri\">{{Link+\"Suivre/\"+uri.substring(0, 10)}}...</a>\r\n                    <input type=\"text\" [value]=\"Link+'Suivre/'+uri\" style=\"width: 0%;background-color: #4a488d\"\r\n                        #lien_partagee></td>\r\n                <td style=\"width: 26%\">\r\n                    <mat-icon style=\"cursor: pointer;\" (click)=\"copier(lien_partagee)\">file_copy</mat-icon>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td style=\"width: 14%\">Lien administration</td>\r\n                <td style=\"width: 60%\"><a\r\n                        [href]=\"Link+'Administration/'+uri\">{{Link+\"Administration/\"+uri.substring(0, 10)}}...</a>\r\n                    <input type=\"text\" [value]=\"Link+'Administration/'+uri\" style=\"width: 0%;background-color: #4a488d\"\r\n                        #lien_partage></td>\r\n                <td style=\"width: 26%\">\r\n                    <mat-icon style=\"cursor: pointer;\" (click)=\"copier(lien_partage)\">file_copy</mat-icon>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compoments/Administration/gerer-formulaire/gerer-formulaire.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compoments/Administration/gerer-formulaire/gerer-formulaire.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbarmenue\">\n    <div style=\"width: 80%;margin: auto\">\n        <button mat-raised-button class=\"men-item-ad\" routerLink=\"/Informatique/Nouveau\">\n            Nouveau Formulaire\n        </button>&nbsp;&nbsp;\n        <button mat-raised-button class=\"men-item-ad\" routerLink=\"/Informatique\">\n            Voir les formulaires existant\n        </button>\n    </div>\n</mat-toolbar>\n<table mat-table [dataSource]=\"Donnee\" id=\"customers\">\n    <ng-container matColumnDef=\"Titre\">\n        <th mat-header-cell *matHeaderCellDef>Titre&nbsp;</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.titre}}&nbsp; </td>\n    </ng-container>\n    <ng-container matColumnDef=\"Administrateur\">\n        <th mat-header-cell *matHeaderCellDef>Administrateur(s)&nbsp;</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Emailvalidation}}&nbsp; </td>\n    </ng-container>\n    <ng-container matColumnDef=\"liena\">\n        <th mat-header-cell *matHeaderCellDef>Lien Administrateur&nbsp;</th>\n        <td mat-cell *matCellDef=\"let element\"><a\n                [href]=\"Link+'Administration/'+element.date_creation\">{{Link+\"Administration/\"+element.date_creation.substring(0, 10)}}...</a>&nbsp;\n        </td>\n    </ng-container>\n    <ng-container matColumnDef=\"lienp\">\n        <th mat-header-cell *matHeaderCellDef>Lien nouvelle demande&nbsp;</th>\n        <td mat-cell *matCellDef=\"let element\"><a\n                [href]=\"Link+'Demande/'+element.date_creation\">{{Link+\"Demande/\"+element.date_creation.substring(0, 10)}}...</a>&nbsp;\n        </td>\n    </ng-container>\n    <ng-container matColumnDef=\"lienSui\">\n        <th mat-header-cell *matHeaderCellDef>Lien suivis demande&nbsp;</th>\n        <td mat-cell *matCellDef=\"let element\"><a\n                [href]=\"Link+'Suivre/'+element.date_creation\">{{Link+\"Suivre/\"+element.date_creation.substring(0, 10)}}...</a>&nbsp;\n        </td>\n    </ng-container>\n    <ng-container matColumnDef=\"act\">\n        <th mat-header-cell *matHeaderCellDef class=\"mat-column-right\">Actions</th>\n        <td mat-cell *matCellDef=\"let element\" class=\"mat-column-right\">\n            <button mat-button style=\"color: red\" (click)=\"Supprimer(element._id)\">\n                <mat-icon>delete</mat-icon>\n            </button>\n            <button mat-button color=\"primary\" routerLink=\"/Informatique/{{element.date_creation}}\">\n                <mat-icon>create</mat-icon>\n            </button>\n        </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"ColumnsInformation\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: ColumnsInformation;\"></tr>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compoments/Demandes/nouvel-demande/nouvel-demande.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compoments/Demandes/nouvel-demande/nouvel-demande.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"affiche_form_dem\" *ngIf=\"code_demande==''\">\n    <span *ngFor=\"let data_frm of FormData; let i=index\">\n        <!--si titre-->\n        <h2 class=\"cadrant\" *ngIf=\"data_frm.complexite==5 && data_frm.defaut=='Grand'\">{{data_frm.nomChamp}}\n        </h2>\n        <h4 class=\"cadrant\" *ngIf=\"data_frm.complexite==5 && data_frm.defaut=='Moyen'\">{{data_frm.nomChamp}}\n\n        </h4>\n        <div class=\"input_vue_form\" *ngIf=\"data_frm.complexite==5 && data_frm.defaut=='Petit'\">{{data_frm.nomChamp}}\n\n        </div>\n        <!--si les type texte nombre et email date-->\n        <span *ngIf=\"data_frm.complexite==0\">\n            <mat-form-field class=\"input_vue_form\">\n                <input matInput [placeholder]=\"data_frm.nomChamp\" (input)=\"save_Value(data_frm.type,data_frm.nomChamp,$event.target.value,data_frm.oblig,data_frm.send_texte)\" [type]=\"data_frm.type\" [value]=\"data_frm.defaut\"\n                    [min]=\"data_frm.mini\" [max]=\"data_frm.maxi\" [required]=\"data_frm.oblig\">\n            </mat-form-field>\n\n        </span>\n\n        <!--si les type checkbox-->\n        <span *ngIf=\"data_frm.complexite==1\">\n            <div class=\"input_vue_form\" style=\"display: inline-block;\">\n                <mat-checkbox [required]=\"data_frm.oblig\" [checked]=\"data_frm.defaut\" (input)=\"save_Value(data_frm.type,data_frm.nomChamp,$event.target.checked,data_frm.oblig)\">\n                    {{data_frm.nomChamp}}\n                </mat-checkbox>\n            </div>\n\n        </span>\n        <!--si les type texterea-->\n        <span *ngIf=\"data_frm.complexite==2\">\n            <mat-form-field class=\"input_vue_form\">\n                <textarea matInput [placeholder]=\"data_frm.nomChamp\"  (input)=\"save_Value(data_frm.type,data_frm.nomChamp,$event.target.value,data_frm.oblig)\" [rows]=\"data_frm.mini\"\n                    [required]=\"data_frm.oblig\"></textarea>\n            </mat-form-field>\n\n        </span>\n        <!--si les type radio boutton-->\n        <span *ngIf=\"data_frm.complexite==3\">\n            <div class=\"input_vue_form\" style=\"display: inline-block;\">\n                <h5>{{data_frm.nomChamp}}</h5>\n                <mat-radio-group [required]=\"data_frm.oblig\">\n                    <span *ngFor=\"let list of data_frm.list; let j=index\">\n                        <mat-radio-button [value]=\"list\" *ngIf=\"list==data_frm.defaut\" (input)=\"save_Value(data_frm.type,data_frm.nomChamp,list,'')\" checked>{{list}}\n                        </mat-radio-button>\n                        <mat-radio-button [value]=\"list\" *ngIf=\"list!=data_frm.defaut\" (input)=\"save_Value(data_frm.type,data_frm.nomChamp,list,'')\">{{list}}</mat-radio-button>\n                        &nbsp;&nbsp;\n                    </span>\n                </mat-radio-group>\n            </div>\n\n        </span>\n        <!--si les type liste select-->\n        <span *ngIf=\"data_frm.complexite==4\">\n            <mat-form-field class=\"input_vue_form\">\n                <mat-select [(value)]=\"data_frm.defaut\" [placeholder]=\"data_frm.nomChamp\" [required]=\"data_frm.oblig\" >\n                    <mat-option *ngFor=\"let list of data_frm.list; let j=index\" [value]=\"list\" (click)=\"save_Value(data_frm.type,data_frm.nomChamp,list,data_frm.oblig)\">{{list}}</mat-option>\n                </mat-select>\n            </mat-form-field>\n        </span>\n    </span>\n    <button [style.background-color]=\"style\" class=\"btn_valide\" (click)=\"EnregistrerDemande()\"><mat-icon>send</mat-icon> {{formulaire.boutton.Nom}}</button>\n    <br><br>\n</div>\n<div *ngIf=\"code_demande!=''\" #vu_succes>\n\n    <mat-card class=\"success_mess\">\n        Votre demande a bien été enregistré, elle porte le numero <i><b style=\"color: red\">{{code_demande}}</b></i><br>\n        Vous pouvez suivre son avancé via le lien ci-dessous<br>\n        <table style=\"width: 100%\">\n            <tr>\n                <td style=\"width: 10%\">Lien public</td>\n                <td style=\"width: 60%\"><a href=\"{{Link}}+'Suivre/'+{{date_creation}}/code_demande\">{{Link+\"Suivre/\"+date_creation.substring(0, 10)}}...</a>\n                    <input type=\"text\" [value]=\"Link+'Suivre/'+date_creation+'/'+code_demande\" style=\"width: 0%;background-color: #4a488d\"\n                        #lien_partag></td>\n                <td style=\"width: 26%\">\n                    <mat-icon style=\"cursor: pointer;\" (click)=\"copier(lien_partag)\">file_copy</mat-icon>\n                </td>\n            </tr>\n        </table>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compoments/Demandes/suivre-demande/suivre-demande.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compoments/Demandes/suivre-demande/suivre-demande.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"recherche\">\n    <form [formGroup]=\"shearchform\" class=\"shearch-form\">\n        <mat-form-field style=\"width: 85%\">\n            <input matInput placeholder=\"Entrer le numero de la demande (comptant 8 carractères)\"\n                (input)=\"shearch_form($event.target.value)\" max=\"8\" type=\"text\" required formControlName=\"Recherche\"\n                #Recherche>\n        </mat-form-field>\n        <span style=\"color: red;width: 15%\" *ngIf=\"!match()\">\n            <mat-icon>clear</mat-icon>Aucune correspondance\n        </span> <span style=\"color: green;width: 30%\" *ngIf=\"match()\">\n            <mat-icon>check_circle</mat-icon>Données trouvées\n        </span>\n    </form>\n</div>\n<div *ngIf=\"match()\" #vu_succes>\n    <mat-card class=\"success_mess\">\n        Demande <i><b style=\"color: red\">{{date_demande}}</b></i><br>\n        Etat: <i><b style=\"color: white\" *ngIf=\"Etat==0\">En attente</b>  <b style=\"color: red\" *ngIf=\"Etat==1\">Refusé</b> <b style=\"color: green\" *ngIf=\"Etat==2\">Validé</b> <b style=\"color: green\" *ngIf=\"Etat==3\">Validé, en cours de traitement</b><b style=\"color: green\" *ngIf=\"Etat==4\">Validé et traité</b></i><br>\n        <table style=\"width: 100%\">\n            <tr>\n                <td style=\"width: 10%\">Recapitulatif</td>\n                <td style=\"width: 60%\">Demande <span *ngIf=\"Etat==0\">effectué</span> <span *ngIf=\"Etat==1\">réfusé</span> <span *ngIf=\"Etat==2\">validé</span> <span *ngIf=\"Etat==3\">en traitement depuis</span> <span *ngIf=\"Etat==3\">traité depuis</span> le {{date_de_demande}}</td>\n                <td style=\"width: 26%\">\n                    <span style=\"cursor: pointer;color: green;font-size: 120%\" (click)=\"Pdf_downoald()\" ><mat-icon >cloud_download</mat-icon> Télécharger en format pdf</span>\n                </td>\n            </tr>\n        </table>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compoments/Supervision/authentification/authentification.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compoments/Supervision/authentification/authentification.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"conn_form\">\n    <h2 class=\"ic_con\">\n        <mat-icon class=\"ic_con\">perm_identity</mat-icon>\n    </h2>\n    <div *ngIf=\"vue_con\">\n        <form [formGroup]=\"ConForm\">\n            <mat-form-field class=\"auth_field\">\n                <input placeholder=\"Email *\" type=\"email\" matInput formControlName=\"Email\" #Email>\n            </mat-form-field>\n            <mat-form-field class=\"auth_field\">\n                <input placeholder=\"Mot de passe\" type=\"password\" matInput formControlName=\"MDP\" #MDP>\n            </mat-form-field>\n            <button type=\"submit\" (click)=\"Connexion(Email.value,MDP.value)\" style=\"width: 50%; margin-left: 25%\"\n                [disabled]=\"ConForm.pristine || ConForm.invalid\" mat-raised-button color=\"primary\">Connexion</button><br><br>\n            <button type=\"submit\" (click)=\"oublie_act()\" style=\"width: 50%; margin-left: 25%;background-color: #f95c63\" mat-raised-button>Mot de passe oublié</button>\n        </form>\n    </div>\n    <div *ngIf=\"!vue_con\">\n        <form [formGroup]=\"NewForm\" class=\"Form_auth\">\n            <mat-form-field class=\"auth_field\">\n                <input placeholder=\"Email\" type=\"email\" matInput formControlName=\"Email\" #Email required>\n            </mat-form-field>\n            <p style=\"width: 50%;margin-left: 25%;margin-right: 25%;  color: darkorange\" *ngIf=\"!vue_alerte\">Le mot de\n                passe doit contenir au minium 8 caractères composés d'au moins d'un caractère spécial et d'un chiffre.\n            </p>\n            <mat-form-field class=\"auth_field\">\n                <input placeholder=\"Nouveau mot de passe\" type=\"password\" (input)=\"conformiteMDP($event.target.value)\"\n                    matInput formControlName=\"MDP\" #MDP required>\n            </mat-form-field>\n            <mat-icon style=\"color: red\" *ngIf=\"!vue_alerte\">clear</mat-icon>\n            <mat-icon style=\"color: green\" *ngIf=\"vue_alerte\">check_circle</mat-icon>\n            <mat-form-field class=\"auth_field\">\n                <input placeholder=\"Confirmer votre mot de passe\" type=\"password\" matInput formControlName=\"Confirm\"\n                    (input)=\"Conformite(MDP.value,$event.target.value)\" #Confirm required>\n            </mat-form-field>\n            <mat-icon style=\"color: red\" *ngIf=\"!vue_conform && vue_alerte\">clear</mat-icon>\n            <mat-icon style=\"color: green\" *ngIf=\"vue_conform && vue_alerte\">check_circle</mat-icon>\n            <button type=\"submit\" (click)=\"NouveauMDP(Email.value,MDP.value)\" style=\"width: 50%; margin-left: 25%\"\n                [disabled]=\"NewForm.pristine || NewForm.invalid || !(vue_conform && vue_alerte)\" mat-raised-button\n                color=\"primary\">Changer de mot de passe</button>\n        </form>\n    </div>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compoments/Supervision/gerer-demande/gerer-demande.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compoments/Supervision/gerer-demande/gerer-demande.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button mat-button style=\"text-align: right;color:#f95c63; margin-left: 90%;\" (click)=\"deconnecte()\">\n    <mat-icon>exit_to_app</mat-icon> se deconnecter\n</button>\n<div class=\"recherche\">\n    <form [formGroup]=\"shearchform\" class=\"shearch-form\">\n        <mat-form-field style=\"width: 30%\">\n            <input matInput placeholder=\"Par numero de la demande (comptant 8 carractères)\"\n                (input)=\"shearch_form($event.target.value,0,'',0)\" max=\"8\" type=\"text\" required formControlName=\"Recherche\"\n                #Recherche>\n        </mat-form-field>\n        <span class=\"ou\">OU</span>\n        <mat-form-field style=\"width: 30%;\">\n            <mat-select placeholder=\"Par état de la demande\" #etat>\n                <mat-option [value]=\"0\" (click)=\"shearch_form('',0,'',2)\">En attente</mat-option>\n                <mat-option [value]=\"0\" (click)=\"shearch_form('',1,'',2)\">Réfusé</mat-option>\n                <mat-option [value]=\"0\" (click)=\"shearch_form('',2,'',2)\">Accepté (en cour de traitement)</mat-option>\n                <mat-option [value]=\"0\" (click)=\"shearch_form('',3,'',2)\">Accepté (traité)</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <span class=\"ou\">OU</span>\n        <mat-form-field style=\"width: 30%\">\n            <input matInput placeholder=\"Par date\" (input)=\"shearch_form('',0,$event.target.value,3)\" max=\"8\"\n                type=\"date\" required #Date>\n        </mat-form-field>\n    </form>\n</div>\n<div>\n    <table mat-table [dataSource]=\"data_demande\" id=\"customers\">\n        <ng-container matColumnDef=\"numD\">\n            <th mat-header-cell *matHeaderCellDef>N° Demande</th>\n            <td mat-cell *matCellDef=\"let element\">{{element.dte_dem}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"dte\">\n            <th mat-header-cell *matHeaderCellDef>Date de demande</th>\n            <td mat-cell *matCellDef=\"let element\">{{getDate(element.Date_etat[0].date)}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"Etat\">\n            <th mat-header-cell *matHeaderCellDef>Etat de la demande</th>\n            <td mat-cell *matCellDef=\"let element\">{{getEtat(element.Date_etat[element.Date_etat.length-1].etat)}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"act\">\n            <th mat-header-cell *matHeaderCellDef class=\"mat-column-right\">Actions</th>\n            <td mat-cell *matCellDef=\"let element\" class=\"mat-column-right\">\n                <button mat-button style=\"color: red\" *ngIf=\"element.Date_etat[element.Date_etat.length-1].etat==0\" (click)=\"change(element,1)\">\n                    <mat-icon>highlight_off</mat-icon>\n                </button>\n                <button mat-button color=\"primary\" *ngIf=\"element.Date_etat[element.Date_etat.length-1].etat==0\" (click)=\"change(element,2)\">\n                    <mat-icon>check_circle_outline</mat-icon>\n                </button>\n                <button mat-button color=\"primary\" *ngIf=\"element.Date_etat[element.Date_etat.length-1].etat==2\" (click)=\"change(element,3)\" routerLink=\"/Informatique/{{element.date_creation}}\">\n                    <mat-icon>check_circle</mat-icon>\n                </button>\n                <button mat-button style=\"color: green\" (click)=\"Pdf_downoald(element.data,element.dte_dem)\">\n                    <mat-icon>cloud_download</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"ColumnsInformation\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: ColumnsInformation;\"></tr>\n    </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compoments/presentation/presentation.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compoments/presentation/presentation.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  #vu_succes>\n    <mat-card class=\"success_mess\">\n       <h2 style=\"text-align: center\">Bienvenue sur EFormClichy, la plateforme de génération de formulaire de votre collectivité</h2>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _compoments_Administration_creer_formulaire_creer_formulaire_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compoments/Administration/creer-formulaire/creer-formulaire.component */ "./src/app/compoments/Administration/creer-formulaire/creer-formulaire.component.ts");
/* harmony import */ var _compoments_Administration_gerer_formulaire_gerer_formulaire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compoments/Administration/gerer-formulaire/gerer-formulaire.component */ "./src/app/compoments/Administration/gerer-formulaire/gerer-formulaire.component.ts");
/* harmony import */ var _compoments_Demandes_nouvel_demande_nouvel_demande_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compoments/Demandes/nouvel-demande/nouvel-demande.component */ "./src/app/compoments/Demandes/nouvel-demande/nouvel-demande.component.ts");
/* harmony import */ var _compoments_Demandes_suivre_demande_suivre_demande_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compoments/Demandes/suivre-demande/suivre-demande.component */ "./src/app/compoments/Demandes/suivre-demande/suivre-demande.component.ts");
/* harmony import */ var _compoments_Supervision_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compoments/Supervision/authentification/authentification.component */ "./src/app/compoments/Supervision/authentification/authentification.component.ts");
/* harmony import */ var _compoments_Supervision_gerer_demande_gerer_demande_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compoments/Supervision/gerer-demande/gerer-demande.component */ "./src/app/compoments/Supervision/gerer-demande/gerer-demande.component.ts");
/* harmony import */ var _compoments_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./compoments/presentation/presentation.component */ "./src/app/compoments/presentation/presentation.component.ts");










const routes = [
    { path: 'Informatique/:action', component: _compoments_Administration_creer_formulaire_creer_formulaire_component__WEBPACK_IMPORTED_MODULE_3__["CreerFormulaireComponent"] },
    { path: 'Informatique', component: _compoments_Administration_gerer_formulaire_gerer_formulaire_component__WEBPACK_IMPORTED_MODULE_4__["GererFormulaireComponent"] },
    { path: 'Demande/:date_creation', component: _compoments_Demandes_nouvel_demande_nouvel_demande_component__WEBPACK_IMPORTED_MODULE_5__["NouvelDemandeComponent"] },
    { path: 'Suivre/:date_creation', component: _compoments_Demandes_suivre_demande_suivre_demande_component__WEBPACK_IMPORTED_MODULE_6__["SuivreDemandeComponent"] },
    { path: 'Suivre/:date_creation/:date_demande', component: _compoments_Demandes_suivre_demande_suivre_demande_component__WEBPACK_IMPORTED_MODULE_6__["SuivreDemandeComponent"] },
    { path: 'Administration/:date_creation/:crypto', component: _compoments_Supervision_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_7__["AuthentificationComponent"] },
    { path: 'Administration/:date_creation', component: _compoments_Supervision_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_7__["AuthentificationComponent"] },
    { path: 'Suivis/:date_creation', component: _compoments_Supervision_gerer_demande_gerer_demande_component__WEBPACK_IMPORTED_MODULE_8__["GererDemandeComponent"] },
    { path: 'Suivis/:date_creation/:date_demande', component: _compoments_Supervision_gerer_demande_gerer_demande_component__WEBPACK_IMPORTED_MODULE_8__["GererDemandeComponent"] },
    { path: 'Acceuil', component: _compoments_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_9__["PresentationComponent"] },
    { path: '', redirectTo: 'Acceuil', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = class AppComponent {
    constructor(cookieservice) {
        this.cookieservice = cookieservice;
        this.title = 'EFormClichy';
        this.titre = "";
    }
    ngOnInit() { this.titre = this.cookieservice.get('titre'); }
};
AppComponent.ctorParameters = () => [
    { type: angular2_cookie_core__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _compoments_Administration_creer_formulaire_creer_formulaire_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compoments/Administration/creer-formulaire/creer-formulaire.component */ "./src/app/compoments/Administration/creer-formulaire/creer-formulaire.component.ts");
/* harmony import */ var _compoments_Administration_gerer_formulaire_gerer_formulaire_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compoments/Administration/gerer-formulaire/gerer-formulaire.component */ "./src/app/compoments/Administration/gerer-formulaire/gerer-formulaire.component.ts");
/* harmony import */ var _compoments_Supervision_gerer_demande_gerer_demande_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compoments/Supervision/gerer-demande/gerer-demande.component */ "./src/app/compoments/Supervision/gerer-demande/gerer-demande.component.ts");
/* harmony import */ var _compoments_Demandes_nouvel_demande_nouvel_demande_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./compoments/Demandes/nouvel-demande/nouvel-demande.component */ "./src/app/compoments/Demandes/nouvel-demande/nouvel-demande.component.ts");
/* harmony import */ var _compoments_Demandes_suivre_demande_suivre_demande_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compoments/Demandes/suivre-demande/suivre-demande.component */ "./src/app/compoments/Demandes/suivre-demande/suivre-demande.component.ts");
/* harmony import */ var _compoments_Supervision_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./compoments/Supervision/authentification/authentification.component */ "./src/app/compoments/Supervision/authentification/authentification.component.ts");
/* harmony import */ var _compoments_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./compoments/presentation/presentation.component */ "./src/app/compoments/presentation/presentation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-cookie/services/cookies.service */ "./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_formulaire_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/formulaire.service */ "./src/app/services/formulaire.service.ts");
/* harmony import */ var _services_data_formulaire_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/data-formulaire.service */ "./src/app/services/data-formulaire.service.ts");



















//importation des services


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _compoments_Administration_creer_formulaire_creer_formulaire_component__WEBPACK_IMPORTED_MODULE_6__["CreerFormulaireComponent"],
            _compoments_Administration_gerer_formulaire_gerer_formulaire_component__WEBPACK_IMPORTED_MODULE_7__["GererFormulaireComponent"],
            _compoments_Supervision_gerer_demande_gerer_demande_component__WEBPACK_IMPORTED_MODULE_8__["GererDemandeComponent"],
            _compoments_Demandes_nouvel_demande_nouvel_demande_component__WEBPACK_IMPORTED_MODULE_9__["NouvelDemandeComponent"],
            _compoments_Demandes_suivre_demande_suivre_demande_component__WEBPACK_IMPORTED_MODULE_10__["SuivreDemandeComponent"],
            _compoments_Supervision_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_11__["AuthentificationComponent"],
            _compoments_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_12__["PresentationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
        ],
        providers: [_angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵROUTER_PROVIDERS"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"] }, _services_formulaire_service__WEBPACK_IMPORTED_MODULE_19__["FormulaireService"], _services_data_formulaire_service__WEBPACK_IMPORTED_MODULE_20__["DataFormulaireService"], angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_16__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/compoments/Administration/creer-formulaire/creer-formulaire.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/compoments/Administration/creer-formulaire/creer-formulaire.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbWVudHMvQWRtaW5pc3RyYXRpb24vY3JlZXItZm9ybXVsYWlyZS9jcmVlci1mb3JtdWxhaXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/compoments/Administration/creer-formulaire/creer-formulaire.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/compoments/Administration/creer-formulaire/creer-formulaire.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CreerFormulaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreerFormulaireComponent", function() { return CreerFormulaireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_formulaire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/formulaire.service */ "./src/app/services/formulaire.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let CreerFormulaireComponent = class CreerFormulaireComponent {
    constructor(fb, serviceformulaire, params, router) {
        this.fb = fb;
        this.serviceformulaire = serviceformulaire;
        this.params = params;
        this.router = router;
        this.vu_creation = true;
        this.oblig = false;
        this.send = false;
        this.dis = true;
        this.valid_list = true;
        this.chx_def = false;
        this.mess = "";
        this.titre_formulaire = "";
        this.liste = [];
        this.FormData = [];
        this.Emailvalidation = [];
        this.formulaire = { titre: "", Emailvalidation: "", boutton: { Nom: "Valider", Couleur: "#4a488d" }, donne: [], date_creation: "" };
        this.Link = "http://demandeinfo.mairie-clichy.fr/#/";
        this.uri = "";
        this.action = true;
        this.AjoutForm = this.fb.group({
            Nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
        });
        this.InformationForm = this.fb.group({
            Titre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            TitreBouttont: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator]],
        });
        this.AjoutEmail = this.fb.group({
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7)]],
        });
    }
    ngOnInit() { this.initialise(); }
    initialise() {
        this.serviceformulaire.Initialise_titre("Generateur de formulaire electronique");
        var action = this.params.snapshot.paramMap.get('action');
        if (action == "Nouveau")
            this.formulaire = { titre: "", Emailvalidation: "", boutton: { Nom: "Valider", Couleur: "#4a488d" }, donne: [], date_creation: "" };
        else {
            this.serviceformulaire.Recherche({ date_creation: action }).subscribe((data) => {
                if (data.length == 0)
                    this.router.navigate(['/Acceuil']);
                else {
                    this.formulaire = data[0];
                    this.Emailvalidation = data[0].Emailvalidation.split(',');
                    this.FormData = data[0].donne;
                    this.action = false;
                }
            });
        }
        this.vu_creation = true;
    }
    NouveauChamp(type, Nom, min, max, def, complexite) {
        this.AjoutForm.reset();
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
        };
        this.FormData.push(data);
        this.oblig = false;
        this.send = false;
        this.mess = "";
        this.liste = [];
        this.chx_def = false;
    }
    changeoblig() {
        this.oblig = !this.oblig;
    }
    changdefchx() {
        this.chx_def = !this.chx_def;
    }
    changesend() {
        this.send = !this.send;
    }
    changemessage(mess) {
        this.mess = mess;
    }
    changedis(valeur) {
        this.dis = (valeur.length >= 3) ? false : true;
    }
    Nouvellist(valeur_ls) {
        this.liste.push(valeur_ls);
        this.dis = true;
        this.valid_list = (this.liste.length > 1) ? false : true;
    }
    supprimer_elem(i) {
        this.liste.splice(i, 1);
        this.valid_list = (this.liste.length > 1) ? false : true;
    }
    supprimer_champ(i) {
        this.FormData.splice(i, 1);
    }
    supprime_admin(i) {
        this.Emailvalidation.splice(i, 1);
    }
    addAdmin(email_adm) {
        this.Emailvalidation.push(email_adm);
        this.AjoutEmail.reset();
    }
    Publie_form(titre_formulaire, TitreBouttont, couleurBouttont, action = 1) {
        var formulaire = {
            titre: titre_formulaire,
            Emailvalidation: this.Emailvalidation.join(',').toLowerCase(),
            boutton: { Nom: TitreBouttont, Couleur: couleurBouttont },
            donne: this.FormData
        };
        if (action == 1)
            this.serviceformulaire.Ajouter(formulaire).subscribe((data) => {
                if (data != 'ko') {
                    this.uri = data;
                    this.vu_creation = false;
                    this.titre_formulaire = titre_formulaire;
                }
                else
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({ type: "warning", text: "un formulaire portant le même titre existe déjà, veuillez changer de titre." });
            });
        else {
            this.serviceformulaire.Recherche({ titre: titre_formulaire }).subscribe((data_r) => {
                if (data_r.length > 0 && titre_formulaire != this.formulaire.titre)
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({ type: "warning", text: "un formulaire portant le même titre existe déjà, veuillez changer de titre." });
                else {
                    this.formulaire.titre = titre_formulaire;
                    this.formulaire.Emailvalidation = this.Emailvalidation.join(',');
                    this.formulaire.boutton = { Nom: TitreBouttont, Couleur: couleurBouttont };
                    this.formulaire.donne = this.FormData;
                    this.serviceformulaire.Modifier(this.formulaire).subscribe((data) => {
                        this.uri = this.formulaire.date_creation;
                        this.vu_creation = false;
                        this.titre_formulaire = titre_formulaire;
                    });
                }
            });
        }
    }
    copier(lien) {
        lien.select();
        document.execCommand("copy");
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'top-end',
            width: "12%",
            title: 'Lien copié!',
            showConfirmButton: false,
            timer: 1000
        });
    }
};
CreerFormulaireComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_formulaire_service__WEBPACK_IMPORTED_MODULE_4__["FormulaireService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CreerFormulaireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creer-formulaire',
        template: __webpack_require__(/*! raw-loader!./creer-formulaire.component.html */ "./node_modules/raw-loader/index.js!./src/app/compoments/Administration/creer-formulaire/creer-formulaire.component.html"),
        styles: [__webpack_require__(/*! ./creer-formulaire.component.css */ "./src/app/compoments/Administration/creer-formulaire/creer-formulaire.component.css")]
    })
], CreerFormulaireComponent);



/***/ }),

/***/ "./src/app/compoments/Administration/gerer-formulaire/gerer-formulaire.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/compoments/Administration/gerer-formulaire/gerer-formulaire.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbWVudHMvQWRtaW5pc3RyYXRpb24vZ2VyZXItZm9ybXVsYWlyZS9nZXJlci1mb3JtdWxhaXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/compoments/Administration/gerer-formulaire/gerer-formulaire.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/compoments/Administration/gerer-formulaire/gerer-formulaire.component.ts ***!
  \******************************************************************************************/
/*! exports provided: GererFormulaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GererFormulaireComponent", function() { return GererFormulaireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_formulaire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/formulaire.service */ "./src/app/services/formulaire.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let GererFormulaireComponent = class GererFormulaireComponent {
    constructor(serviceformulaire) {
        this.serviceformulaire = serviceformulaire;
        this.Donnee = [];
        this.Link = "http://demandeinfo.mairie-clichy.fr/#/";
        this.ColumnsInformation = ['Titre', 'Administrateur', 'liena', 'lienp', 'lienSui', 'act'];
    }
    ngOnInit() { this.findData(); }
    findData() {
        this.serviceformulaire.Initialise_titre("Generateur de formulaire electronique");
        this.serviceformulaire.Recherche({}).subscribe((data) => {
            this.Donnee = data;
        });
    }
    Supprimer(_id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Vous êtes sur le point de supprimer un formulaire',
            text: "êtes vous sûr?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Supprimer',
            cancelButtonText: "Retour"
        }).then((result) => {
            if (result.value) {
                this.serviceformulaire.Supprimer(_id).subscribe(() => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        position: 'top-end',
                        type: "success",
                        width: "20%",
                        title: 'Formulaire supprimé!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    this.findData();
                });
            }
        });
    }
};
GererFormulaireComponent.ctorParameters = () => [
    { type: _services_formulaire_service__WEBPACK_IMPORTED_MODULE_2__["FormulaireService"] }
];
GererFormulaireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gerer-formulaire',
        template: __webpack_require__(/*! raw-loader!./gerer-formulaire.component.html */ "./node_modules/raw-loader/index.js!./src/app/compoments/Administration/gerer-formulaire/gerer-formulaire.component.html"),
        styles: [__webpack_require__(/*! ./gerer-formulaire.component.css */ "./src/app/compoments/Administration/gerer-formulaire/gerer-formulaire.component.css")]
    })
], GererFormulaireComponent);



/***/ }),

/***/ "./src/app/compoments/Demandes/nouvel-demande/nouvel-demande.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/compoments/Demandes/nouvel-demande/nouvel-demande.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbWVudHMvRGVtYW5kZXMvbm91dmVsLWRlbWFuZGUvbm91dmVsLWRlbWFuZGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/compoments/Demandes/nouvel-demande/nouvel-demande.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/compoments/Demandes/nouvel-demande/nouvel-demande.component.ts ***!
  \********************************************************************************/
/*! exports provided: NouvelDemandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouvelDemandeComponent", function() { return NouvelDemandeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_formulaire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/formulaire.service */ "./src/app/services/formulaire.service.ts");
/* harmony import */ var _services_data_formulaire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/data-formulaire.service */ "./src/app/services/data-formulaire.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_6__);







let NouvelDemandeComponent = class NouvelDemandeComponent {
    constructor(serviceformulaire, dataserviceform, params, router) {
        this.serviceformulaire = serviceformulaire;
        this.dataserviceform = dataserviceform;
        this.params = params;
        this.router = router;
        this.date_creation = "";
        this.tot_chmps_oblige = 0;
        this.FormData = [];
        this.style = "";
        this.data_form = [];
        this.nom_tmp = [];
        this.formulaire = { titre: "", Emailvalidation: "", boutton: { Nom: "Valider", Couleur: "#4a488d" }, donne: [], date_creation: "" };
        this.code_demande = "";
        this.Link = "http://demandeinfo.mairie-clichy.fr/#/";
        this.titre = "";
    }
    ngOnInit() { this.initialisation(); }
    initialisation() {
        this.date_creation = this.params.snapshot.paramMap.get('date_creation');
        this.serviceformulaire.Recherche({ date_creation: this.date_creation }).subscribe((data) => {
            if (data.length == 0)
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({ type: "error", text: "Ce lien n'est pas valide" }).then(() => { this.router.navigate(['/Acceuil']); });
            else {
                this.initialistion_defaultvalue(data[0].donne);
                this.serviceformulaire.Initialise_titre(data[0].titre);
                this.titre = data[0].titre;
                this.formulaire = data[0];
                this.FormData = data[0].donne;
                this.style = this.formulaire.boutton.Couleur;
            }
        });
    }
    initialistion_defaultvalue(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].oblig)
                this.save_Value(data[i].type, data[i].nomChamp, data[i].defaut, data[i].oblig);
            if ((typeof data[i].defaut == "string" && data[i].defaut != "" && data[i].defaut != "Moyen" && data[i].defaut != "Grand" && data[i].defaut != "Petit") || typeof data[i].defaut == "number" || typeof data[i].defaut == "boolean")
                this.save_Value(data[i].type, data[i].nomChamp, data[i].defaut, data[i].oblig);
        }
    }
    verifie_champs() {
        var ret = false;
        for (var i = 0; i < this.data_form.length; i++)
            if (this.data_form[i].oblig)
                if ((typeof this.data_form[i].valeur == "string" && this.data_form[i].valeur == "") || (typeof this.data_form[i].valeur == "string" && this.data_form[i].valeur != "" && this.data_form[i].type == "email" && (!this.data_form[i].valeur.includes('@') || !this.data_form[i].valeur.includes('.') || this.data_form[i].valeur.length < 4)) || (typeof this.data_form[i].valeur == "number" && Number.isNaN(this.data_form[i].valeur)))
                    ret = true;
        return ret;
    }
    save_Value(type, nomchmp, valeur, oblig, send_text = "") {
        var jsn = { nom: nomchmp, valeur: (type == "number") ? parseInt(valeur) : valeur, type: type, oblig: oblig, message: send_text };
        if (this.nom_tmp.includes(nomchmp))
            this.data_form[this.nom_tmp.indexOf(nomchmp)] = jsn;
        else {
            this.nom_tmp.push(nomchmp);
            this.data_form.push(jsn);
        }
    }
    Pdf_downoald(code_dem) {
        var img = new Image();
        img.src = '../../../../assets/img/images.png';
        var img1 = new Image();
        img1.src = '../../../../assets/img/logo.PNG';
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__();
        doc.addImage(img1, 'PNG', 1, 2, 45, 16);
        doc.addImage(img, 'PNG', 160, 2, 45, 16);
        doc.setFontSize(25);
        doc.setTextColor(74, 72, 141);
        doc.setFontType('bold');
        doc.text(22, 37, this.titre + ':');
        var long = 40;
        for (var i = 0; i < this.FormData.length; i++) {
            if (long > 270) {
                long = 22;
                doc.addPage();
            }
            else {
                long += 10;
            }
            var valeur = this.acces_valeur(this.FormData[i].nomChamp);
            if (valeur == null) {
                if (this.FormData[i].defaut == "Grand")
                    doc.setFontSize(16);
                else if (this.FormData[i].defaut == "Moyen")
                    doc.setFontSize(14);
                else
                    doc.setFontSize(12);
                doc.setTextColor(74, 72, 141);
                doc.setFontType('bold');
                doc.text(25, long, this.FormData[i].nomChamp + '');
            }
            else {
                if (typeof valeur == "boolean") {
                    doc.setFontSize(12);
                    doc.setTextColor(0, 0, 0);
                    doc.setFontType('bold');
                    if (valeur)
                        doc.rect(25, long - 4, 5, 5, 'F');
                    else
                        doc.rect(25, long - 4, 5, 5);
                    doc.setFontType('');
                    doc.text(35, long, this.FormData[i].nomChamp + '');
                }
                else {
                    valeur = valeur + '';
                    doc.setFontSize(12);
                    doc.setTextColor(0, 0, 0);
                    doc.setFontType('bold');
                    doc.text(25, long, this.FormData[i].nomChamp + ':');
                    if (this.FormData[i].nomChamp.length > 42) //taille de debordement
                     {
                        var sub_part = valeur.length / 50;
                        for (var j = 0; j < sub_part; j++) {
                            if (j == sub_part)
                                break;
                            long += 5;
                            doc.setFontType('');
                            doc.text(30, long + 5, valeur.substring(j * 50, (j * 50) + 50));
                        }
                        long += 5;
                    }
                    else {
                        if (valeur.length > 40) {
                            var sub_part = Math.floor(valeur.length / 100) + 1;
                            long = long + 5;
                            for (var j = 0; j < sub_part; j++) {
                                if (j == sub_part)
                                    break;
                                long = long + 5;
                                var val_tmp = valeur.substring(j * 100, ((j + 1) * 100));
                                doc.setFontType('');
                                doc.text(30, (long + 5), val_tmp);
                            }
                            long = long + 5;
                        }
                        else
                            doc.setFontType('');
                        doc.text(80, long, valeur);
                    }
                }
            }
        }
        doc.save(this.titre + code_dem + '.pdf');
    }
    EnregistrerDemande() {
        var verif = this.verifie_champs();
        if (verif)
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("veuillez remplir correctement tous les champs obligatoires SVP");
        else {
            var data = { id_form: this.date_creation, data: this.data_form };
            this.dataserviceform.Ajouter(data).subscribe((data) => {
                this.code_demande = data;
                this.Pdf_downoald(data);
            });
        }
    }
    copier(lien) {
        lien.select();
        document.execCommand("copy");
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'top-end',
            width: "12%",
            title: 'Lien copié!',
            showConfirmButton: false,
            timer: 1000
        });
    }
    acces_valeur(nom_chmp) {
        var k = this.nom_tmp.indexOf(nom_chmp);
        return (k == -1) ? null : this.data_form[k].valeur;
    }
};
NouvelDemandeComponent.ctorParameters = () => [
    { type: _services_formulaire_service__WEBPACK_IMPORTED_MODULE_3__["FormulaireService"] },
    { type: _services_data_formulaire_service__WEBPACK_IMPORTED_MODULE_4__["DataFormulaireService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NouvelDemandeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nouvel-demande',
        template: __webpack_require__(/*! raw-loader!./nouvel-demande.component.html */ "./node_modules/raw-loader/index.js!./src/app/compoments/Demandes/nouvel-demande/nouvel-demande.component.html"),
        styles: [__webpack_require__(/*! ./nouvel-demande.component.css */ "./src/app/compoments/Demandes/nouvel-demande/nouvel-demande.component.css")]
    })
], NouvelDemandeComponent);



/***/ }),

/***/ "./src/app/compoments/Demandes/suivre-demande/suivre-demande.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/compoments/Demandes/suivre-demande/suivre-demande.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbWVudHMvRGVtYW5kZXMvc3VpdnJlLWRlbWFuZGUvc3VpdnJlLWRlbWFuZGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/compoments/Demandes/suivre-demande/suivre-demande.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/compoments/Demandes/suivre-demande/suivre-demande.component.ts ***!
  \********************************************************************************/
/*! exports provided: SuivreDemandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuivreDemandeComponent", function() { return SuivreDemandeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_formulaire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/formulaire.service */ "./src/app/services/formulaire.service.ts");
/* harmony import */ var _services_data_formulaire_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/data-formulaire.service */ "./src/app/services/data-formulaire.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let SuivreDemandeComponent = class SuivreDemandeComponent {
    constructor(serviceformulaire, dataserviceform, fb, router, params) {
        this.serviceformulaire = serviceformulaire;
        this.dataserviceform = dataserviceform;
        this.fb = fb;
        this.router = router;
        this.params = params;
        this.date_creation = "";
        this.date_demande = "";
        this.data_demande = {};
        this.FormData = [];
        this.Etat = -1;
        this.date_de_demande = "";
        this.titre = "";
        this.nom_tmp = [];
        this.shearchform = this.fb.group({
            Recherche: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)]]
        });
    }
    ngOnInit() {
        this.initialisation();
    }
    initialisation() {
        this.date_creation = this.params.snapshot.paramMap.get('date_creation');
        this.date_demande = this.params.snapshot.paramMap.get('date_demande');
        if (this.date_demande != null) {
            this.shearch_form(this.date_demande);
            this.shearchform.controls.Recherche.setValue(this.date_demande);
        }
        this.serviceformulaire.Recherche({ date_creation: this.date_creation }).subscribe((data) => {
            if (data.length == 0)
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({ type: "error", text: "ce lien n'est pas valide" }).then(() => { this.router.navigate(['/Acceuil']); });
            else
                this.FormData = data[0].donne;
            this.serviceformulaire.Initialise_titre(data[0].titre);
            this.titre = data[0].titre;
        });
    }
    shearch_form(valeur) {
        this.date_demande = valeur;
        this.dataserviceform.Recherche({ id_form: this.date_creation, dte_dem: valeur }).subscribe((data) => {
            this.data_demande = data[0];
            if (data[0] != undefined) {
                this.data_form = data[0].data;
                this.Etat = data[0].Date_etat[data[0].Date_etat.length - 1].etat;
                var event = new Date(parseInt(data[0].Date_etat[data[0].Date_etat.length - 1].date));
                console.log(data[0].Date_etat[data[0].Date_etat.length - 1].date);
                this.date_de_demande = event.toLocaleDateString('fr-FR');
                for (var i = 0; i < this.data_form.length; i++)
                    this.nom_tmp.push(this.data_form[i].nom);
            }
        });
    }
    Pdf_downoald(code_dem = this.date_demande) {
        var img = new Image();
        img.src = '../../../../assets/img/images.png';
        var img1 = new Image();
        img1.src = '../../../../assets/img/logo.PNG';
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__();
        doc.addImage(img1, 'PNG', 1, 2, 45, 16);
        doc.addImage(img, 'PNG', 160, 2, 45, 16);
        doc.setFontSize(25);
        doc.setTextColor(74, 72, 141);
        doc.setFontType('bold');
        doc.text(22, 37, this.titre + ':');
        var long = 40;
        for (var i = 0; i < this.FormData.length; i++) {
            if (long > 270) {
                long = 22;
                doc.addPage();
            }
            else {
                long += 10;
            }
            var valeur = this.acces_valeur(this.FormData[i].nomChamp);
            if (valeur == null) {
                if (this.FormData[i].defaut == "Grand")
                    doc.setFontSize(16);
                else if (this.FormData[i].defaut == "Moyen")
                    doc.setFontSize(14);
                else
                    doc.setFontSize(12);
                doc.setTextColor(74, 72, 141);
                doc.setFontType('bold');
                doc.text(25, long, this.FormData[i].nomChamp + '');
            }
            else {
                if (valeur == "true" || valeur == "false") {
                    doc.setFontSize(12);
                    doc.setTextColor(0, 0, 0);
                    doc.setFontType('bold');
                    if (valeur == "true")
                        doc.rect(25, long - 4, 5, 5, 'F');
                    else
                        doc.rect(25, long - 4, 5, 5);
                    doc.setFontType('');
                    doc.text(35, long, this.FormData[i].nomChamp + '');
                }
                else {
                    valeur = valeur + '';
                    doc.setFontSize(12);
                    doc.setTextColor(0, 0, 0);
                    doc.setFontType('bold');
                    doc.text(25, long, this.FormData[i].nomChamp + ':');
                    if (this.FormData[i].nomChamp.length > 42) //taille de debordement
                     {
                        var sub_part = valeur.length / 50;
                        for (var j = 0; j < sub_part; j++) {
                            if (j == sub_part)
                                break;
                            long += 5;
                            doc.setFontType('');
                            doc.text(30, long + 5, valeur.substring(j * 50, (j * 50) + 50));
                        }
                        long += 5;
                    }
                    else {
                        if (valeur.length > 40) {
                            var sub_part = Math.floor(valeur.length / 100) + 1;
                            long = long + 5;
                            for (var j = 0; j < sub_part; j++) {
                                if (j == sub_part)
                                    break;
                                long = long + 5;
                                var val_tmp = valeur.substring(j * 100, ((j + 1) * 100));
                                doc.setFontType('');
                                doc.text(30, (long + 5), val_tmp);
                            }
                            long = long + 5;
                        }
                        else
                            doc.setFontType('');
                        doc.text(80, long, valeur);
                    }
                }
            }
        }
        doc.save(this.titre + code_dem + '.pdf');
    }
    acces_valeur(nom_chmp) {
        var k = this.nom_tmp.indexOf(nom_chmp);
        return (k == -1) ? null : this.data_form[k].valeur;
    }
    match() {
        return !(typeof this.data_demande == 'undefined');
    }
};
SuivreDemandeComponent.ctorParameters = () => [
    { type: _services_formulaire_service__WEBPACK_IMPORTED_MODULE_4__["FormulaireService"] },
    { type: _services_data_formulaire_service__WEBPACK_IMPORTED_MODULE_5__["DataFormulaireService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SuivreDemandeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-suivre-demande',
        template: __webpack_require__(/*! raw-loader!./suivre-demande.component.html */ "./node_modules/raw-loader/index.js!./src/app/compoments/Demandes/suivre-demande/suivre-demande.component.html"),
        styles: [__webpack_require__(/*! ./suivre-demande.component.css */ "./src/app/compoments/Demandes/suivre-demande/suivre-demande.component.css")]
    })
], SuivreDemandeComponent);



/***/ }),

/***/ "./src/app/compoments/Supervision/authentification/authentification.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/compoments/Supervision/authentification/authentification.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbWVudHMvU3VwZXJ2aXNpb24vYXV0aGVudGlmaWNhdGlvbi9hdXRoZW50aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/compoments/Supervision/authentification/authentification.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/compoments/Supervision/authentification/authentification.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AuthentificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationComponent", function() { return AuthentificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_formulaire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/formulaire.service */ "./src/app/services/formulaire.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let AuthentificationComponent = class AuthentificationComponent {
    constructor(serviceformulaire, fb, router, params) {
        this.serviceformulaire = serviceformulaire;
        this.fb = fb;
        this.router = router;
        this.params = params;
        this.date_creation = "";
        this.crypto = "";
        this.vue_alerte = false;
        this.vue_conform = false;
        this.NewForm = this.fb.group({
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            MDP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            Confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
        this.ConForm = this.fb.group({
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            MDP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
    }
    ngOnInit() { this.initialise(); }
    initialise() {
        this.date_creation = this.params.snapshot.paramMap.get('date_creation');
        this.crypto = this.params.snapshot.paramMap.get('crypto');
        this.vue_con = (this.crypto == null) ? true : false;
        if (this.crypto == null)
            this.serviceformulaire.Access(this.date_creation, "");
    }
    NouveauMDP(Email, MDP) {
        var data = { date_creation: this.date_creation, Crypto: this.crypto, Email: Email.toLowerCase(), MDP };
        this.serviceformulaire.NewMDP(data).subscribe((data) => {
            if (data == 'ok') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    position: 'top-end',
                    width: "50%",
                    title: 'Mot de passe changé, connecter vous!',
                    showConfirmButton: false,
                    timer: 1000,
                    type: "success"
                });
                this.vue_con = true;
            }
            else if (data == 'ko1')
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    position: 'top-end',
                    width: "50%",
                    title: 'Ce lien n\'est pas valide!',
                    showConfirmButton: false,
                    timer: 1200,
                    type: "error"
                });
            else
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    position: 'top-end',
                    width: "50%",
                    title: 'Ce lien n\'est plus valide!',
                    showConfirmButton: false,
                    timer: 1200,
                    type: "warning"
                });
        });
    }
    MDPOublie(Email) {
        this.serviceformulaire.Forget(this.date_creation, Email.toLowerCase()).subscribe((data) => {
            if (data == 'ok') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    position: 'top-end',
                    width: "50%",
                    text: 'Vous avez recu un email. Celui-ci vous permettrat de changer votre mot de passe',
                    showConfirmButton: false,
                    timer: 2000,
                    type: "success"
                });
            }
            else if (data == 'ko1')
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    position: 'top-end',
                    width: "50%",
                    title: 'Ce lien n\'est pas valide!',
                    showConfirmButton: false,
                    timer: 1200,
                    type: "error"
                });
            else
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    position: 'top-end',
                    width: "50%",
                    title: 'aucune correpondance avec cet addresse email',
                    showConfirmButton: false,
                    timer: 1300,
                    type: "warning"
                });
        });
    }
    oublie_act() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
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
                this.MDPOublie(result.value);
            }
        });
    }
    Connexion(Email, MDP) {
        var data = { date_creation: this.date_creation, Email: Email.toLowerCase(), MDP };
        this.serviceformulaire.Connexion(data).subscribe((data) => {
            if (data == 'ko1')
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    position: 'top-end',
                    width: "50%",
                    title: 'Ce lien n\'est pas valide!',
                    showConfirmButton: false,
                    timer: 1200,
                    type: "error"
                });
            if (data == 'ko2')
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    position: 'top-end',
                    width: "50%",
                    title: 'login ou mot de passe incorrecte',
                    showConfirmButton: false,
                    timer: 1200,
                    type: "warning"
                });
            else {
                this.serviceformulaire.Initialise_conne(Email, data);
                this.router.navigate(['/Suivis/' + this.date_creation]);
            }
        });
    }
    Conformite(MDP, Confirm) { this.vue_conform = MDP == Confirm; return MDP == Confirm; }
    conformiteMDP(MDP) {
        var format = /[é&çà%ù£$¨^:!§;,.£ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        var number = "1 2 3 4 5 6 7 8 9 0";
        var ret1 = format.test(MDP);
        var ret2 = false;
        var ret3 = MDP.length >= 8;
        var MDP_sp = MDP.split('');
        for (var i = 0; i < MDP_sp.length; i++)
            if (number.includes(MDP[i]))
                ret2 = true;
        this.vue_alerte = ret1 && ret2 && ret3;
        return ret1 && ret2 && ret3;
    }
};
AuthentificationComponent.ctorParameters = () => [
    { type: _services_formulaire_service__WEBPACK_IMPORTED_MODULE_4__["FormulaireService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AuthentificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authentification',
        template: __webpack_require__(/*! raw-loader!./authentification.component.html */ "./node_modules/raw-loader/index.js!./src/app/compoments/Supervision/authentification/authentification.component.html"),
        styles: [__webpack_require__(/*! ./authentification.component.css */ "./src/app/compoments/Supervision/authentification/authentification.component.css")]
    })
], AuthentificationComponent);



/***/ }),

/***/ "./src/app/compoments/Supervision/gerer-demande/gerer-demande.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/compoments/Supervision/gerer-demande/gerer-demande.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbWVudHMvU3VwZXJ2aXNpb24vZ2VyZXItZGVtYW5kZS9nZXJlci1kZW1hbmRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/compoments/Supervision/gerer-demande/gerer-demande.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/compoments/Supervision/gerer-demande/gerer-demande.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GererDemandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GererDemandeComponent", function() { return GererDemandeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_formulaire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/formulaire.service */ "./src/app/services/formulaire.service.ts");
/* harmony import */ var _services_data_formulaire_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/data-formulaire.service */ "./src/app/services/data-formulaire.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_7__);








let GererDemandeComponent = class GererDemandeComponent {
    constructor(serviceformulaire, dataserviceform, fb, router, params) {
        this.serviceformulaire = serviceformulaire;
        this.dataserviceform = dataserviceform;
        this.fb = fb;
        this.router = router;
        this.params = params;
        this.date_creation = "";
        this.date_demande = "";
        this.data_demande = [];
        this.affiche = 0;
        this.ColumnsInformation = ['numD', 'dte', 'Etat', 'act'];
        this.FormData = [];
        this.titre = "";
        this.shearchform = this.fb.group({
            Recherche: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)]]
        });
    }
    ngOnInit() { this.initialise(); }
    initialise() {
        this.date_creation = this.params.snapshot.paramMap.get('date_creation');
        this.date_demande = this.params.snapshot.paramMap.get('date_demande');
        this.date_demande = (this.date_demande != null) ? this.date_demande : "";
        this.serviceformulaire.Access(this.date_creation, this.date_demande);
        this.serviceformulaire.Recherche({ date_creation: this.date_creation }).subscribe((data) => {
            if (data.length == 0)
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({ type: "error", text: "ce lien n'est pas valide" }).then(() => { this.router.navigate(['/Acceuil']); });
            else {
                this.FormData = data[0].donne;
                this.serviceformulaire.Initialise_titre(data[0].titre);
                this.titre = data[0].titre;
                if (this.date_demande != "") {
                    this.shearch_form(this.date_demande);
                    this.shearchform.controls.Recherche.setValue(this.date_demande);
                }
                else
                    this.shearch_form("", 0, "", 1);
            }
        });
    }
    shearch_form(val = "", eta = 0, date = "", option = 0) {
        if (option == 0)
            this.dataserviceform.Recherche({ id_form: this.date_creation, dte_dem: val }).subscribe((data) => {
                if (data.length > 0)
                    this.data_demande = data;
                else
                    this.shearch_form("", 0, "", 1);
            });
        else if (option == 1)
            this.dataserviceform.Recherche({ id_form: this.date_creation }).subscribe((data) => { this.data_demande = data; });
        else if (option == 2)
            this.dataserviceform.Recherche_spec({ date_creation: this.date_creation, etat: eta, option: 1 }).subscribe((data) => {
                if (data.length > 0)
                    this.data_demande = data;
                else
                    this.shearch_form("", 0, "", 1);
            });
        else if (option == 3)
            this.dataserviceform.Recherche_spec({ date_creation: this.date_creation, date: date, option: 0 }).subscribe((data) => {
                if (data.length > 0)
                    this.data_demande = data;
                else
                    this.shearch_form("", 0, "", 1);
            });
    }
    getDate(dte) {
        var event = new Date(parseInt(dte));
        return event.toLocaleDateString('fr-FR');
    }
    getEtat(val) {
        return (val == 0) ? "En attente" : (val == 1) ? "Refusé" : (val == 2) ? "Accepté/En cours de traitement" : "traité";
    }
    change(element, option) {
        var titre = (option == 1) ? "Refuser" : (option == 2) ? "Accepter" : "Traiter";
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Details de "' + titre + '"',
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
                var dte = new Date();
                var detail = { etat: option, date: dte.getTime() + '', detail: result.value };
                element.Date_etat.push(detail);
                this.dataserviceform.Modifier(element).subscribe((data) => { });
            }
        });
    }
    Pdf_downoald(element, code_dem) {
        var img = new Image();
        img.src = '../../../../assets/img/images.png';
        var img1 = new Image();
        img1.src = '../../../../assets/img/logo.PNG';
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_7__();
        doc.addImage(img1, 'PNG', 1, 2, 45, 16);
        doc.addImage(img, 'PNG', 160, 2, 45, 16);
        doc.setFontSize(25);
        doc.setTextColor(74, 72, 141);
        doc.setFontType('bold');
        doc.text(22, 37, this.titre + ':');
        var long = 40;
        for (var i = 0; i < this.FormData.length; i++) {
            if (long > 270) {
                long = 22;
                doc.addPage();
            }
            else {
                long += 10;
            }
            var valeur = this.acces_valeur(this.FormData[i].nomChamp, element);
            if (valeur == null) {
                if (this.FormData[i].defaut == "Grand")
                    doc.setFontSize(16);
                else if (this.FormData[i].defaut == "Moyen")
                    doc.setFontSize(14);
                else
                    doc.setFontSize(12);
                doc.setTextColor(74, 72, 141);
                doc.setFontType('bold');
                doc.text(25, long, this.FormData[i].nomChamp + '');
            }
            else {
                if (valeur == "true" || valeur == "false") {
                    doc.setFontSize(12);
                    doc.setTextColor(0, 0, 0);
                    doc.setFontType('bold');
                    if (valeur == "true")
                        doc.rect(25, long - 4, 5, 5, 'F');
                    else
                        doc.rect(25, long - 4, 5, 5);
                    doc.setFontType('');
                    doc.text(35, long, this.FormData[i].nomChamp + '');
                }
                else {
                    valeur = valeur + '';
                    doc.setFontSize(12);
                    doc.setTextColor(0, 0, 0);
                    doc.setFontType('bold');
                    doc.text(25, long, this.FormData[i].nomChamp + ':');
                    if (this.FormData[i].nomChamp.length > 42) //taille de debordement
                     {
                        var sub_part = valeur.length / 50;
                        for (var j = 0; j < sub_part; j++) {
                            if (j == sub_part)
                                break;
                            long += 5;
                            doc.setFontType('');
                            doc.text(30, long + 5, valeur.substring(j * 50, (j * 50) + 50));
                        }
                        long += 5;
                    }
                    else {
                        if (valeur.length > 40) {
                            var sub_part = Math.floor(valeur.length / 100) + 1;
                            long = long + 5;
                            for (var j = 0; j < sub_part; j++) {
                                if (j == sub_part)
                                    break;
                                long = long + 5;
                                var val_tmp = valeur.substring(j * 100, ((j + 1) * 100));
                                doc.setFontType('');
                                doc.text(30, (long + 5), val_tmp);
                            }
                            long = long + 5;
                        }
                        else
                            doc.setFontType('');
                        doc.text(80, long, valeur);
                    }
                }
            }
        }
        doc.save(this.titre + code_dem + '.pdf');
    }
    init_nomchamp(elem) {
        var ret = [];
        for (var i = 0; i < elem.length; i++)
            ret.push(elem[i].nom);
        return ret;
    }
    acces_valeur(nom_chmp, elem) {
        var k = this.init_nomchamp(elem).indexOf(nom_chmp);
        return (k == -1) ? null : elem[k].valeur;
    }
    deconnecte() {
        this.serviceformulaire.Deconnecte(this.date_creation);
    }
};
GererDemandeComponent.ctorParameters = () => [
    { type: _services_formulaire_service__WEBPACK_IMPORTED_MODULE_4__["FormulaireService"] },
    { type: _services_data_formulaire_service__WEBPACK_IMPORTED_MODULE_5__["DataFormulaireService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
GererDemandeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gerer-demande',
        template: __webpack_require__(/*! raw-loader!./gerer-demande.component.html */ "./node_modules/raw-loader/index.js!./src/app/compoments/Supervision/gerer-demande/gerer-demande.component.html"),
        styles: [__webpack_require__(/*! ./gerer-demande.component.css */ "./src/app/compoments/Supervision/gerer-demande/gerer-demande.component.css")]
    })
], GererDemandeComponent);



/***/ }),

/***/ "./src/app/compoments/presentation/presentation.component.css":
/*!********************************************************************!*\
  !*** ./src/app/compoments/presentation/presentation.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbWVudHMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/compoments/presentation/presentation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/compoments/presentation/presentation.component.ts ***!
  \*******************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PresentationComponent = class PresentationComponent {
    constructor() { }
    ngOnInit() {
    }
};
PresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-presentation',
        template: __webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/index.js!./src/app/compoments/presentation/presentation.component.html"),
        styles: [__webpack_require__(/*! ./presentation.component.css */ "./src/app/compoments/presentation/presentation.component.css")]
    })
], PresentationComponent);



/***/ }),

/***/ "./src/app/services/data-formulaire.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/data-formulaire.service.ts ***!
  \*****************************************************/
/*! exports provided: DataFormulaireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormulaireService", function() { return DataFormulaireService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataFormulaireService = class DataFormulaireService {
    constructor(http) {
        this.http = http;
        this.uri = 'http://demandeinfo.mairie-clichy.fr:4000';
    }
    Recherche(recherche) {
        return this.http.post(`${this.uri}/DataForms`, recherche);
    }
    Recherche_spec(recherche) {
        return this.http.post(`${this.uri}/DataFormr`, recherche);
    }
    Ajouter(formulaire) {
        return this.http.post(`${this.uri}/DataForm`, formulaire);
    }
    Modifier(formulaire) {
        return this.http.put(`${this.uri}/DataForm`, formulaire);
    }
    Supprimer(_id) {
        return this.http.delete(`${this.uri}/DataForm/` + _id);
    }
};
DataFormulaireService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataFormulaireService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataFormulaireService);



/***/ }),

/***/ "./src/app/services/formulaire.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/formulaire.service.ts ***!
  \************************************************/
/*! exports provided: FormulaireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaireService", function() { return FormulaireService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let FormulaireService = class FormulaireService {
    constructor(http, cookieservice, router) {
        this.http = http;
        this.cookieservice = cookieservice;
        this.router = router;
        this.uri = 'http://demandeinfo.mairie-clichy.fr:4000';
    }
    Recherche(recherche) {
        return this.http.post(`${this.uri}/Formulaires`, recherche);
    }
    Ajouter(formulaire) {
        return this.http.post(`${this.uri}/Formulaire`, formulaire);
    }
    Modifier(formulaire) {
        return this.http.put(`${this.uri}/Formulaires`, formulaire);
    }
    Supprimer(_id) {
        return this.http.delete(`${this.uri}/Formulaires/` + _id);
    }
    NewMDP(data) {
        return this.http.put(`${this.uri}/Administrations`, data);
    }
    Forget(date_creation, email) {
        return this.http.get(`${this.uri}/Administrations/` + date_creation + '/' + email);
    }
    Connexion(data) {
        return this.http.post(`${this.uri}/Administrations`, data);
    }
    Access(date_creation, date_demande, email = this.cookieservice.get('email'), Crypto = this.cookieservice.get('tempo')) {
        this.http.get(`${this.uri}/Administrations/` + date_creation + '/' + email + '/' + Crypto).subscribe((data) => {
            if (data != "ok")
                this.router.navigate(['/Administration/' + date_creation]);
            else
                this.router.navigate(['/Suivis/' + date_creation + '/' + date_demande]);
        });
    }
    Deconnecte(date_creation) {
        this.cookieservice.removeAll();
        this.router.navigate(['/Administration/' + date_creation]);
    }
    Initialise_conne(email, Crypto) {
        this.cookieservice.put("email", email);
        this.cookieservice.put("tempo", Crypto);
    }
    Initialise_titre(titre) { this.cookieservice.put("titre", titre); }
};
FormulaireService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FormulaireService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormulaireService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\b-ndiaye\Desktop\EFormClichy\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map