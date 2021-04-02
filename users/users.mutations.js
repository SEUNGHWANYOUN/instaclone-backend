import client from "../client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


//Mutation 함수들의 내부에서 일어나는 프로세스를 정의
export default {
    Mutation:{
        creatAccount: async (_,
            {
                firstName,
                lastName,
                username,
                email,
                password
            }) => {
                try{
                                    // check if username or email are already on DB          
                const existingUser = await client.user.findFirst({
                    where :{
                        //OR : One or more conditions must return ture.
                        OR: [
                            {
                                username,

                            },
                            {
                                email,
                            },
                        ],
                    },
                });
                
                if(existingUser){
                    throw new Error("This username/password is alreadt taken.");
                }
                //console.log(existingUser);
                //hash password
                const uglyPassword = await bcrypt.hash(password, 10);
                //console.log(uglyPassword);
                return client.user.create({
                    data :{
                        username,
                        email,
                        firstName,
                        lastName,
                        password: uglyPassword,
                        
                    },
                });
                //save and retrun the user

                //try 이용시 에러(무슨 에러든) catch로 넘어간다
                }catch(e){

                    return e;
                
                }

        },

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