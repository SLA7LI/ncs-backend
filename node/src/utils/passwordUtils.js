
const bcrypt = require("bcryptjs")

class PasswordUtils{

    async hashPassword(password){
        try{
            const hashedPassword=await bcrypt.hash(password,4)
            return hashedPassword
        }
        catch(error){
            const err=new Error("error hashing the password")
            err.statusCode=400
            throw err
        }
    }

    async comparedPasswords(password,storedHashedPassword){
        let testHash=await bcrypt.compare(password,storedHashedPassword)
        
        if(testHash){
            return true
        }
        return false
    }
}


module.exports = new PasswordUtils