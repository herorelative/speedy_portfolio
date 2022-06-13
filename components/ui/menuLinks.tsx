import { Box, Button, Stack, useColorMode } from "@chakra-ui/react";
import { MenuItem } from "./menuItem";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const MenuLinks = ({ isOpen }: any) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-around", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/about">ABOUT</MenuItem>
        <MenuItem to="/work">WORK</MenuItem>
        <MenuItem to="/blog">BLGO</MenuItem>
        <MenuItem to="/contact" isLast>
          <Button
            size="sm"
            rounded="md"
            colorScheme="orange"
            // color={["gray.700", "gray.700", "white", "white"]}
            // bg={["white", "white", "gray.700", "gray.700"]}
            // _hover={{
            //   bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
            // }}
          >
            CONTACT
          </Button>
        </MenuItem>
        <Button onClick={toggleColorMode} title="Switch on and off">
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Stack>
    </Box>
  );
};
