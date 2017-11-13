var express = require('express');
var app = express();
var router = require('./router');
var path = require('path');

app.use('/api', router);
app.use(express.static(path.join(__dirname, '../dist' )));


app.listen(process.env.PORT || 3412);



