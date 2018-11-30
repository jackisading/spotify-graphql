"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const apollo_server_express_1 = require("apollo-server-express");
// Types and resolvers
const typeDefs = require('./types');
const resolvers = require('./resolvers');
// Get up GraphQL and Express server
const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`));
