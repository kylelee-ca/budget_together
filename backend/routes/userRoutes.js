const router = require('express').Router()
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// @desc Register new user
// @route POST /api/user/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, userId, password } = req.body 

    if (!(name && userId && password)) {
        res.status(400)
        throw new Error('All fields are required')
    }
    const userExists = await User.findOne({ userId })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    // Hashing password
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        userId,
        password: hashed
    })
    
    if (user) {
        res.status(201)
            .json({
                _id: user.id,
                name: user.name,
                userId: user.userId,
                token: generateToken(user._id)
            })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const loginUser = asyncHandler( async(req, res) => {
    const {userId, password } = req.body

    if(!(userId && password)) {
        res.status(400)
        throw new Error('All fields are required')
    }
    const user = await User.findOne({ userId })

    if (user &&  await bcrypt.compare(password, user.password)) {
        res.json({
            _id: user.id,
            userId: user.userId,
            name: user.name,
            token: generateToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})
const  generateToken = (id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '2d'
    })
    return token;
}

const getUserInfo = () => {
    
}
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/info', getUserInfo)

module.exports = router