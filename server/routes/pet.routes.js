const petController = require('../controllers/pet.controllers');

module.exports = (app) => {
    app.post("/api/pets", petController.createPet)
    app.get('/api/pets', petController.getAllPets);
    app.get('/api/pet/:id', petController.getOnePet);
    app.put('/api/pets/edit/:id', petController.updatePet);
    app.delete('/api/pet/delete/:id', petController.deleteAnExistingPet);
}