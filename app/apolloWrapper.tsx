"use client";

import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";

import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

type Client = ReturnType<typeof makeClient>;

function makeClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:3000/graphql",
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export const ApolloWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};
