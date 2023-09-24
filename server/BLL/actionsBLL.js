const actionsWS = require('../DAL/userActions')

const getActionByUser = async (userId) => {
const { actions } = await actionsWS.getAllData()
const userAction = actions.findLast(action => action.id === userId)
return userAction
}

const commitAction = async (userId) => {
    const { actions } = await actionsWS.getAllData()
    const userAction = await getActionByUser(userId)
    if(userAction){
    const obj = {
        id: userId,
        maxActionsAllowed: userAction.maxActionsAllowed
    }
    if(isTodaySameAsGivenDate(userAction.date)){
        if(userAction.actionsLeft > 0){
            obj.actionsLeft = userAction.actionsLeft - 1
            obj.date = userAction.date
            actions.push(obj)
            await actionsWS.saveData({"actions": actions})
            return console.log('Actions saved successfully !')
        }else{
            return console.log('No actions left for user !')
        }
    }else{
        obj.actionsLeft = 2
        obj.date =  new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });
          actions.push(obj)
          await actionsWS.saveData({"actions": actions})
          return console.log('Actions saved successfully !')
    }
    }else{
        const obj = {
            id: userId,
            maxActionsAllowed: 3,
            date: new Date().toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              }),
              actionsLeft: 2,
              
        }
        actions.push(obj)
        await actionsWS.saveData({"actions": actions})
        return console.log('Actions saved successfully !')
    }


   
}

function isTodaySameAsGivenDate(givenDate) {
    const today = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  
    return today === givenDate;
  }

module.exports = { commitAction }