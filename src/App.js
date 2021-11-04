// import logo from './logo.svg';
import './App.css';
import FirstHalf from './components/FirstHalf/FirstHalf'
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
  return (
    <div className="body">
    <Header/>
      <FirstHalf/>
      <About/>
    </div>
  );
}

export default App;
