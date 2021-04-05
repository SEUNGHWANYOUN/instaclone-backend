import { gql } from "apollo-server";

export default gql`
    type Query {
        seePhotocomments(id: Int!): [Comment]
    }
`;