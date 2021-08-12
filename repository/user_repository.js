const mysql = require('mysql');
const DBconnection = require('../database/DBconnection.js');
module.exports.findUser = async (contactNumber) => {
    try{
        let rawQuery = `select * from user where mobile = ${contactNumber}`
        return DBconnection.query(rawQuery)
    } catch(e){

    }
}

module.exports.createUser = async (data) => {
    try{
        let rawQuery = mysql.format('insert into user(mobile,data) values(?,?)',[data.mobile,JSON.stringify(data.details)]);
        return DBconnection.query(rawQuery)
    } catch(e){

    }
}

module.exports.updateUser = async (data) => {
    try{
        let rawQuery = mysql.format('update user set data = ? where mobile=?',[JSON.stringify(data.details),data.mobile]);
        return DBconnection.query(rawQuery)
    } catch(e){

    }
}