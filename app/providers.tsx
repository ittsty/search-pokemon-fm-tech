"use client";
import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client/react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
      console.log("Apollo client:", apolloClient);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
