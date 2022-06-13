import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import ContactForm from "../ui/contactForm";

const LetUsTalk = () => {
  return (
    <Flex
      as="section"
      minH="20vh"
      alignItems="center"
      align="center"
      justifyContent="center"
      direction="column"
    >
      <Grid
        templateRows={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
        minH="200px"
        gap={8}
        mt={8}
      >
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Heading size="3xl" mb={6}>
            Let's talk?
          </Heading>
          <Text>
            Got a partnership idea, or a project you need help with? Shoot me a
            line and let's talk.
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 3 }} mt={8}>
          <ContactForm />
        </GridItem>
      </Grid>
      {/* <SimpleGrid mt={8} minChildWidth="450px" spacing={8}>
        <Box mt={8}>
          <Heading size="3xl" mb={8}>
            Let's talk?
          </Heading>
          <Text>
            Got a partnership idea, or a project you need help with? Shoot me a
            line and let's talk.
          </Text>
        </Box>
        <Box mt={8}>
          <ContactForm />
        </Box>
      </SimpleGrid> */}
    </Flex>
  );
};

export default LetUsTalk;
