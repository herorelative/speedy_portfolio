import { Stack } from "@chakra-ui/react";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

const SocialIcons = ({ space = 4, direction = "row", size = 40 }: any) => {
  return (
    <Stack spacing={4} direction={direction} color="gray">
      <Link href="/" title="Follow Zar Ni Myo on Github">
        <a title="Follow Zar Ni Myo on Github">
          <AiFillGithub size={size} />
        </a>
      </Link>
      <Link href="/" title="Follow Zar Ni Myo on Twitter">
        <a title="Follow Zar Ni Myo on Twitter">
          <AiFillTwitterSquare size={size} />
        </a>
      </Link>
      <Link href="/" title="Follow Zar Ni Myo on Facebook">
        <a title="Follow Zar Ni Myo on Facebook">
          <AiFillFacebook size={size} />
        </a>
      </Link>
      <Link href="/" title="Follow Zar Ni Myo on Instagram">
        <a title="Follow Zar Ni Myo on Instagram">
          <AiFillInstagram size={size} />
        </a>
      </Link>
    </Stack>
  );
};

export default SocialIcons;
