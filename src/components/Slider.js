import { Box, Flex, Heading } from "@chakra-ui/react";
import TabListMenu from "./TabList";
import PCBuilder from "./PCBuilder";

const Slider = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'space-around'} p={4}>
      <Box>
        <PCBuilder />
      </Box>
      <Box>
      <TabListMenu />
      </Box>
      
    </Flex>
  );
};

export default Slider;
