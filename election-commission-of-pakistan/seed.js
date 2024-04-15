const mongoose = require("mongoose");
const user = require('./models/userLogin');
const dbConnection = require('./DbConnection/dbconfig');
const dotenv = require('dotenv').config();
const bcrypt = require('bcryptjs'); // Import bcryptjs

mongoose.connect(process.env.CONNECTION_STRING);

const sampleUsers = [
    {
        full_name: "Muhammad Affan",
        username: "41303-4447381-7",
        password: "muhammadaffan",
    },
    {
        full_name: "Syed Mudassir Hussain",
        username: "42201-997821-9",
        password: "syedmudassirhussain",
    },
    {
        full_name: "Mustafa Sheikh",
        username: "42501-8526308-3",
        password: "mustafasheikh",
    },
]

async function seedDatabase() {
    try {
        for (const userData of sampleUsers) {
            const existingUser = await user.findOne({ username: userData.username });

            // Hash the password before saving
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            if (existingUser) {
                console.log(`User with CNIC ${userData.username} already exists. Skipping insertion.`);
            } else {
                userData.password = hashedPassword; // Assign hashed password
                await user.create(userData);
                console.log(`User with CNIC ${userData.username} inserted successfully.`);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

seedDatabase();
