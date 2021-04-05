import { gql } from "apollo-server";

export default gql`

type DeletecommentResult{
    ok:Boolean!,
    error: String
}
    type Mutation{
        deletecomment(id: Int!): DeletecommentResult!
    }
`;