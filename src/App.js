import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Slider />
    </ChakraProvider>
  );
}

export default App;
