const jwt = require('jsonwebtoken');

function authenticateUser(req, res, next)
{
    const token = req.headers.authorization;

    if(!token)
    {
        return res.status(401).json({message: "Authentication token is required"});
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET); //Assign the user info to decoded
        req.user = decoded;
        next();
    } catch (error) {
        return res.send(401).json({message: 'Invalid Token'});
    }
}
module.exports = authenticateUser;