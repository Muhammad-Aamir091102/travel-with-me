import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// user register
export const register = async (req, res) => {
   try {
      //hashing password
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(req.body.password, salt)

      const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: hash,
         photo: req.body.photo
      })

      await newUser.save()

<<<<<<< HEAD
      res.status(200).json({ success: true, message: "Successfully created!" })
=======
      res.status(200).json({ success: true, message: "Created successfully!" })
>>>>>>> origin/master
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to create! Try again." })
   }
}

// user login
export const login = async (req, res) => {
   try {
      const email = req.body.email
      const user = await User.findOne({ email })

      // if user doesn't exist
      if (!user) {
<<<<<<< HEAD
         return res.status(404).json({ success: false, message: 'User not found!' })
=======
         return res.status(404).json({ success: false, message: 'User is not found!' })
>>>>>>> origin/master
      }

      // if user is exist then check the passord or compare the password
      const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

      // if password incorrect 
      if (!checkCorrectPassword) {
<<<<<<< HEAD
         return res.status(401).json({ susccess: false, message: "Incorrect email or password!" })
=======
         return res.status(401).json({ susccess: false, message: "The email or password is Incorrect !" })
>>>>>>> origin/master
      }

      const { password, role, ...rest } = user._doc

      // create jwt token
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn:"15d" })

      // set token in the browser cookies and send the response to the client
      res.cookie('accessToken', token, {
         httpOnly: true,
         expires: token.expiresIn
      }).status(200).json({token, data:{...rest}, role})
   } catch (error) {
<<<<<<< HEAD
      res.status(500).json({ susccess: false, message: "Failed to login" })
=======
      res.status(500).json({ susccess: false, message: "login Failed" })
>>>>>>> origin/master
   }
}