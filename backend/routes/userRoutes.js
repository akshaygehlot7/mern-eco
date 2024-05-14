const express = require("express");
const { registerUser, 
    loginUser, 
    logout, 
    forgotPassword, 
    resetPassword,
    getUserDetails, 
    updatePassword,
    updateProfile,
    getAllUser,
    getSingleUser,
    deleteUser,
    updateUserRole} = require("../controllers/userControllers");
    
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");
const router = express.Router();

// router.post("/register", registerUser);
 
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router.route("/admin/users")
.get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
router.route("/admin/user/:id")
.get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
.put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);



// router.route("/login").post(loginUser);
module.exports = router;
