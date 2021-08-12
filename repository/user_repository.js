const DBconnection = require('../database/DBconnection.js');
module.exports.findUser = async (query) => {
    try{
        let rawQuery = `select * from user where mobile = ${contactNumber}`
        return DBconnection.query(rawQuery)
    } catch(e){

    }
}