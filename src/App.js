import './App.css';
import './GSidebar.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages';
import RegisterPage from './pages/register';
import HomePage from './pages/home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} exact/>
        <Route path="/register" element={<RegisterPage/>} exact />
        <Route path="/home" element={<HomePage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
