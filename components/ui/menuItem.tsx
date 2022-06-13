import { Text } from "@chakra-ui/react";
import Link from "next/link";

export const MenuItem = ({ children, isLast, to = "/", ...rest }: any) => {
  return (
    <Link href={to}>
      <a>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </a>
    </Link>
  );
};
