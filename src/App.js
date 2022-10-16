import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/about/:productDetail' element={<About />}/>
        <Route path='/contact/:orderId' element={<Contact />}/>
      </Routes>
      
    </div>
  );
}

export default App;
