
import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className=' justify-center items-center w-full px-5 sm:px-10 lg:px-[100px] max-w-[1440px] mx-auto'>
      <Navbar />
      <Home />
      <Overview />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
