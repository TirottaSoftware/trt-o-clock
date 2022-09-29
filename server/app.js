const express = require("express");
const cors = require("cors");
const app = express();
const { ApolloServer } = require("apollo-server")
const { typeDefs } = require('../trtoclock-gql/schema/typeDefs')
const { resolvers } = require('../trtoclock-gql/schema/resolvers')

const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log("Apollo Server running on " + url)
})

app.use(cors());
app.use(express.json());

const watchRoutes = require("./routes/watchRoutes");
app.use("/watches", watchRoutes);

app.listen(process.env.PORT || 6969, () => {
  console.log("Server running...");
});
