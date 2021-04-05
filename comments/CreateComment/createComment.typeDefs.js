import { gql } from "apollo-server";

export default gql`

    type CteateCommentResult {
        ok: Boolean!
        error: String
    }
    
    type Mutation {
        createComment(phtoId: Int!, payload: String!): CteateCommentResult!
    }
`;