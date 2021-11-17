import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './Components/Log-in';
import BreakFast from './Components/Orders';
import './Styles-scss/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/orders" element={<BreakFast />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
