const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	const { authorization } = req.headers
	if (!authorization) {
		return res.status(401).send({ error: 'you must be logged in' })
	}
	const token = authorization.replace('Bearer ', '')
	jwt.verify(token, 'My_Screct_key', async (err, payload) => {
		if (err) {
			return res.status(401).send({ error: 'you must be logged in' })
		}
		const { userID } = payload

		const user = await User.findById(userID)

		req.user = user
		next()
	})
}
