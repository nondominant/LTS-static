const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const server = require('http').createServer(app);
const router = require('./contact');

app.use(bodyParser.urlencoded({
   extended: false 
}));

app.use(bodyParser.json());

app.use('/', router);

app.use(cors());

app.use(express.json({
  type: '*/*',
}));







server.listen(3002, function() {
  console.info(server.address());
});



