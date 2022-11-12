const jwt = require('jsonwebtoken');

//bearer TOKEN. 
const autVerify = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'bearer') {
        const token = re.headers.aithorization.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.payload = decoded;
        } catch (error) {
            return res.status(401).send('Unauthorized');
        }
    } else {
        return res.status(400).send('Token is mandatory');
    }
    next ();
}

module.exports = autVerify

/*
lo tenia como un objeto y debe ser una funcion.
module.exports = {
    autVerify,
}
*/