import { Box, Flex, Text } from "@chakra-ui/react";

const Item = ({ icon, title, content }) => {
  return (
    <Box p="8" background="white" borderRadius="lg" boxShadow="lg">
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        textAlign="center"
      >
        {icon}
        <Text color="gray.600" fontWeight={700} fontSize="xl" mb="4">
          {title}
        </Text>
        <Text color="gray.400" fontWeight={400} fontSize="md">
          {content}
        </Text>
      </Flex>
    </Box>
  );
};

export default Item;
