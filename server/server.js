const express = require('express');
const cors = require('cors');


const app = express();
require('./config/mongoose.config'); 


app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


const allPetRoutes = require('./routes/pet.routes')
allPetRoutes(app)



app.listen(8000, () => {
    console.log("Listening at Port 8000")
}) 