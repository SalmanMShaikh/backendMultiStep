const express = require("express");
const router = express.Router();
const {
  saveFormData,
  
} = require("../services/saveData.js");

const {verifyAccessToken, generateToken}= require("../authorize.js");

router.post(
  "/save_data",
  verifyAccessToken,
  saveFormData
);

router.get('/generateToken',generateToken
)


module.exports = router;