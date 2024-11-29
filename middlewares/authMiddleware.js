const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Not authorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (err) {
        res.status(401).json({ message: 'Not authorized' });
    }
};

exports.admin = (req, res, next) => {
    if (req.user?.role !== 'Admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};
