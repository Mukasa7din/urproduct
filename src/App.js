import React from 'react';
import {ClothProvider} from './contextstore'
import Nav from './nav';
import './App.css';
import Body from './body';
import Footer from './footer';

function App() {
  return (<ClothProvider>
      <Nav/>
      <Body/>
      <Footer/>
    </ClothProvider>
  );
}

export default App;
