const express = require("express");
const {
    createCategory,
    getAllCaterories,
    deleteCategory
} = require('../controllers/categoryController');

const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');


router.route("/category")
.get(isAuthenticatedUser, authorizeRoles('admin'), getAllCaterories)
.post(isAuthenticatedUser, createCategory)
.delete(isAuthenticatedUser, authorizeRoles('admin', deleteCategory));

module.exports = router;