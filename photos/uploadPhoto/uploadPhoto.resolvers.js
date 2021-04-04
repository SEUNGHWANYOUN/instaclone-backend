import client from "../../client";

export default {
    Mutation: {
        uploadPhoto: async(_,{file, caption}, {loggedInUser}) => {
            let hashtagObj = [];
            if(caption){
                //parse caption
                const hashtags = caption.match(/#[\w}]+/g);
                 hashtagObj = hashtags.map(hashtag => ({
                    where: {hashtag},
                    create: {hashtag},
                }));
                console.log(hashtags);
                //get or create Hashtags
            }
            return client.photo.create({
                data: {
                    file,
                    caption,
                    user :{
                        connect: {
                            id: loggedInUser.id,
                        },
                    },
                    ...(hashtagObj.length > 0 && {
                        hashtags: {
                            connectOrCreate: hashtagObj,
                        },
                    }),
     
                }
            });

        },
    }
}