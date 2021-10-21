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

const endpoint2 = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
  },
});

const client = new ApolloClient({
  ssrMode: true,
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "endpoint2",
    endpoint2,
    endpoint1
  ),
  cache: new InMemoryCache(),
});

export default client;
