import Topbar from "./components/Topbar/Topbar"
import Intro from "./components/Intro/Intro"
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";




function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
