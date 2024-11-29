const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middlewares/authMiddleware');
const {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

// Define routes
router.route('/').get(protect, admin, getUsers).post(protect, admin, addUser);
router
    .route('/:id')
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)
    .delete(protect, admin, deleteUser);

module.exports = router;
