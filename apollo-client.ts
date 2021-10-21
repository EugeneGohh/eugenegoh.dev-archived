import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const endpoint1 = new HttpLink({
  uri: "https://api.hashnode.com/",
});

console.log(process.env.GITHUB_ACCESS_TOKEN);

const endpoint2 = new HttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  };
}).concat(endpoint2);

const client = new ApolloClient({
  ssrMode: true,
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "authLink",
    authLink,
    endpoint1
  ),
  cache: new InMemoryCache(),
});

export default client;
