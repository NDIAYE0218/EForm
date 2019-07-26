var mongoose = require('mongoose');
var Formulaire = mongoose.Schema({
    date_creation: String,
    titre: String,
    publie: String,
    Emailvalidation: String,
    boutton:
    {
        Nom: String,
        Couleur: String,
    },
    messageValidation:
        [
            {
                Email: String,
                MDP: String,
                Crypto: String,
            }
        ],
    donne:
        [
            //modele des donne 
            // {
            //     nomChamp: String,
            //     type: String,
            //     oblig: Number,
            //     defaut: String,
            //     maxi: Number,
            //     mini: Number,
            //     send: Number,
            //     send_texte:String,
            //     list:[]
            //     complexite: Number, si 0 input, si 1 checkbox, si 2 texterea, si 3 radiobouttont, si 4 select 
            // }
        ],
})
module.exports = mongoose.model('Formulaire', Formulaire);