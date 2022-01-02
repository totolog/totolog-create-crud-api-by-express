// express_crud/api/controllers/userController.js

const User = require('../models/user')

module.exports = {
  // 全てのユーザーを取得する。
  find_users : async (req, res) => {
    console.log('req:', req.query.age)
    const users = await User.find({age:req.query.age}).catch(err => {
      res.send(err)
      console.error(err)
    })
    return res.json(users)
  },

  // 新しいユーザーを作成する。
  create_user : async (req, res) => {
    console.log('reqbody:', req.body)
    const user = new User()
    user.name = req.body.name
    user.age = req.body.age
    await user.save().catch(err => {
      res.send(err)
      console.error(err)
    })
    return res.json(user)
  },


  // 特定のユーザーを取得する。
  find_user : async (req, res) => {
    console.log('req.params:', req.params)
    console.log('req.query:', req.query)
    const user = await User.findById(req.params.id).catch(err => {
      res.send(err)
      console.error(err)
    })
    return res.json(user)
  },

  // 特定のユーザーを更新する。
  update_user : async (req, res) => {
    const user = await User.findById(req.params.id).catch(err => {
      res.send(err)
      console.error(err)
    })
    user.name = req.body.name
    user.age = req.body.age
    await user.save()
    return res.json(user)
  },

  // 特定のユーザーを削除する。
  delete_user : async (req, res) => {
    await User.deleteOne({
      _id: req.params.id
    }).catch(err => {
      res.send(err)
      console.error(err)
    })
    return res.json({ message: "Successfully deleted"})
  }
}