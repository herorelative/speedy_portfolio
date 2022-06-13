import { Container } from "@chakra-ui/react";
import loadable from "@loadable/component";
const NavBar = loadable(() => import("../sections/navBar"));
const Footer = loadable(() => import("../sections/footer"));

const MainLayout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <Container as="main" maxW="6xl" p={8} mt={8} fontSize="2xl">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
