const Fruits = require('./db-data.js')


module.exports = {

  async getOneFruit(req, res, next) {
    let fruitMap = {}
    for (let fruit of Fruits) {
        fruitMap[fruit.name.toLowerCase()] = fruit
    }
    let fruitQuery = req.params.fruit
    if (fruitMap[fruitQuery]) {
        return res.status(200).json({
            data: fruitMap[fruitQuery],
            message: `Available a ${fruitMap[fruitQuery].name}!`
        })
    } else {
        return res.status(400).json({
            error: 'Fruit not found.'
        })
    }
},

  async getAllFruits(req, res, nextt) {
    return res.status(200).json({
      data: Fruits,
      message: 'Got it!'
    })
  }




}