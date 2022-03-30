const express = require('express')
const router = express.Router()
// const { requireLogin } = require("../middleware/auth")
const  User  = require('../models/User');

const {register,login} = require('../controllers/authContro');


router.post('/register', register)
router.post('/login', login)

// router.get("/", requireLogin, async (req, res) => {
//     console.log(req.user)
//     try {
//       const user = await User.findById(req.user._id).select("-password")
//       res.json(user)
//     } catch (err) {
//       console.log(err)
//     }
//   })
  
  
  
module.exports = router