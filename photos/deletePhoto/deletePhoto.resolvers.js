import client from "../../client";
import { protectedResolver } from "../../users/user.utils";

export default {
    Mutation :{
        deletePhoto: protectedResolver(async(_, {id}, {logggedInUser}) => {
            const photo = await client.photo.findUnique({
                where:{
                    id,
                },
                select:{
                    userId: true,
                }
            });
            if(!photo){
                return{
                    ok:false,
                    error: "Photo is not found."
                };
            }else if(photo.userId !== logggedInUser.id){
                return{
                    ok:false,
                    error: "Not authorized"
                };
            }else{
                await client.photo.delete({
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