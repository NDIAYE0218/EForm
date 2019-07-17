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
                newform.date_creation = dte.getFullYear() + dte.getTime() + dte.getMilliseconds + dte.getMonth() + dte.getDate() + dte.getMinutes()
                newform.messageValidation = formaliseEmail(req.body.Emailvalidation, req.body.titre)
                newform.boutton = (typeof newform.boutton == "undefined") ? { Nom: "Valider", Couleur: "#3ef608" } : newform.boutton
                newform.save(function (err) {
                    if (err)
                        throw (err)
                    else
                        res.json('ok')
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
}
function generationString(length) {
    var result = '';
    var characters = 'Acdefghijklmnopqrstuvwxyz01234567BCDEFGHIJKLMNOPQRSTUAcdefghijklmnopqrstuvwxyz01234567BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789VWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function sendmail(to, message) {
    var mailOptions = {
        from: '"Ne pas repondre (EFormClichy)" <neparepondre.EFormClichy@ville-clichy.fr>', // sender address
        to: to, // list of receivers
        subject: "Nouveau mot de passe EFormClichy", // Subject line
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
function formaliseEmail(emailiste, titre) {
    var emailtab = emailiste.split(',')
    var ret = []
    var message = '<span style="font-size:120%">Bonjour,<br>Un nouveau formulaire électronique portant le titre ' + titre + ' viens d\'être créé.<br>Vous avez été désigné comme un des superviseurs de toutes demandes effectuées via ce formulaire, par conséquent vous recevrez un e-mail à chaque demandes effectuées via ce formulaire, et vous serez chargé du suivi de tous les formulaires via une plateforme dédié. Afin de vous connecter a cette plateforme nous vous invitons a vous créez un mot de passe en cliquant sur ce '
    for (var i = 0; i < emailtab.length; i++) {
        var crypto = generationString(100)
        var lien = "#/" + crypto
        var mess = message + '<a href="' + lien + '">lien</a>.</span>'
        ret.push({ Email: emailtab[i], MDP: generationString(100), Crypto: crypto })
        sendmail(emailtab[i], mess)
    }
    return ret
}