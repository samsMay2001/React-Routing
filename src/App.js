import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import HomePage from './components/HomePage/HomePage';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <Link to='/' className='nav-item'>Homepage</Link>
        <Link to='/about-me' className='nav-item'>About me</Link>
      </nav>
      <Routes>
        <Route path='/' element= {<HomePage />} />
        <Route path='/about-me' element= {<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
