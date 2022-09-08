import './App.css';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Tradable from './components/Tradable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Nav />
     <Slider />
     <Tradable />
     <Footer />
    </div>
  );
}

export default App;

