var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
var listenPort = 3002;
var morgan = require('morgan');

const app = express();
app.use(morgan('combined'))
app.use(cors());
app.use(express.json);
app.use('/', router);
app.listen(listenPort);

var transport = {
  host: 'smtp-mail.outlook.com', 
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`server is ready to take messages on ${listenPort}
      using ${creds.USER} and ${creds.PASS}`);
  }
});

router.post('/send', (req, res, next) => {
  console.log("send: endpoint hit by request")
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message}`

  var mail = {
    from: name,
    to: 'peter_hooper@hotmail.co.nz',
    subject: 'new message from contact form',
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({status: 'fail'})
    } else {
      res.json({status: 'success'})
        transporter.sendMail({
              from: "peter_hooper@hotmail.co.nz",
              to: email,
              subject: "Submission was successful",
              text: `Thank you for contacting us!\n\nForm details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
          }, function(error, info){
              if(error) {
                  console.log(error);
              } else{
                  console.log('Message sent: ' + info.response);
              }
        });
    }
  });
});



