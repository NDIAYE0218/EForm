var Formulaire = require('../app/models/Formulaire')
const nodemailer = require("nodemailer")
var transporter = nodemailer.createTransport('smtp://webmail.ville-clichy.fr/') //smtp du webmail de la ville
module.exports = {
    get: function (req, res) {
        Formulaire.find(req.body, function (err, formulaires) {
            if (err)
                console.log("un problème es survenue l'ors du chargement des données")
            else
                res.json(formulaires)
        })
    },
    Add: function (req, res) {
        Formulaire.findOne({ titre: req.body.titre }, function (err, form) {
            if (err)
                console.log("probleme de recherche pour l'ajout")
            else if (form != null)
                res.json('ko')
            else {
                var newform = new Formulaire(req.body)
                var dte = new Date()
                var dte_cr = generationString(10)+dte.getFullYear() +generationString(10)+ dte.getTime() +generationString(10)+ dte.getMilliseconds() +generationString(10)+ dte.getMonth() +generationString(10)+ dte.getDate() +generationString(10)+ dte.getMinutes()
                newform.date_creation =dte_cr
                newform.messageValidation = formaliseEmail(req.body.Emailvalidation, req.body.titre,dte_cr)
                newform.boutton = (typeof newform.boutton == "undefined") ? { Nom: "Valider", Couleur: "#3ef608" } : newform.boutton
                newform.save(function (err) {
                    if (err)
                        throw (err)
                    else
                        res.json(dte_cr)
                })
            }
        })
    },
    Update: function (req, res) {
        Formulaire.updateOne({ _id: req.body._id }, req.body, function (err) {
            if (err)
                console.log('une erreur est subvenue l\'hors de la modification des champs')
            else
                res.json('ok')
        })
    },
    delete: function (req, res) {
        Formulaire.deleteOne({ _id: req.params._id }, function (err) {
            if (err)
                console.log('une erreur est survenue l\'ors de la suppression des donné')
            else
                res.json('ok')
        })
    },
    NewMDP: function(req,res){
        Formulaire.findOne({date_creation:req.body.date_creation},function(err,dataform){
            if(err)
            throw err
            else if(dataform==null)
            res.json('ko1')
            else
            res.json(ChangeMDP(req.body,dataform))
        })
    },
    Forget: function(req,res){
        Formulaire.findOne({date_creation:req.params.date_creation},function(err,dataform){
            if(err)
            throw err
            else if(dataform==null)
            res.json('ko1')
            else
            res.json(frget(req.params.Email,dataform.messageValidation,dataform.date_creation))
        })
    },
    Connexion: function(req,res){
        Formulaire.findOne({date_creation:req.body.date_creation},function(err,dataform){
            if(err)
            throw err
            else if(dataform==null)
            res.json('ko1')
            else
            res.json(connect(req.body,dataform.messageValidation))
        })
    },
    Access: function(req,res){
        //s'assure perpétuelement que l'utilisateur a bien le droit d'effectué une action
        var data={Email:req.params.Email,Crypto:req.params.Crypto}
        Formulaire.findOne({date_creation:req.params.date_creation},function(err,dataform){
            if(err)
            throw err
            else if(dataform==null)
            res.json('ko1')
            else
            res.json(connect(data,dataform.messageValidation,true))
        })
    }
}
var Link="http://localhost:4200/Administration/"
function generationString(length) {
    var result = '';
    var characters = 'Acdefghijklmnopqrstuvwxyz01234567BCDEFGHIJKLMNOPQRSTUAcdefghijklmnopqrstuvwxyz01234567BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789VWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function sendmail(objet_mess,to, message) {
    var mailOptions = {
        from: '"Ne pas repondre (EFormClichy)" <neparepondre.EFormClichy@ville-clichy.fr>', // sender address
        to: to, // list of receivers
        subject: objet_mess, // Subject line
        text: 'ne pas repondre, mail automatique',
        html: message // html body
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('notification envoyé: ' + info.response);
    })
}
function formaliseEmail(emailiste, titre,dte_cr) {
    var emailtab = emailiste.split(',')
    var ret = []
    var message = '<span style="font-size:120%">Bonjour,<br>Un nouveau formulaire électronique portant le titre ' + titre + ' viens d\'être créé.<br>Vous avez été désigné comme un des superviseurs de toutes demandes effectuées via ce formulaire, par conséquent vous recevrez un e-mail à chaque demandes effectuées via ce formulaire, et vous serez chargé du suivi de tous les formulaires via une plateforme dédié. Afin de vous connecter a cette plateforme nous vous invitons a vous créez un mot de passe en cliquant sur ce '
    for (var i = 0; i < emailtab.length; i++) {
        var crypto = generationString(100)
        var lien = Link+dte_cr+"/"+ crypto
        var mess = message + '<a href="' + lien + '">lien</a>.</span>'
        ret.push({ Email: emailtab[i], MDP: generationString(100), Crypto: crypto })
        sendmail("Nouveau mot de passe EFormClichy",emailtab[i], mess)
    }
    return ret
}
function ChangeMDP(data,dataform){
    var res='ko2'
    for(var i=0;i<dataform.messageValidation.length;i++)
        if(dataform.messageValidation[i].Email==data.Email && dataform.messageValidation[i].Crypto==data.Crypto)
           {
            dataform.messageValidation[i].Crypto=generationString(100)
            dataform.messageValidation[i].MDP=data.MDP
            Formulaire.updateOne({ _id: dataform._id },dataform,function(err){
                if(err)
                throw err
            })
            res='ok'
            break;
           } 
    return res
}
function frget(Email,messageValidation,dte_creation){
    var res='ko2'
    message="<span style=\"font-size:120%\">Suite a votre demande vous pouvez renouveller votre mot de passe en cliquant <a href=\""+Link+dte_creation+"/"
    for(var i=0;i<messageValidation.length;i++)
    if(messageValidation[i].Email=Email){
        message+=messageValidation[i].Crypto+"\">ICI</a></span>"
        sendmail("Nouveau mot de passe",Email,message)
        res='ok'
        break
    }
    return res
}
function connect(data,dataform,option=false){
    var res='ko2'
    for(var i=0;i<dataform.length;i++)
    if(!option)
    {
        if(dataform[i].Email=data.Email && dataform[i].MDP==data.MDP)
        res=dataform[i].Crypto
    }
    else
    if(dataform[i].Email=data.Email && dataform[i].Crypto==data.Crypto)
    res='ok'
    return res
}