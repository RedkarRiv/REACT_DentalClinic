import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from "./common/Header/Header";
import { Body } from "./pages/Body/Body";
import { Footer } from "./common/Footer/Footer";
import { NavbarMain } from "./common/Navbar/Navbar";


function App() {
  return (
    <>
      {/* <Header/> */}
      <NavbarMain/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
