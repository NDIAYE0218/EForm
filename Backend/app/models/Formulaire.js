var mongoose = require('mongoose');
var Formulaire = mongoose.Schema({
    date_creation: String,
    titre: String,
    prenom: String,
    nomComplet: String,
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
            //     maxi: String,
            //     mini: String,
            //     send: Number,
            // }
        ],
})
module.exports = mongoose.model('Formulaire', Formulaire);