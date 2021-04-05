import client from "../../client";
import { protectedResolver } from "../../users/user.utils";

export default {
    Mutation :{
        deleteComment: protectedResolver(async(_, {id}, {logggedInUser}) => {
            const comment = await client.comment.findUnique({
                where:{
                    id,
                },
                select:{
                    userId: true,
                }
            });
            if(!comment){
                return{
                    ok:false,
                    error: "Comment is not found."
                };
            }else if(photo.userId !== logggedInUser.id){
                return{
                    ok:false,
                    error: "Not authorized"
                };
            }else{
                await client.comment.delete({
                    where: {
                        id,
                    }
                });
                return{
                    ok: true,
                };
            }           
        }),

    }
}