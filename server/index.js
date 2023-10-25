const express = require("express");
const cors = require("cors");
const authRouter = require('./routes/authRoute');
const connecttDB = require("./config/db");
const authRoute = require('./routes/authRoute')
const usersRoute = require('./routes/usersRoute');
const employeesRoute = require('./routes/employeesRoute');
const shiftsRoute = require('./routes/shiftsRoute')
const departmentsRoute = require('./routes/departmentsRoute');

const app = express();
const PORT = 7000;

connecttDB()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoute)
app.use('/users', usersRoute)
app.use('/employees', employeesRoute)
app.use('/shifts', shiftsRoute)
app.use('/departments', departmentsRoute)

app.listen(PORT, () => {
  console.log(`Listen on ${PORT}`);
});
   