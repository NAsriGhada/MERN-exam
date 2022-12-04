const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({
    petName: {    type: String,
                required: [true, "You must type the name"],
                minLength: [3, "Name must be at least 3 characters long"]
                },
    petType: {
        type: String,
        required: [true, "You must insert the type"],
        minLength: [3, "Pet type must be at least 3 characters long"]
    },
    petDesc: {
        type: String,
        required: [true, "You must write the description"],
        minLength: [3, "Description must be at least 3 characters long"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },

}, 
{ timestamps: true });
module.exports.PetSchema = mongoose.model('Petchema', PetSchema);