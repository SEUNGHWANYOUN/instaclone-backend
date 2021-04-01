import client from "../client"
export  default  {
    Query: {
      //무비의 모든값을 찾아봄
      movies: () => client.movie.findMany(),
      //유저의 값을 찾아줌
      mive:(_,{id}) => client.movie.findUnique({where: {id}})
    },

};