const express = require("express");
const usersBLL = require("../BLL/usersBLL");
const actionsBLL = require("../BLL/actionsBLL");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await usersBLL.getAll();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await usersBLL.getUserById(id);
  res.send(user);
});

router.post("/commitAction", async (req, res) => {
  try {
    const result = await actionsBLL.commitAction(req.body.userId);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
