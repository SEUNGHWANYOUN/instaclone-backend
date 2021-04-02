import client from "../../client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//Mutation 함수들의 내부에서 일어나는 프로세스를 정의
export default {
    Mutation:{
        login: async(_,{username, password})=>{
            //find user whith args.username
            const user = await client.user.findFirst({
                where:{
                    username
                }
            })
            if(!user){
                return{
                    ok: false,
                    error: "User not found."
                };
            }
            //check password with args.password
            const passwordOK = await bcrypt.compare(password, user.password);
            if(!password){
                return{
                    ok: false,
                    error: "Incorrect password."
                };
            }
            //issue a token and send it to the user
            const token = await jwt.sign({id: user.id}, process.env.SECRET_KEY);
            return{
                ok: true,
                token,

            };
        },
    },

};