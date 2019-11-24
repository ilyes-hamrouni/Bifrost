const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
var createError = require('http-errors');



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
var models = require('./models');
models.sequelize.sync().then(function(){
    console.log('Nice! Database is fine');
    
}).catch(err => {console.log(err,'something wrong with update');
});


require('./routes')(app);



app.get('*',(req,res) => res.status(200).send({
    message:'Welcome to the beginning of nothingness.',
}));






// app.get('*', (req, res) => res.status(200).send({message: 'Welcome to the beginning of nothingness.',}));
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port,()=>{console.log('running on port 8000');
})
module.exports = app;