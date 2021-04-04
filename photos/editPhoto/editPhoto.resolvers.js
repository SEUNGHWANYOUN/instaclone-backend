import client from "../../client";
import { protectedResolver } from "../../users/user.utils";
import { processHashtags } from "../photos.utils";

export default{
    Mutation: {
        editPhoto: protectedResolver(async(_,{id, caption}, {loggedInUser})=>{

            const oldPhoto = await client.photo.findFirst({
                where:{
                    id,
                    userid: loggedInUser.id
                    
                },
                include: {
                    hashtags: {
                        select: {
                            hashtags: true,
                        }
                    }
                }
            });
        if(!oldPhoto){
            return{
                ok: false,
                error: "Photo not found",
            };
        }
        const photo = await client.photo.update({
            where: {
                id
            },
            data: {
                caption,
                hashtags: {
                    disconnect: oldPhoto.hashtags,
                    connectOrCreate: processHashtags(caption),
                }
            }
        });
        return {
            ok: true
        };
        })
    }
}
