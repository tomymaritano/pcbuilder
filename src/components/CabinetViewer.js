
// CabinetViewer.js
import React from "react";
import { Image, Box } from "@chakra-ui/react";

const CabinetViewer = ({ components }) => {
  return (
    <Box position="relative" width="fit-content" margin="auto">
      <Image src="https://www.logg.com.ar/images/builder/pc-case-bg.webp" alt="PC Cabinet" />
      {components.map((component, index) => (
        <Image
          key={index}
          src={component.image}
          alt={component.type}
          position="absolute"
          top={component.position.top}
          left={component.position.left}
          width={component.size.width}
        />
      ))}
    </Box>
  );
};

export default CabinetViewer;
