import client from "../../client";
import { protectedResolver } from "../../users/user.utils";

export default{
    Query: {
        seeFeed: protectedResolver((_, _, {loggedInUser})=>
        client.photo.findMany({
            where:{
                OR:[{

                user: {
                    followers: {
                        some: {
                            id: loggedInUser.id,
                        }
                    }
                },
                userId: loggedInUser.id,
            
                }]

            },
            orderBy:{
               createAt: "desc", 
            }
        }),

        )
    }
}