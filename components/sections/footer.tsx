import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Logo from "../ui/logo";
import SocialIcons from "../ui/socialIcons";

const Footer = () => {
  return (
    <Container maxW="container.xl" as="footer" p={8}>
      <Logo />
      <Flex mt={8} justify="space-between" align="flex-end">
        <SocialIcons />
        <Text fontSize="lg">Made with 💕 by Zar Ni Myo</Text>
      </Flex>
    </Container>
  );
};

export default Footer;
