const express = require("express");
const { asyncHandler } = require("../middleware/async-handler");

// Google Auth
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.REACT_APP_CLIENT_ID);

const router = express.Router();

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      //After you receive the ID token by HTTPS POST, you must verify the integrity of the token.
      idToken: token,
      audience: process.env.REACT_APP_CLIENT_ID,
    });
    const { name, email, picture } = ticket.getPayload();
    /*res.cookie("session-token", token, {
      maxAge: 60 * 60 * 1000, // 1 hour
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
*/
    //TODO:  use the user information contained in the token to establish a session or create a new account.

    // TODO: insert this info name, email, picture... into the database
    res.status(201);
    res.json({ name, email, picture });
  })
);

router.get("/dashboard", (req, res) => {
  res.send("This route is protected");
});

module.exports = router;
