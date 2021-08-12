const userRepository = require('../repository/user_repository');

module.exports.getUser = async (contactNumber) => {
    try{
        return userRepository.findUser(contactNumber)
    } catch(e){

    }
}

