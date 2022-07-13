import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailsPage from './Pages/DetailsPage/DetailsPage';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
