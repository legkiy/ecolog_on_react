import React from 'react';
import Container from './components/Container';
import Head from './components/Head';
import Footer from './components/Footer';

function App() {
  console.log('Width: ' + document.documentElement.scrollWidth + ' px');
  console.log('Height: ' + document.documentElement.scrollHeight + ' px');
  return (
    <>
      <Head />
      <Container />
      <Footer />
    </>
  );
}

export default App;
