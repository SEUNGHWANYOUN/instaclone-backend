import client from "../../client";

export default{
    Query: {
        seePhoto: (_, {id})=>
        client.user.findUnique({
            where: id,
        }),
    }
}