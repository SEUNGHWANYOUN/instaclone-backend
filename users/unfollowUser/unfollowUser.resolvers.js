import client from "../../client";
import { protectedResolver } from "../user.utils";

export default {
    Mutation: {
        unfollowUser: protectedResolver(
            async(_,
                {uername},
                {looggedInUser}) => {

                    const ok = await client.user.findUnique(
                        {
                            where:{
                        username
                    },

                });
                if(!ok){
                    return {
                        ok: false,
                        error: "Can't unfllow user"
                    };
                }
                await client.user.update({
                    where: {
                        username

                    },
                    data: {
                        following:{
                            disconnect: {
                                username,
                            },
                        },
                    }
                });

                 return {
                     ok: true
                 };
                }
                
                )
    }
}