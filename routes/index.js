var express = require('express');
var router = express.Router();
const accountSid = 'ACfe67de9fe0cb163a2199c42e7d530292';
const authToken = '13c2711b54ca76b2bc9fe915527960d4';
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