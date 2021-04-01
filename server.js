

import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";


const client = new PrismaClient()
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
//grapHQL 인 경우 필수(requere)로 입력값인 경우
//!를 별도로처리 해줘야한다
const typeDefs = gql`
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

const movies = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    //무비의 모든값을 찾아봄
    movies: () => client.movie.findMany(),
    //유저의 값을 찾아줌
    mive:(_,{id}) => client.movie.findUnique({where: {id}})
  },
  Mutation:{
    createMovie:(_, {title, year, genre}) =>
      client.movie.create({

      data:{
        title,
        year,
        genre,
      },

    }),
  
    deleteMovie: (_, {id}) =>client.movie.delete({ where: { id} }),

    updateMovie: (_, {id, year}) =>
    client.movie.update({ where: { id}, data:{year} }),     
    
}
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
