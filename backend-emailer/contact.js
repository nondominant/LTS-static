const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('./config');


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
    console.log(`server is ready to take messages`);
  }
});



router.post('/contact', (req, res, next) => {
  console.log('processing mail');
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message}`

  console.log(content);
  var mail = {
    from: name,
    to: 'peter_hooper@hotmail.co.nz',
    subject: 'new message from contact form',
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({status: 'fail'})
      console.log('error');
    } else {
      res.json({status: 'success'})
        transporter.sendMail({
              from: "automatic_response_h4x6c47m33s63lwdofjd@outlook.com",
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



module.exports = router;
