import { Tabs, TabList, TabIndicator, TabPanels, Tab, TabPanel, Box, Stack, Progress } from "@chakra-ui/react";

const TabListMenu = () => {
  return (
    <>
    <Box>
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab>01. Nucleo </Tab>
        <Tab>02. Componentes</Tab>
        <Tab>03. Extras</Tab>
        <Tab>04. Paginas</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
        <TabPanel>
            <p>fourth!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <Progress mt={6} colorScheme='green' size='sm' value={20} />
    </Box>

    </>

  );
};

export default TabListMenu;