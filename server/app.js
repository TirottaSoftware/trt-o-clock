const express = require("express");
const cors = require("cors");
const app = express();
const { ApolloServer } = require("apollo-server-express")
const { typeDefs } = require('./schema/typeDefs')
const { resolvers } = require('./schema/resolvers')

const apolloServer = new ApolloServer({ typeDefs, resolvers });

// apolloServer.listen(process.env.PORT || 4000).then(({ url }) => {
//   console.log("Apollo Server running on " + url)
// })

const startServer = async () => {
  app.use(cors());
  app.use(express.json());

  const watchRoutes = require("./routes/watchRoutes");
  app.use("/watches", watchRoutes);

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: '/api'
  })
  app.listen(process.env.PORT || 6969, () => {
    console.log("Server running...", apolloServer.graphqlPath);
  });
}


startServer();