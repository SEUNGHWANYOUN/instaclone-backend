import client from "../../client"

export default {
    Query: {
        seePhotoLikes: async (_, {id})=> {
            const likes = await client.like.findMany({
                where:{
                    photoId: id,
                },
                select:{
                    user: true,
                }

            });
            //좋아요가 눌러진 사진에서 -> 좋아요 누른 유저를 리턴
            return likes.map((like) => like.user);
        }
        
    }
}