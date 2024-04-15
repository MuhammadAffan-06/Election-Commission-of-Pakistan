const express = require('express');
const router = express.Router();
const dbConnection = require('../DbConnection/dbconfig');
const user = require('../models/userLogin');
const voter = require('../models/voters');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const authenticateUser = require('../middleware/jwtauthentication')
router.use(cors());


router.use(express.json());
const connectToDatabase = async () => {
    await dbConnection();
};
connectToDatabase();

// Get Request
router.get('/', (req, res) => {
    res.send("API is working");
})
// User Verification
router.post('/login', async (req, res) => {
    try {
        // Validate username and password
        const { username, password } = req.body;
        if (!username || !password) {  //If one of the field is left empty
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Find user by username
        const existingUser = await user.findOne({ username });

        // Check if user exists
        if (!existingUser) {
            return res.status(401).json({ message: 'This user already exists' }); // Use 401 for unauthorized access
        }
        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Incorrect Password" });
        }

        // Generate a token
        const token = jwt.sign({ username: existingUser.username }, process.env.JWT_SECRET);

        // Send successful login response with token
        res.status(200).json({ token });

    } catch (error) {
        console.error("Error in the login:", error);
        res.status(500).json({ message: "Error in the login" });
    }
});
//Delete a User with it's id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await user.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        console.log("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
//Get all Voters
router.get('/voters',(req, res)=>
{
    res.send("Getting Voters")
})
//Posting a Voter
// router.post('/api/votes',(req,res)=>
// {
    
// })

module.exports = router; //Exports the routes created in this file