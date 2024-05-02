import './App.css';
import About from './pages/about/About';
import Card from './pages/cards/Card';
import Follow from './pages/follow/Follow';
import Navbar from './pages/header/Navbar';
import Hero from './pages/hero/Hero';
import Meet from './pages/meet/Meet';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <About/>
       <Card/>
       <Shop/>
       <Meet/>
       <Follow/>
    </div>
  );
}

export default App;
