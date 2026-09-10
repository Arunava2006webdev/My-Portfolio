import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className=" bg-black">
      <Navbar />
      <Hero/>
      <About/>
       <Education />
      <Skills/>
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;