const express = require('express')
const app = express ()
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const main = require('./routes/main');



app.use('/',main)

 
 mongoose.connect('mongodb+srv://emre:esmeremre860@cluster0.vz2em.mongodb.net/cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const path = require('path')

app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');




app.listen(3000,()=>{
    console.log("server listening on 3000");
});