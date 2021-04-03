import { gql } from "apollo-server";

export default gql`
 type creatAccountResult{
   ok: Boolean!
   error: String
 }

  type Mutation{
      creatAccount(
      firstName: String!
      lastName: String
      username: String!
      email: String!
      password: String!
      ): creatAccountResult!
  }

`;
    
