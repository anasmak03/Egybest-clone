const  User  = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.register = async (req,res) => {
  const {name, email, password, Type_Cheked} = req.body

  try {
      let user = await User.findOne({email})
      if (user) {
          return res.status(401).json({error : "User Already Exist"})
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      user = new User({name, email,Type_Cheked ,password : hashedPassword})
      await user.save()

      res.status(201).json({message : "User Is registred Successfully"})
  }catch(err) {
      console.log(err)
  }
}

exports.login = async (req,res) => {
  const {email, password} = req.body

  try {
      let user = await User.findOne({email})
      if (!user) {
          return res.status(400).json({ error: "Invalid Credentials" })
      }

      let isMatched = await bcrypt.compareSync(password, user.password)
      if (!isMatched) {
          return res.status(400).json({ error: "Invalid Credentials" })
      }
      const token = await jwt.sign({_id : user._id}, process.env.JWT_SECRET, {
          expiresIn: "1h",
      })

      res.json({token})
  }catch (err) {
      console.log(err)
  }

}