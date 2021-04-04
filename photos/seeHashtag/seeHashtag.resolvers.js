import client from "../../client";

export default {
    Query: {
        seeHashtag: (_, {hashtag})=>
            client.user.findUnique({

                where:{
                    hashtag,
                }
            }),
    }
}