const express = require("express");
const qrcode = require("qrcode");
const speakeasy = require("speakeasy");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/qrcode", (req, res) => {
  const email = req.query.email;
  const secret = speakeasy.generateSecret().base32;
  const otpauthUrl = speakeasy.otpauthURL({
    secret,
    label: email,
    issuer: "Google Authenticate",
  });
  qrcode.toDataURL(otpauthUrl, (err, imageUrl) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error generating QR code");
    } else {
      res.send({ imageUrl, secret });
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.post("/verifyOtp", (req, res) => {
  const { email, code, secret } = req.body;

  const isValid = speakeasy.totp.verify({
    secret: secret,
    encoding: "ascii",
    token: code,
  });

  if (isValid) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

app.listen(4000, () => {
  console.log("Server listening on port 3000");
});
