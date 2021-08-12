const express = require('express');
const router = express.Router();
const Status = require('http-status')
const userService = require('./services/user_service');
// GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:contactNumber', function(req, res, next) {
    try{
        const result = userService.getUser(req.params.contactNumber)
        res.status(200).json(result)
    } catch (e){
        next(e)
    }
});

module.exports = router;

