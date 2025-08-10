const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { JWT_SECRET } = require('../config/index');

const protect = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token || !token.startsWith('Bearer ')) {
            return res.status(401).json({
                message: 'Unauthorized: No token provided',
                success: false,
                data: {}
            });
        }
        token = token.split(' ')[1];

        // Verifying token
        const payload = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(payload.id).select('-password');

        if (!user) {
            return res.status(401).json({
                message: 'User not found',
                success: false,
                data: {}
            });
        }

        req.user = user;
        next();

    } catch (err) {
        console.error('Error in auth middleware:', err.message);
        return res.status(500).json({
            message: 'Token authorization failed',
            success: false,
            data: {},
            error: err.message
        });
    }
};

module.exports = {
    protect
};
