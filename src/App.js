import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import CarSearch from './components/CarSearch';

function App() {
  return (
    <div style={{
      backgroundColor: "#89CFEF",

    }}>
    <Router>
      <div className="App" style={{
        backgroundColor: "#90e0ef	",
      }}>
        <Routes>
          <Route path="/" element={<CarSearch />} />
          <Route path="/page/:page" element={<CarSearch />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
