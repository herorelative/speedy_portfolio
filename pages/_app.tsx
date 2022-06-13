import "@fontsource/raleway/400.css";
import "@fontsource/playfair-display/700.css";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, theme as base } from "@chakra-ui/react";
import MainLayout from "../components/layouts/mainLayout";

const theme = extendTheme({
  fonts: {
    heading: `'playfair display',serif;`,
    body: `'Raleway', sans-serif`,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
