import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import SocialIcons from "../ui/socialIcons";

const Hero = () => {
  return (
    <Flex
      as="section"
      h="80vh"
      wrap="wrap"
      alignItems="flex-start"
      align="center"
      justifyContent="left"
      direction="row"
    >
      <Heading
        size={{ base: "3xl", md: "4xl" }}
        w={{ base: "90vw", md: "60vw" }}
        my="auto"
      >
        <Text lineHeight="normal" h="60vh" pt={10}>
          I{"'"}m a lead full-stack web engineer who knows good app means good
          business.
        </Text>
      </Heading>
      <SocialIcons />
    </Flex>
  );
};

export default Hero;
