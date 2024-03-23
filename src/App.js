import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" className="title">#VANLIFE</Link>
        <div className="nav-link">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/" className="nav-link">Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
