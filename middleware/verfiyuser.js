const jwt  = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (token){
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
            if(err) res.status(403).json({ message: "Invalid Token" })
            req.user = user;
            next()
        })
    }
}

module.exports = verifyUser;