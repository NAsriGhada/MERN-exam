const { PetSchema } = require('../models/pet.model');


module.exports.createPet = (request, response) => {
    const { petName, petType, petDesc, skillOne, skillTwo, skillThree} = request.body;
    PetSchema.create({
        petName,
        petType, 
        petDesc,
        skillOne,
        skillTwo,
        skillThree
    })
        .then(pet => response.status(200).json(pet))
        .catch(err => response.status(400).json(err));
}



module.exports.getAllPets = (request, response) => {
    PetSchema.find()
        .then(pets => response.json(pets))
        .catch(err => response.status(400).json(err))
}



module.exports.getOnePet = (req, res) => {
	PetSchema.findOne({ _id: req.params.id})
		.then(oneSinglePet => res.status(200).json(oneSinglePet))
		.catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};



module.exports.updatePet = (req, res) => {
    PetSchema.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(updatedPet => res.status(200).json(updatedPet))
      .catch(err => res.status(400).json(err));
  };



  module.exports.deleteAnExistingPet = (req, res) => {
    PetSchema.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
  };