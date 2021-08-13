require('dotenv').config();
var express = require('express');
var router = express.Router();
const accountSid = process.env.SID;
const authToken = process.env.AUTH;
const client = require('twilio')(accountSid, authToken);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.post('/sendMedia', function(req, res, next) {
  let url = req.body.url;
  let toPhone = req.body.to;
  let body = req.body.content;
  //res.render('index', { title: 'Express' });
  client.messages.create({
    mediaUrl: [url],
    body:body,
    from: 'whatsapp:+14155238886',
    to: toPhone
  })
  .then(message => {
    console.log(message.sid);
    res.json({"resp":message}).end();
  })
  .catch(err=>console.log(err));
});
module.exports = router;