const mongoose = require('mongoose');

const connecttDB = () => {
    mongoose
    .connect('mongodb://127.0.0.1:27017/ShiftManager')
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(`Error connecting to database: ${err}`))
}

module.exports = connecttDB