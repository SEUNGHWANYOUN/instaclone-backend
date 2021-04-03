import client from "../../client"

export default {
    Query: {
        seeFollowing: async(_, {
            username,
            lastid,
        })=>{
        const ok = client.user.findUnique({
                where: {
                    username
                },
                select: {
                    id: true
                },
            });
            if(!ok){
                return{
                    ok: false,
                    error: "Following user is no found",
                };
            }

        const following = await client.user.findUnique({
                where: {
                    username
                }
            }).following({
                take: 5,
                skip: lastid ? 1 : 0,
                ...(lastid && (lastid, {id:lastid})),
            });
            return{
                ok: true,
                follwing,
            };
        }
    }
}