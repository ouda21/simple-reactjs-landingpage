import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import InformationSection from './components/InformationSection'
import HelloWorld from './components/HelloWord';
import StatefulComponents from './components/Stateful';
import Contact from './components/Contact';
//import ThreejsComponent from './components/Threejs'
import Form from './components/Form'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <TopNav />
      <HeroSection />
      <ServiceSection />
      <InformationSection />
      <HelloWorld name="Lethal Ouda" language="Reactjs"/>
      <StatefulComponents toggle="On"/>
      <Form />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
