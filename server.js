
require ("dotenv").config();

import { ApolloServer } from "apollo-server";
import schema from "./schema";


const server = new ApolloServer({ 
  schema,
    });

const PORT = process.env.PORT

// The `listen` method launches a web server.
server.listen(PORT)
.then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
