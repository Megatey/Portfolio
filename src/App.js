// import logo from './logo.svg';
import './App.css';
import FirstHalf from './components/FirstHalf/FirstHalf'
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="body">
    <Header/>
      <FirstHalf/>
      <About/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
