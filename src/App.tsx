import React from 'react';
import Preloader from './Component/Preloader/Preloader';
import Home from './Component/Home/Home';
import Event from './Component/event/Event';
import Race from './Component/race/Race';
import Music from './Component/music/Music';
import Tour from './Component/tour/Tour';
import Footer from './Component/footer/Footer';
function App() {
  return (
    <>
      <Preloader />
      <Home/>
      <Event/>
      <Race/>
      <Music/>
      <Tour/>
      <Footer/>
    </>
  );
}

export default App;
