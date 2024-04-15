const mongoose = require("mongoose");
const loginScheme = mongoose.Schema(
    {
        full_name:
        {
            type: 'String',
            requried: [true, "Kindly, Enter your Full Name"]
        },
        username:
        {
            type: 'String',
            required: [true, "Kindly, Enter a valid username"]
        },
        password:
        {
            type: 'String',
            required: [true, "Kindly, Enter a valid password"]
        }
    }
)
const user = mongoose.model('user_login', loginScheme);
module.exports = user;
