require('dotenv').load()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const openPort = require('first-open-port')


const defaultPort = process.env.PORT || 3000
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
})) 

mongoose.Promise = global.Promise

const mongoOptions = {}
mongoose.connect(process.env.MONGODB_URI,mongoOptions)
mongoose.connection.on('error', err => {
	//eslint-disable-next-line no-console
	console.error(`MongoDB connection error: ${err}`)
	process.exit(1)
})

app.use((req, res, next) => {
	// res.header("Access-Control-Allow-Credentials", true); //Useful when performing cross domain auth 
	res.setHeader('X-Powered-By', '')
	next()
})


const exampleRouter = express.Router()
require('./routes/example')(exampleRouter)

app.use('/',exampleRouter)

/* eslint-disable no-console */
openPort(defaultPort)
	.then(port=>{
		app.listen(port, () => console.log(`Your application is running on http://localhost:${port}`))
	})
	.catch(err=>{
		console.error(`An error occurred ::${err}`)
	})

/* eslint-enable no-console */