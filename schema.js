import { 
    loadFilesSync,
    makeExecutableSchema,
     mergeTypeDefs,
     mergeResolvers,
       } 
      from "graphql-tools";

//모튼 폴더에서 찾아서 tyDedfs.js 파일을 가져옴 **= 모든폴터 *모든파일
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(
    `${__dirname}/**/*.{resolvers}.js`
);

//merge 하기 위해서는 각각의 typeDefs & resolvers must be export default
const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({typeDefs, resolvers});

export default  schema;

