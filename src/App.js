import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Overview from './components/Overview';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div id="content">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;