import client from "../../client"

export default {
    Query:{
        seearchUser: async(_, {keyowrd}) =>
        client.user.findMany({
                where:{
                   username:{
                       startsWith: keyowrd.toLowerCase(),
                   },

                }
            }),
        
        
    }
}