import client from "../client";

export default {

    Query: {
        //findUniqie 유니크로 설정된 필드의 값만 찾아줌
        seeProfile: (_, {username})=> client.user.findUnique({

            where:{
                username,
                
            },
        }),

    },
    

}