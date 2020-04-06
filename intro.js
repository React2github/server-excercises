var express = require('express');
    
var app = express();

app.use(express.static(_dirname + '/server-exercises'));

app.get('/ping', function(req,res,) {
    res.send('Pong')
})

app.listen(3000, function(){
    console.log('server is listening...')
})