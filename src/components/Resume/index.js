import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import Vimeo from "@u-wave/react-vimeo";

const Resume = () => {
  return (
    <Container as="section" maxW="none" mt="120px">
      <SectionTitle content="¿Quienes somos?" className="wrapped" />
      <SimpleGrid
        w="full"
        spacing="8"
        columns={["1", "1", "2"]}
        className="wrapped"
      >
        <Box>
          <Vimeo video="115783408" responsive width="100%" />
        </Box>
        <Box>
          <Text color="gray.500" fontSize="xl" lineHeight={8}>
            Somos una academia de trading y marketing especializada en llevarte
            a lo mas alto del sistema capitalista, tambien podes revender
            nuestros cursos y ser libre financieramente
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Resume;
