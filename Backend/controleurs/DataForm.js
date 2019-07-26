var DataForm = require('../app/models/DataForm')
var Formulaires = require('../app/models/Formulaire')
const nodemailer = require("nodemailer")
var transporter = nodemailer.createTransport('smtp://webmail.ville-clichy.fr/') //smtp du webmail de la ville
module.exports = {
    Add: function (req, res) {
        var data_form = new DataForm(req.body)
        var start = Date.now();
        var dte_dem = generationString(2) + start.toString().substring(9) + generationString(2)
        data_form.dte_dem = dte_dem
        data_form.Date_etat = [{ etat: 0, date: start, detail: "" }]
        sender_message_nouvel_demande(data_form.data, data_form.id_form, dte_dem)
        data_form.save(function (err) {
            if (err)
                console.log('une erreur es survenue l\'ors de la recherche')
            else
                res.json(dte_dem)
        })
    },
    get: function (req, res) {
        DataForm.find(req.body, function (err, data_form) {
            if (err)
                console.log('une erreur est survenue l\'orr du chargement des données')
            else
                res.json(data_form)
        }).sort({ _id: -1 })
    },
    update: function (req, res) {
        DataForm.updateOne({ _id: req.body._id }, req.body, function (err) {
            if (err)
                console.log('une erreur est survenue l\'ors de la modification des données')
            else
                {
                    verifEmailAndSend(req.body.id_form,req.body.dte_dem,req.body.data)
                    res.json('ok')
                }
        })
    },
    delete: function (req, res) {
        DataForm.deleteOne({ _id: req.params._id }, function (err) {
            if (err)
                throw err
            else
                res.json('ok')
        })
    },
    getByetat_or_date: function (req, res) {
        DataForm.find({id_form:req.body.date_creation}, function (err, data_form) {
            if (err)
                console.log('une erreur est survenue l\'orr du chargement des données')
            else
                res.json(findspec(data_form,req.body))
        }).sort({ _id: -1 })
    }
}
function sendmail(object, to, message) {
    var mailOptions = {
        from: '"Ne pas repondre (EFormClichy)" <neparepondre.EFormClichy@ville-clichy.fr>', // sender address
        to: to, // list of receivers
        subject: object, // Subject line
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
function generationString(length) {
    var result = '';
    var characters = 'Acdefghijklmnopqrstuvwxyz01234567BCDEFGHIJKLMNOPQRSTUAcdefghijklmnopqrstuvwxyz01234567BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789VWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function sender_message_nouvel_demande(data, dte_creation, dte_demande) {
    var link = "http://localhost:4200/Suivre/" + dte_creation + "/" + dte_demande
    var link2 = "http://localhost:4200/Suivis/" + dte_creation + "/" + dte_demande
    Formulaires.findOne({ date_creation: dte_creation }, function (err, Formulaire) {
        var message2 = "<span style:\"font-size: 120%\">Une nouvelle demande concernat <i><b>\"" + Formulaire.titre + "\" viens d'être effectué, trouver tous les détail concernant celle-ci en cliquant <a href=\"" + link2 + "\">ici</a>.<br>Cette demande est en attente de validation.</span>"
        sendmail("Nouvelle demande" + Formulaire.titre, Formulaire.Emailvalidation, message2)
    })
    for (var i = 0; i < data.length; i++)
        if (data[i].message != "") {
            var message = "<span style:\"font-size: 120%\">" + data[i].message + "<br>suivez votre demande en cliquant <a href=\"" + link + "\">ici</a>.</span>"
            sendmail("Demande " + dte_demande, data[i].valeur, message)
        }
}
function findspec(data_form,data){
    var ret=[]
    if(data.option){
        //recherche par etat
        for(var i=0;i<data_form.length;i++)
            if(data_form[i].Date_etat[data_form[i].Date_etat.length-1].etat==data.etat)
            ret.push(data_form[i])
    }
    else{
        for(var i=0;i<data_form.length;i++)
       { 
           var dte=new Date(parseInt(data_form[i].Date_etat[0].date))
           var dte_aj=new Date(data.date)
           if(dte.getDate()==dte_aj.getDate() && dte.getMonth()==dte_aj.getMonth() && dte.getFullYear()==dte_aj.getFullYear())
           ret.push(data_form[i])
        }

    }
   return ret
}
function verifEmailAndSend(date_creation,dte_dem,data){
    var link = "http://localhost:4200/Suivre/" + date_creation + "/" + dte_dem
    var message="<span style:\" font-size:120%\">Bonjour,<br>Votre demande <b><i>"+dte_dem+"</i></b> viens de subir une modification vous pouvez la consulter en suivant ce <a href=\""+link+"\">lien</a>.</span>"
    for(var i=0;i<data.length;i++){
        if(data[i].valeur.includes('@') && data[i].valeur.includes('.') && data[i].valeur.length>5)
        sendmail("Enevenement demande " + dte_dem, data[i].valeur, message)
    }
}