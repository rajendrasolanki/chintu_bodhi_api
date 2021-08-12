const mysql = require('mysql');
const DBconnection = require('../database/DBconnection.js');
module.exports.getBotReply = async (data) => {
    try{
        let rawQuery = mysql.format('select * from bot_reply where mobile = ? and flow = ?;',[data.mobile,data.flow]);
        return DBconnection.query(rawQuery)
    } catch(e){

    }
}

module.exports.createBotReply = async (data) => {
    try{
        let rawQuery = mysql.format('insert into bot_reply(mobile,flow,reply) values(?,?);',[data.mobile,data.flow,JSON.stringify(data.reply)]);
        return DBconnection.query(rawQuery)
    } catch(e){

    }
}

module.exports.appendBotReply = async (data) => {
    try{
        let rawQuery = mysql.format('update bot_reply set data = ? where mobile=?',[JSON.stringify(data.details),data.mobile]);
        return DBconnection.query(rawQuery)
    } catch(e){

    }
}