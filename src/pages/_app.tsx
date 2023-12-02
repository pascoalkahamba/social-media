import "@mantine/core/styles.css";
import "../styles/styles.css";
import type { AppProps } from "next/app";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import Head from "next/head";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title | Pascoal Kahamba</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* <ColorSchemeScript /> */}
      </Head>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
