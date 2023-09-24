const jf = require('jsonfile')

const path = './data/userActions.json'

const getAllData = () => {
    return jf.readFile(path)
}

const saveData = (data) => {
   jf.writeFile(path, data)
   return "Data saved successfully !"
}

module.exports = { getAllData, saveData }