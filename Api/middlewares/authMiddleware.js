const Jwt = require("jsonwebtoken");

const decode = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    /* console.log(token);
    console.log(req.headers) */ if (!token) {
      res.status(200).send("Your are not Authorised");
      return;
    }

    const id = await Jwt.verify(token, "SyedSenseBlog");
    req.body.id = id;
    next();
  } catch (error) {
    res.status(400).json({ error: "parahtu dik hoi " });
  }
};
module.exports = decode;
