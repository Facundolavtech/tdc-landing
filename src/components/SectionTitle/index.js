import { Text } from "@chakra-ui/react";
import React from "react";

const SectionTitle = ({ content, ...rest }) => {
  return (
    <Text
      fontSize={["3xl", "3xl", "5xl"]}
      color="gray.700"
      fontWeight={700}
      mb={"14"}
      textAlign={["center", "center", "left"]}
      {...rest}
    >
      {content}
    </Text>
  );
};

export default SectionTitle;
