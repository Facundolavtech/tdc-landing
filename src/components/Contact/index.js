import { Container, Icon, Stack, Text } from "@chakra-ui/react";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <Container as="section" maxW="none" background="primary">
      <Stack className="wrapped" direction="column" textAlign="center" p="12">
        <Text
          color="white"
          fontSize={["2xl", "2xl", "4xl"]}
          fontWeight={900}
          textTransform="uppercase"
          mb="8"
        >
          Contactanos en
        </Text>
        <Stack direction="row" justifyContent="center" spacing={8}>
          <Icon
            as={BsWhatsapp}
            color="white"
            fontSize={["4xl", "4xl", "5xl"]}
          />
          <Icon
            as={BsTelegram}
            color="white"
            fontSize={["4xl", "4xl", "5xl"]}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Contact;
