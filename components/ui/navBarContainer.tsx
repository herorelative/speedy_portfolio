import { Box, Container, Flex } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }: any) => {
  return (
    <Container maxW="container.xl">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        // w={{ base: "100vw", lg: "80vw" }}
        // mx={"auto"}
        p={8}
        // bg={["gray.700", "gray.700", "transparent", "transparent"]}
        // color={["white", "white", "gray.700", "gray.700"]}
        // color="gray.700"
        {...props}
      >
        {children}
      </Flex>
    </Container>
  );
};

export default NavBarContainer;
