// Google Auth
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.REACT_APP_CLIENT_ID);

exports.authenticateUser = async (req, res, next) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    //After you receive the ID token by HTTPS POST, you must verify the integrity of the token.
    idToken: token,
    audience: process.env.REACT_APP_CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  res.json({ name, email, picture }); //res.json(user)
  next();
};
