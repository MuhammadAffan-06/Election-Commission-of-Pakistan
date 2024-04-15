const mongoose = require('mongoose');
const dbConnection = async () => {
    try {
        {
            const connect = await mongoose.connect(process.env.CONNECTION_STRING);
            console.log("Connection with MongoDB is established");
        }
    }
    catch (error) {
        console.log(error);
        process.exit(1);

    }
}
module.exports = dbConnection;
