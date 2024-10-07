import { Fragment } from "react";
import Nav from "./components/navbar.jsx";
import './assets/styles/style.css'
import HeroSection from "./components/hero_section.jsx";

function App(){
  return (
    <Fragment>
      <Nav/>
      <HeroSection/>
    </Fragment>
  )
}

export default App 