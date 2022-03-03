import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://weebflix-graphql-backend.herokuapp.com", //https://weebflix-graphql-backend.herokuapp.com
  cache: new InMemoryCache(),
});

export default client;
