import { gql } from "apollo-server";




//Mutation - graphql 에 넣을 함수 값을 선언
export default gql`
  type User{
      id: String!
      firstName: String!
      lastName: String
      username: String!
      email: String!
      createAt: String!
      updateAt: String!
  }

  type LoginResult {
      ok: Boolean!
      token: String
      error: String
  }

  type Mutation{
      creatAccount(
      firstName: String!
      lastName: String
      username: String!
      email: String!
      password: String!
      ): User

      login(
          username:String!, password:String!): LoginResult

  }

  type Query{
    seeProfile(
        username: String!
    ) :User
  }

  
`;
    
