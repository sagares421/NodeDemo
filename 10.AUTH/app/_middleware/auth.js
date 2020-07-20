const jwt = require('../_service/jwt');

const isValid = (req, res, next) => {
    let token = req.headers['authorization'] || req.params.token || req.query.token || req.body.token;
    if (token) {

        if (jwt.verifyToken(token)) {
            req.session = jwt.verifyToken(token);
            if (req.method == "POST") {
                req.body.created_by = decoded._id || null;
            } else if (req.method == "PUT") {
                req.body.updated_by = decoded._id || null;
            }
            next();
        } else {
            res.status(401).json({
                success: false,
                message: 'Invalid Token'
            })
        }

    } else {
        res.status(401).json({
            success: false,
            message: 'Token not found'
        });
    }
}

module.exports = {
    isValid
}