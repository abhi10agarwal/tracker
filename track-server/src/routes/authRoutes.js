const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const router = express.Router()
const jwt = require('jsonwebtoken')
router.post('/signup', async (req, res) => {
	const { email, password } = req.body

	try {
		const user = new User({ email, password })
		await user.save()
		const token = jwt.sign({ userID: user._id }, 'My_Screct_key')
		res.send({ token })
	} catch (err) {
		return res.status(422).send(err.message)
	}
})
router.post('/signin', async (req, res) => {
	const { email, password } = req.body

	if (!email || !password) {
		return res.status(422).send({ error: 'Fields cannot be blank' })
	}

	const user = await User.findOne({ email })
	if (!user) {
		return res.status(422).send({ error: 'Invalid password or email' })
	}
	try {
		await user.comparePassword(password)
		const token = jwt.sign({ userID: user._id }, 'My_Screct_key')
		res.send({ token })
	} catch (err) {
		return res.status(422).send({ error: 'Invalid password or email' })
	}
})

module.exports = router
