import { ApolloClient, InMemoryCache } from "@apollo/client";

const apikey = process.env.NEXT_PUBLIC_STEPZEN_API_KEY;

const client = new ApolloClient({
  uri: "https://tutong.stepzen.net/api/impressive-toad/__graphql",
  // uri: "http://localhost:5001/api/impressive-toad",
  headers: {
    //stepzen whoami --apikey
    Authorization:
      `Apikey ${apikey}`,
  },
  cache: new InMemoryCache(),
});

export default client;
