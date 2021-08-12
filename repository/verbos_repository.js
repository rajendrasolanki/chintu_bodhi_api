const mysql = require('mysql');
const DBconnection = require('../database/DBconnection.js');

module.exports.getVerbosReply = async (contactNumber) => {
    try{
        let rawQuery = mysql.format('select * from verbosReply where mobile = ?;',[contactNumber])
        return DBconnection.query(rawQuery)
    } catch(e){

    }
}

module.exports.createVerbosReply = async (data) => {
    try{
        let rawQuery = mysql.format('insert into verbosReply(mobile,reply) values(?,?);',[data.mobile,data.flow,JSON.stringify(data.reply)]);
        return DBconnection.query(rawQuery)
    } catch(e){

    }
}

module.exports.appendVerbosReply = async (data) => {
    try{
        let rawQuery = mysql.format('update verbosReply set data = ? where mobile=?',[JSON.stringify(data.details),data.mobile]);
        return DBconnection.query(rawQuery)
    } catch(e){

    }
}