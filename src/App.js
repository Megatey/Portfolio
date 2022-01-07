import './App.css';
import Contact from './components/Contact/Contact';
import FirstHalf from './components/FirstHalf/FirstHalf';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import About from './components/About/About';
import Floating from './components/Floating/Floating';



function App() {
  return (
    <div className="App">
      <Header/>
      <FirstHalf/>
      <About/>
      <Contact/>
      <Footer/>
      <Floating/>
    </div>
  );
}

export default App;
