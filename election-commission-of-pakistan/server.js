const express = require('express'); //Importing Express
const app = express(); //Creating web app with express
const dbConnection = require('./DbConnection/dbconfig'); //Database connection
const dotenv = require("dotenv").config();
const seed = require("./seed");
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;
const user = require('./models/userLogin'); //Model(Schema)
const router = require('./routes/routes')//Imported Router
app.use('/', router);
app.use(express.json());

dbConnection();

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
})