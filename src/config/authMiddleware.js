const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // El token suele estar en el formato 'Bearer <token>'
    
    if (!token) return res.sendStatus(401); 

    jwt.verify(token, 'ElMeroMiniPeKka', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
