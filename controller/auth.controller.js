const {auth} = require("../config/");

class Auth {

    async hasAuth(req,res){
        const {username,password} = await req.body;
        const {usernameConfig,passwordConfig} = auth;
        console.log("Body: ",req.body);
        console.log("Config: ",auth)
        if(
            username===usernameConfig
            && password === passwordConfig
        ){
            res.send({hasAuth: true})
        }else{
            res.send({hasAuth: false})
        }
    }
}

module.exports = new Auth()