const express = require('express');
const route = require('./route/route')
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set('strictQuery', true)


mongoose.connect("mongodb+srv://group4:group4@cluster0.dknd8jj.mongodb.net/task",{
    useNewUrlParser:true
})
.then(()=> console.log("MongoDb is connected.."))
.catch((error)=> console.log(error))

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app running on port " + (process.env.PORT || 3000));
  });