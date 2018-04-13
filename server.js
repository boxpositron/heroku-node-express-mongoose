require('dotenv').load();
const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

const exampleController = require('./controllers/exampleController')

const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})); 

mongoose.Promise = global.Promise;

const mongoOptions = {}
mongoose.connect(process.env.MONGODB_URI,mongoOptions)
mongoose.connection.on('error', err => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
});


app.route('/')
    .get((req, res) => res.send('get ok'))
    .post((req,res) => res.send('post ok'))

app.get('/all', exampleController.getEntries)

app.post('/add', exampleController.storeEntry)
app.post('/update', exampleController.updateEntry)
app.post('/delete', exampleController.deleteEntry)

app.listen(process.env.PORT || 3000, () => console.log('Example app is running'))