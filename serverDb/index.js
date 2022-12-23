var express = require('express');
var bodyParser = require('body-parser');

var the_Move = require('./controlers/move_Controler');
var auth = require('./controlers/auth');
var app = express();
var cors = require('cors')
app.use(cors())

app.use(bodyParser.json());
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use('/', the_Move);
app.use('/', auth);







const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App runing on port${port} from app`);
});
