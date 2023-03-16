import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <a href='#' className='nav-item'>Homepage</a>
        <a href='#' className='nav-item'>About Me</a>
      </nav>
      <HomePage/>
      <AboutMe/>
    </div>
  );
}

export default App;
