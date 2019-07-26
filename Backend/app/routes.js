var Formulaire=require('../controleurs/Formulaire')
var DataForm=require('../controleurs/DataForm')
module.exports = function(app) {
    //gestion des formulaire
    app.post('/Formulaire',Formulaire.Add)
    .post('/Formulaires',Formulaire.get)
    .put('/Formulaires',Formulaire.Update)
    .delete('/Formulaires/:_id',Formulaire.delete)
    //gestion des dataForm
    .post('/DataForm',DataForm.Add)
    .post('/DataForms',DataForm.get)
    .put('/DataForm',DataForm.update)
    .delete('/DataForm/:_id',DataForm.delete)
    .post('/DataFormr',DataForm.getByetat_or_date)
    //gestion connexion admin
    .put('/Administrations',Formulaire.NewMDP)
    .get('/Administrations/:date_creation/:Email',Formulaire.Forget)
    .post('/Administrations',Formulaire.Connexion)
    .get('/Administrations/:date_creation/:Email/:Crypto',Formulaire.Access)
}