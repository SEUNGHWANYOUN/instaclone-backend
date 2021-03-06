import client from "../../client";
import { processHashtags } from "../photos.utils";

export default {
    Mutation: {
        uploadPhoto: async(_,{file, caption}, {loggedInUser}) => {
            let hashtagObj = [];
            if(caption){
                //parse caption
                const hashtags = caption.match(/#[\w}]+/g);
                //get or create Hashtags
                 hashtagObj = processHashtags(caption);
                
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