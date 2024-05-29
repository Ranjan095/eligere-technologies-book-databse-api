let express = require("express");

const { create_user, login_user } = require("../controllers/user_controller");

let userRoute = express.Router();

module.exports = { userRoute };

userRoute.post("/create", create_user);
userRoute.post("/login", login_user);

module.exports = { userRoute };
