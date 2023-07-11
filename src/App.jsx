import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Body } from "./pages/Body/Body";
  import { Navbar2Boots } from "./common/Navbar/Navbar";
  import cors from 'cors';
  App.use(cors());

function App() {
  return (
    <>
      <Navbar2Boots/>
      <Body/>
    </>
  )
}

export default App
