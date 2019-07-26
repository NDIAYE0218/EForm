var mongoose = require('mongoose');
var DataForm = mongoose.Schema({
    id_form:String,
    dte_dem:String,
    data: [{
        nom:String,
        valeur:String,
        message:String
    }],
    Date_etat:[
        {
            etat:Number, //etat 0 => en attente, etat 1 => refusé, etat 2 => validé, etat 3 => en cours de traitement, etat 4 => traité
            date:String,
            detail:String,
        }
    ]
})
module.exports = mongoose.model('DataForm', DataForm);