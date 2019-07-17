var mongoose = require('mongoose');
var DataForm = mongoose.Schema({
    id_form:String,
    data: [{
        nom:String,
        valeur:String
    }],
    Date_etat:[
        {
            etat:Number,
            date:String
        }
    ]
})
module.exports = mongoose.model('DataForm', DataForm);