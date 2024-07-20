import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import "./App.css";
function App() {
  const [showChat, setShowChat] = useState(false);

  const handleChatToggle = () => {
    setShowChat(prev => !prev);
  };

  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Chat/>
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
