import client from "../../client";

export default {
    Query: {
        seePhotocomments: (_,{id}) => client.photo.findMany({
            where:{
                photoId: id,
            },
            orderBy:{
                createAt: "asc",
            }
        }),

    }
};