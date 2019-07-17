var DataForm = require('../app/models/DataForm')
const nodemailer = require("nodemailer")
var transporter = nodemailer.createTransport('smtp://webmail.ville-clichy.fr/') //smtp du webmail de la ville
module.exports = {
    Add: function(req,res){
        var data_form= new DataForm(req.body)
        data_form.save(function(err){
            if(err)
            console.log('une erreur es survenue l\'ors de la recherche')
            else
            res.json('ok')
        })
    },
    get: function(req,res){
        DataForm.find(req.body,function(err,data_form){
            if(err)
            console.log('une erreur est survenue l\'orr du chargement des données')
            else
            res.json(data_form)
        })
    },
    update: function(req,res){
        DataForm.updateOne({_id:req.body._id},req.body,function(err){
            if(err)
            console.log('une erreur est survenue l\'ors de la modification des données')
            else
            res.json('ok')
        })
    },
    delete: function(req,res){
        DataForm.deleteOne({_id:req.params._id},function(err){
            if(err)
            throw err
            else
            res.json('ok')
        })
    }
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