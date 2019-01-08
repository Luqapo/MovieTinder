const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'movietindersecret');
    } catch (err) {
        return res.status(500).send('Auth fail');
    }
    if (!decodedToken){
        return res.status(401).send('Not authenticated.')
    }
    req.userId = decodedToken.userId;
    next();
}