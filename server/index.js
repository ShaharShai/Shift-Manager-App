const express = require("express");
const cors = require("cors");
const authRouter = require('./routes/authRoute');
const connecttDB = require("./config/db");
const authRoute = require('./routes/authRoute')
const usersRoute = require('./routes/usersRoute');

const app = express();
const PORT = 7000;

connecttDB()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoute)
app.use('/users', usersRoute)

app.listen(PORT, () => {
  console.log(`Listen on ${PORT}`);
});
