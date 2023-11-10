
import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';
import Overview from './components/Overview';

function App() {
  return (
    <div className=' justify-center items-center w-full px-5 sm:px-10 lg:px-[100px] max-w-[1440px] mx-auto'>
      <Navbar />
      <Home />
      <Overview />
    </div>
  );
}

export default App;
