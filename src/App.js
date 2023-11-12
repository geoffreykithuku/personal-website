import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <div className=" justify-center items-center w-full px-5 sm:px-10 lg:px-[100px]  mx-auto">
        <Home />
        <Overview />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
