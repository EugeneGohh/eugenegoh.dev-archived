import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}
export default MyApp;
