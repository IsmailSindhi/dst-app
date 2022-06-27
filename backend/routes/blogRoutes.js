const router = require('express').Router();

const {
    createBlog
} = require("../controllers/blogController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// create a blog
router.route("/blogs/new").post(createBlog);
// get all blogs
// get single blog
// update bolg
// delete


module.export = router;