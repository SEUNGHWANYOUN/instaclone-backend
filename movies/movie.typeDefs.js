import { gql } from "apollo-server"

//!를 별도로처리 해줘야한다 export
export default gql`
  type Movie { 
    id: Int!
    title: String!
    year: Int!
    gende: Strng
    CreatedAt: String!
    UpdateAt: String!
  }
type Query {
    movies: [Movie]
    movies(id:Int!): Movie }

  type Mutation{
    createMovie(title: String!, year:Int!, gener:String): Movie
    deleteMovie(id: Int!): Movie
    updateMovie(id:Int! year: Int!) : Movie
  }
`;