require('dotenv').config();;

const express = require("express");
const jwt = require('jsonwebtoken');

const router = express.Router();

const usersBLL = require("../BLL/usersBLL");

router.post("/", async (req, res) => {
  const users = await usersBLL.getAll();
  const user = users.find((user) => user.username === req.body.username);
  if (user) {
    if (user.email == req.body.email) {
      if(user.loginAllowed === true){
        const token = jwt.sign(user.username, process.env.ACCESS_TOKEN_SECRET)
        res.send({ accessToken: token, username: user.username });
      }else{
        res.send('User can not be logged in: maximum amount of actions per day has passed !')
      }
       
    } else {
        res.send('Incorrect username or email !')
    }
  } else {
    res.send("No user found !");
  }
});

module.exports = router;
