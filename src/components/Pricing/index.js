import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import { HiCheckCircle } from "react-icons/hi";

const Items = [
  {
    title: "Oro",
    price: "59.99",
    prevPrice: "39.99",
    benefits: ["Introduccion al trading", "Licencia de venta de membresia Oro"],
  },
  {
    title: "Platino",
    price: "69.99",
    prevPrice: "46.00",
    benefits: [
      "Todo lo del plan Oro",
      "Academia basica",
      "Licencia de venta de membresia Oro y Platino",
    ],
  },
  {
    title: "Diamante",
    price: "98.00",
    prevPrice: "78.00",
    benefits: [
      "Todo lo del plan Platino",
      "Gestion de capital",
      "Gestion de riesgo",
      "Plan de trading",
      "Licencia de venta de membresia Oro, Platino y Diamante",
    ],
  },
];

const Pricing = () => {
  return (
    <Container as="section" maxW="none" mt="120px">
      <SectionTitle content="Nuestros planes" className="wrapped" mb="4" />
      <Text
        color="gray.500"
        fontSize="lg"
        className="wrapped"
        mb={16}
        textAlign={["center", "center", "left"]}
      >
        Elegi entre nuestros planes y obtene el derecho de reventa
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8} className="wrapped">
        {Items.map((item, index) => (
          <Item
            title={item.title}
            price={item.price}
            prevPrice={item.prevPrice}
            benefits={item.benefits}
            key={index}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Pricing;

const Item = ({ title, price, prevPrice, benefits }) => {
  return (
    <Box borderRadius="lg" overflow="hidden" boxShadow="2xl">
      <Box py="8" textAlign="center" background="primary" w="full">
        <Text
          color="white"
          fontWeight={900}
          fontSize="3xl"
          textTransform="uppercase"
        >
          {title}
        </Text>
      </Box>
      <Flex direction="column" alignItems="center" px="8">
        <Text fontSize="4xl" fontWeight={900} color="gray.700" mt="12" mb="8">
          ${price} U$D
        </Text>
        <Text fontSize="2xl" color="gray.700" mb="8" as="del">
          ${prevPrice} U$D
        </Text>
        <Button
          w="full"
          h="50px"
          background="green.500"
          color="white"
          as="a"
          fontWeight={700}
          fontSize="md"
          textTransform="uppercase"
          mb="8"
          cursor="pointer"
        >
          Contratar
        </Button>
        <Stack w="full" textAlign="left" direction="column" as="ul" mb="8">
          {benefits.map((content, index) => (
            <Stack key={index} direction="row">
              <Icon as={HiCheckCircle} color="green.500" fontSize="xl" />
              <Text color="gray.500" fontSize="md" as="li">
                {content}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};
