import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container
      maxW="full"
      w="full"
      h="100vh"
      pt="7rem"
      minH={["400px", "400px", "600px"]}
      padding="0"
      position="relative"
    >
      <Image
        src="/assets/family.jpg"
        alt="Family working"
        w="full"
        h="full"
        objectFit="cover"
        zIndex={100}
        position="absolute"
      />
      <Box
        w="full"
        h="full"
        zIndex={200}
        position="absolute"
        background="blackAlpha.500"
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          h="full"
          className="wrapped"
        >
          <Text
            as="h1"
            fontWeight="900"
            textTransform="uppercase"
            color="#fff"
            fontSize={["2xl", "2xl", "2.5rem"]}
            mb="16"
          >
            Trabaja desde casa y obtene ingresos ilimitados con nuestro sistema
          </Text>
          <Button
            background="primary"
            px="60px"
            py="24px"
            color="white"
            _hover={{
              background: "hover.primary",
            }}
            textTransform="uppercase"
            fontSize="md"
            fontWeight="bold"
          >
            Comenzar
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default Hero;
