import { Box, Flex } from "@chakra-ui/react";
import TabListMenu from "./TabList";

const Slider = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-around"} p={4}>
      <Box>
        <TabListMenu />
      </Box>
    </Flex>
  );
};

export default Slider;
