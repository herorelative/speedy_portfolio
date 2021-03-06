import {
  SimpleGrid,
  Box,
  Flex,
  Heading,
  useColorMode,
  Container,
} from "@chakra-ui/react";
import loadable from "@loadable/component";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/sections/hero";
const LetUsTalk = loadable(() => import("../components/sections/letUsTalk"));

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>More About Zar Ni @ David</title>
        <meta name="description" content="more details about Zar Ni @ David" />
        <link rel="canonical" href="https://zarnimyo.com/about" />
      </Head>
      <Hero />
      <LetUsTalk />
    </>
  );
  /*<Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>
        Grid{" "}
        <a href="#">
          <span onClick={toggleColorMode}>Color</span>
        </a>
      </Heading>

      <SimpleGrid minChildWidth="130px" spacing="10">
        <Box bg="tomato" height="80px" />
        <Box bg="tomato" height="80px" />
        <Box bg="tomato" height="80px" />
        <Box bg="tomato" height="80px" />
        <Box bg="tomato" height="80px" />
        <Box bg="tomato" height="80px" />
      </SimpleGrid>

       <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> 
    </Flex>*/
};

export default Home;
