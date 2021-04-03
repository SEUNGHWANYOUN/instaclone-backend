import client from "../../client"
import bcrypt from "bcrypt"


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
                await client.user.create({
                    data: {
                        username,
                        email,
                        firstName,
                        lastName,
                        password: uglyPassword,                 
                    },
                });
                return{
                    ok: true,
                };
                //save and retrun the user
                //try 이용시 에러(무슨 에러든) catch로 넘어간다
                }catch(e){

                    return {
                        ok: false,
                        error: "Cant Creat account.",
                    };
                
                }

        },



}
};