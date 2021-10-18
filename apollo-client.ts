import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "https://api.hashnode.com/",
    credentials: "same-origin",
    headers: {
      Authorization: process.env.HASHNODE_AUTH,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
