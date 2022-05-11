import { Button, Container, Image, Stack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Container as="header" maxW="none" position="absolute" zIndex={9999}>
      <Stack
        className="wrapped"
        direction="row"
        justifyContent="space-between"
        w="full"
        h="5rem"
        py="4"
      >
        <Image src="/assets/logo.png" alt="Logo" h="full" objectFit="contain" />
        <Stack direction="row" spacing="4">
          <Button
            background="none"
            border="1px"
            borderColor="primary"
            borderRadius="lg"
            color="white"
            h="full"
            minW={["none", "none", "160px"]}
          >
            Iniciar sesion
          </Button>
          <Button
            background="primary"
            color="white"
            borderRadius="lg"
            h="full"
            minW={["none", "none", "160px"]}
          >
            Registrarse
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Header;
