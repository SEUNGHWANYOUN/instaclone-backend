import { 
    loadFilesSync,
    makeExecutableSchema,
     margeTypeDefs,
     mageResolvers,
       } 
      from "graphql-tools";

//모튼 폴더에서 찾아서 tyDedfs.js 파일을 가져옴 **= 모든폴터 *모든파일
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(
    `${__dirname}/**/*.{queries,mutations}.js`
);

const typeDefs = margeTypeDefs(loadedTypes);
const resolvers = mageResolvers(loadedResolvers);

const schema = makeExecutableSchema({typeDefs,resolvers});

export default  schema;

