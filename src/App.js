
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Header />
    </ChakraProvider>
  );
}

export default App;
