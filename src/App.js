
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Routes , Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
       < Routes>
       <Route  path='/' element={<Home/>}/>
       <Route  path='/about' element={<About/>}/>
       <Route  path='/contact' element={<Contact/>}/>
       </Routes>


        <Footer/>
    
    </header>
    </div>
  );
}

export default App;
