import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchAppBar from './copmponents/AppBar';
import Tour from './pages/Tour';

function App() {
  return (
    <Router>
      <SearchAppBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Tour/>}/>
      </Routes>
    </Router>
  );
}

export default App;
