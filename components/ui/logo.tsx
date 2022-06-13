import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo({ children, to = "/", text = "ZAR NI MYO" }: any) {
  return (
    <Box>
      <Link href={to}>
        <a>
          <Heading fontSize="2xl" fontWeight="bold">
            {text}
          </Heading>
        </a>
      </Link>
    </Box>
  );
}
