require('./models/User')
require('./models/Track')
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const requireAuth = require('./middlewares/requireAuth')
const trackRoutes = require('./routes/trackRoutes')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

const mongoURI =
	'mongodb+srv://ragnatool:8190@shubhaM@cluster0.zbtlq.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
	console.log('Connected to mongo database')
})
mongoose.connection.on('error', err => {
	console.error('error connecting to mongo', err)
})
app.get('/', requireAuth, (req, res) => {
	res.send(`${req.user.email}`)
})

app.listen(3000, () => {
	console.log('server started')
})
