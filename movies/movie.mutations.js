
import client from "../client"
export default{
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
        //id -> id:id 가 생략되어 있음
        client.movie.update({ where: { id}, data:{year} }),     
        
    },

};

