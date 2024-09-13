import jwt from 'jsonwebtoken';

const JWT_SECRET = 'loan'; // Again, use environment variables in production

// Middleware to verify JWT
export const authenticateToken = (req, res, next) => {
    const token = req.cookies.authToken || req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Add user info to request object
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
};
