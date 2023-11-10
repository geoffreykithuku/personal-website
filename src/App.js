
import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=' justify-center items-center w-full px-5 sm:px-10 lg:px-[100px] max-w-[1440px] mx-auto'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
