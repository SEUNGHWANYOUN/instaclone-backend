import client from "../../client";

export default {
    Query: {
        searchPhotos: (_, {keyword}) => 
        client.photo.findMany({
            where:{
                captin: {
                    startsWith: keyword,              
                }
            }
        }),
    }
}