const usersWS = require('../DAL/userWS')
const userActions = require('../DAL/userActions')
const User = require('../models/userModel')

const getAll = async () => {
const usersData = [];
const { data: usersFromWs } = await usersWS.getAllUsers()
const { actions } = await userActions.getAllData()
const usersFromDb = await User.find()


usersFromDb.forEach(userDb => {

    const obj = {
    fullName: userDb.fullName,
    id: userDb._id
    }

   const userWS = usersFromWs.find(userWs => userWs.id === userDb.webServiceId) 
   
   obj.username = userWS.username
   obj.email = userWS.email

   

actions.forEach(action => {
    if(action.id == userDb._id && action.actionsLeft === 0){
        obj.loginAllowed = false
    }else{
        obj.loginAllowed = true
    }
})

usersData.push(obj)

})


return usersData

}

const getUserById = async (id) => {
   const users = await getAll()
   const user = users.find(user => user.id == id)
   return user
}

module.exports = { getAll, getUserById }