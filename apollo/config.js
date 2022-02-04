import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8800", //https://weebflix-graphql-backend.herokuapp.com
  cache: new InMemoryCache(),
});

export default client;
