import React from 'react';

//local components
import Timer from './components/timer/timer';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
import Instructions from './components/instructions/instructions';
import Demonstrations from './components/demonstration/demonstration';
import Reviews from './components/reviews/reviews';
import About from './components/about/about';
import Footer from './components/footer/footer';
import FloatButton from './components/floatButton/floatButton';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Instructions />
      <Demonstrations />
      <Reviews />
      <Portfolio />
      <Timer />
      <Footer />
      <FloatButton />
    </div>
  );
}

export default App;
