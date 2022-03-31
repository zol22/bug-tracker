const express = require("express");
const { asyncHandler } = require("../middleware/async-handler");
const { authenticateUser } = require("../middleware/auth-user");

const router = express.Router();

router.post(
  "/login",
  authenticateUser,
  asyncHandler(async (req, res) => {
    //TODO:  use the user information contained in the token to establish a session or create a new account.

    // TODO: insert this info name, email, picture... into the database
    //Next, we check if the user received from google already exists in our database. If it exists then we return the same user along with the token, or else, we create and save a new user in our database.
    /*const user = await db.user.upsert({ 
      where: { email: email },
      update: { name, picture },
      create: { name, email, picture }
  })*/

    res.status(201);
  })
);

router.get("/dashboard", (req, res) => {
  res.send("This route is protected");
});

module.exports = router;
