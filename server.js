const express = require('express')
const bodyParser = require('body-parser')
const dbCOnfiguration = require('./config/database.config')
const userRoute = require('./routes/router')
const mongoose = require('mongoose')
const port = 3004;
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/user', userRoute)
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
mongoose.connect(dbCOnfiguration.URL, {
    useNewUrlParser: true
}).then(() =>{
    console.log("database connected successfully");
}).catch(err => {
    console.log("Unable to connect to the database", err);
    process.exit();
})
app.get('/' , function(req, res){
    res.json({"message": "Hello welcome to my first crud app"});
})

app.listen(port, () => {
    console.log(`server running on port ${port}...`)
})

//server runned successfully