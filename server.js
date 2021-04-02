
require ("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./schema";
import { getUser, protectResolver } from "./users/user.utils";

const PORT = process.env.PORT;
const server = new ApolloServer({ 
  schema,
  context: async ({ req }) =>{
    return {
      loggedInUser: await getUser(req.headers.token),
      protectResolver,
    };
  },
    });



// The `listen` method launches a web server.
server.listen(PORT)
.then(() => {
  console.log(`🚀  Server ready at ${PORT}`);
});


