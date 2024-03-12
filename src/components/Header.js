// App.js
import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import CabinetViewer from "./CabinetViewer";
import ComponentSelector from "./ComponentSelector";
import availableComponents from "./avaiableComponents";
import Slider from "./Slider";

const Header = () => {
  const [selectedComponents, setSelectedComponents] = useState([]);

  const addComponent = (componentId) => {
    const componentToAdd = availableComponents.find(
      (component) => component.id === componentId
    );
    if (componentToAdd) {
      setSelectedComponents((prevComponents) => [
        ...prevComponents,
        componentToAdd,
      ]);
    }
  };

  return (
    <Flex p={4} justifyContent={"space-evenly"}>
      <Box>
        <ComponentSelector onAddComponent={addComponent} />
        <CabinetViewer components={selectedComponents} />
      </Box>
      <Box>
        <Slider />
      </Box>
    </Flex>
  );
};

export default Header;
