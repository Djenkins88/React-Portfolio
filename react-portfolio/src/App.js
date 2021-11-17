import Topbar from "./components/Topbar/Topbar"
import Intro from "./components/Intro/Intro"
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import "./app.css"
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
