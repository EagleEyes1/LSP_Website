import { ApolloClient, InMemoryCache } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "https://dashing-bass-85.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "knbGXf8BoGhxdFMG9pLjQaAc793YN8eyROaSs06jgVGtB2YrY1mewP3hyTv6gmTQ",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://dashing-bass-85.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "knbGXf8BoGhxdFMG9pLjQaAc793YN8eyROaSs06jgVGtB2YrY1mewP3hyTv6gmTQ",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
