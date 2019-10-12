import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Carousel from './components/Carousel/Carousel';
import Promotion from './components/Promotion/promotion';
import News from './components/News/news';
import Header from "./components/header/header";
import Navbar from "./components/Navbar/navbar"
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Carousel />
        <Promotion/>
        <News/>
        <Footer/>
     
        
      
    </div>
  );
}

export default App;
