import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";

const Members = [
  {
    thumb: "/assets/leandro.jpg",
    memberName: "Leandro Girard",
    role: "Co Fundador - Experto en marketing y ventas",
  },
  {
    thumb: "/assets/florencia.jpg",
    memberName: "Florencia Barbero",
    role: "Co Fundadora - Experta en trading y finanzas, educadora",
  },
  {
    thumb: "/assets/facundo.jpg",
    memberName: "Facundo Lavagnino",
    role: "Desarrollador de software, jefe del area de sistemas",
  },
];

const Team = () => {
  return (
    <Container
      as="section"
      maxW="none"
      mt="120px"
      background="gray.200"
      py="24"
    >
      <SectionTitle content="Nuestro equipo" className="wrapped" />
      <SimpleGrid columns={[1, 1, 3]} spacing="16" className="wrapped">
        {Members.map(({ thumb, memberName, role }, index) => (
          <Member
            key={index}
            thumb={thumb}
            memberName={memberName}
            role={role}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Team;

const Member = ({ thumb, memberName, role }) => {
  return (
    <Box background="white" borderRadius="lg" overflow="hidden">
      <Image
        src={thumb}
        alt={`${memberName} profile photo`}
        width="full"
        height="300px"
        objectFit="cover"
      />
      <Stack p="8">
        <Text
          textAlign="center"
          color="gray.600"
          fontWeight={700}
          fontSize="2xl"
          mb="4"
        >
          {memberName}
        </Text>
        <Text
          textAlign="center"
          color="gray.500"
          fontWeight={400}
          fontSize="md"
        >
          {role}
        </Text>
      </Stack>
    </Box>
  );
};
