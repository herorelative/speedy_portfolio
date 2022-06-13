import { useState } from "react";
import Logo from "../ui/logo";
import { MenuLinks } from "../ui/menuLinks";
import { MenuToggle } from "../ui/menuToggle";
import NavBarContainer from "../ui/navBarContainer";

const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        //   color={["gay.700", "gray.700", "white", "white"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
