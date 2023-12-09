import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import { readFile } from "fs/promises";
import { authMiddleware, handleLogin } from "./auth";
import { resolvers } from "./graphql/resolvers";

const PORT = 9000;

const app = express();
app.use(cors(), express.json(), authMiddleware);

app.post("/login", handleLogin);

//Appolo server for graphql
readFile("./src/graphql/schema.graphql", "utf-8").then((typeDefs) => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  apolloServer.start().then(() => {
    app.use("/graphql", expressMiddleware(apolloServer));

    app.listen({ port: PORT }, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Graphql Server running on port ${PORT}`);
    });
  });
});
