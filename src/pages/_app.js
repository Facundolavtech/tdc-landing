import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    body: "Nunito Sans",
  },
  colors: {
    primary: "#e17230",
    hover: {
      primary: "#f38c4f",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
