import { gql } from "apollo-server";

//prisma 동기화를 위해 여기있어야함 나머지는 구조정렬화
//! 사용은 반드시 값이 들어가야함
export default gql`
  type User{
      id: String!
      firstName: String!
      lastName: String
      username: String!
      email: String!
      createAt: String!
      updateAt: String!
      bio:    String
      avatar: String
      following: [User]
      followers: [User]
  }
`;
    
