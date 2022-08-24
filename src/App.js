import React, { Component } from "react";
import Container from "./components/Container";
import Head from "./components/Head";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
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
}
