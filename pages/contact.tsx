import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ui/contactForm";

const Contact: NextPage = () => {
  return (
    <Flex
      as="section"
      minH="80vh"
      height="80vh"
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="column"
    >
      <Head>
        <title>Contact - Zar Ni Myo</title>
        <meta name="description" content="more details about Zar Ni @ David" />
        <link rel="canonical" href="https://zarnimyo.com/about" />
      </Head>
      <Heading size="4xl">Contact me</Heading>
      <SimpleGrid mt={8} minChildWidth="300px" spacing={6}>
        <Box mt={8}>
          <ContactForm />
        </Box>
        <Box mt={8}>
          <Text>
            Whether you{"'"}re reaching out with particular questions, got a
            project in mind, or want to cooperate on something, I{"'"}m all ears
            – use this form and I{"'"}ll get back to you as soon as I can.
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default Contact;
