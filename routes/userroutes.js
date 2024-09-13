import express from 'express';
import { login,logout, register } from '../Controllers/usercontrollers.js';
import { createUserDetails, getAllUserDetails } from '../Controllers/userDetailsController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
const router = express.Router();



// Route to register a new user
router.route('/register').post(register);

// Route to login
router.route('/login').post(login);
router.route('/logout').post(logout);
router.get('/protected-route', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'You have access to protected data!', user: req.user });
});
// Other routes
router.route('/form').post(createUserDetails);
router.route('/all').get(getAllUserDetails);

export default router;
