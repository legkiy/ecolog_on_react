import React from "react";
import Container from "./components/Container";
import Head from "./components/Head";
import Footer from "./components/Footer";

function App () {
    console.log(document.documentElement.scrollWidth);
    console.log(document.documentElement.scrollHeight);
    return (
      <>
        <Head />
        <Container />
        <Footer />
      </>
    );
  }

export default App