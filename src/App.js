import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  
  return (
    <div>
      <Header>
        <Nav ></Nav>
      </Header>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;