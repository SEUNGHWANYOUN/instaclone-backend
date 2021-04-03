import { gql } from "apollo-server";


export default gql`
 type FollowUserResolt{
    ok: Boolean!
    error: String
}

 type  Mutation {
     followUser(
         toFollow:String
         ): FollowUserResolt
 }
`;