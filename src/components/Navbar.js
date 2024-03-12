import {
  Box,
  Flex,
  Image,
  HStack,
  Input,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram } from "react-icons/fa";


import SpinningTextAroundImage from "./Spinning/SpinningText";
import Img from "./assets/kb.png";

const Navbar = () => {
  return (
    <Flex
      h={"100px"}
      bgColor={"#21201E"}
      color={"white"}
      justifyContent={"space-around"}
      alignItems="center"
    >


      <Box>
        <SpinningTextAroundImage text={"PC - GAMING - BUILDER "}>
          <Image src={Img}></Image>
        </SpinningTextAroundImage>
      </Box>
      <Box>
        <HStack>
          <FaGithub />
          <FaInstagram />
          <Input ml={3} mr={3} size={'sm'} placeholder='Basic usage' />
        </HStack>
      </Box>
    </Flex>
  );
};

export default Navbar;
