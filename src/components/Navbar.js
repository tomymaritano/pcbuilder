import {
  Box,
  Flex,
  Image,
  HStack,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex
      h={"80px"}
      bgColor={"#21201E"}
      color={"white"}
      justifyContent={"space-around"}
      alignItems="center"
    >
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
              New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <Image
          w={"80px"}
          src={
            "https://img.freepik.com/premium-vector/scary-skull-gaming-logo-vector-template_824296-5.jpg"
          }
        />
      </Box>
      <Box>
        <HStack>
          <FaGithub />
          <FaInstagram />
        </HStack>
      </Box>
    </Flex>
  );
};

export default Navbar;
