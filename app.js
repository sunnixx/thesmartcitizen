const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

//Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Template Engine
app.set('views',__dirname + '/views');
app.set('view engine','ejs');

//Routes
app.get('/',function(req,res){
  res.render('pages/index');
});

app.post('/',function(req,res){
  
});

app.listen(3000, function(req,res){
  console.log('The server is running on port 3000');
});
