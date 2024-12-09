import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/page/Home';
import Tickets from './components/page/Tickets';
import Exhibition from './components/page/Exhibition';
import Header from './components/page/Main/Header'; // Import the Header component

const App = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Add the Header component here */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/exhibition" element={<Exhibition />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;