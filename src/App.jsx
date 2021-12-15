/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles-scss/App.scss';
import './Styles-scss/LogIn.scss';
import './Styles-scss/Order-style/Order.scss';
import TakeOrders from './Components/Menu/TakeOrders';
import LogInPage from './Components/Log-In/LogIn';
import Kitchen from './Components/Kitchen/Kitchen';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogInPage />} />
        <Route exact path="/orders" element={<TakeOrders />} />
        <Route exact path="/kitchen" element={<Kitchen />} />
      </Routes>
    </Router>
  );
}

export default App;
