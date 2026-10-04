const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/sendEmail');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

//REgistering new user
const registerUser = async (req, res) => {
    const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
    const email = typeof req.body.email === 'string' ? req.body.email.trim().toLowerCase() : '';
    const password = typeof req.body.password === 'string' ? req.body.password : '';

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    if (password.length < 8) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });

        return res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        });
    } catch(error) {
        console.error('Registration failed:', error);
        if (error.code === 11000) {
            return res.status(400).json({ message: 'User already exists' });
        }
        return res.status(500).json({ message: 'Could not complete registration. Please try again.' });
    }
};  
//LOGIN USER
const loginUser = async (req, res) => {
 
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
      });
    } else {
        res.status(400).json({message: 'Invalid email or passowrd'})
    }
    } catch (error) {
    res.status(500).json({ message: 'server error' });
  }
};

const getUsers = async(req , res) => {
    try{
        const users = await User.find({}).select('-password');
        res.json(users);
    } catch(error){
        res.status(500).json({ message :'Server error'});
    }
};

module.exports = { registerUser, 
    loginUser, 
    getUsers 
}; 
