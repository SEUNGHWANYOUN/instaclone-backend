import { gql } from "apollo-server";

export default gql`
 type Photo {
    id: Int!
    user: User!
    file: String!
    caption: String
    likes: Int!
    hashtags: [Hashtag]
    createAt: String!
    updateAt: String!
}

  type Hashtag{
    id: Int!
    hashtag: String!
    photos(page: Int!): [Photo]
    totalPhotos: Int! 
    createAt: String!
    updateAt: String!
  }

  type Like{
    id: Int!
    photo: Photo!
    createAt: String!
    updateAt: String!
  }
`;