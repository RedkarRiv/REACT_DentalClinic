import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Body } from "./pages/Body/Body";
import { Footer } from "./common/Footer/Footer";
import { NavbarMain } from "./common/Navbar/Navbar";


function App() {
  return (
    <>
      <NavbarMain/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
