// src/App.jsx
import React from 'react';
import './style.css';
import images from "./img/img.jpg";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';

export function App() {
  return (
    <Router>
      <div>
        {}
        <ul>
          <li className='Home'>
            <Link to="/">Home</Link>
          </li>
          <li className='About'>
            <Link to="/about">About</Link>
          </li>
        </ul>

        {}
        <Routes>
          <Route path="/" element={<div>
            <img className='img' src={images} alt="" />

            <h1>
              Transformando <span className="bold">espaço</span>, criando <span className="bold">história</span>
            </h1>

            <p>Lorem ipsum dolor sit, amet <b>consectetur</b> adipisicing elit. <span className="bold">Nulla modi soluta consectetur</span> culpa dolepe illum ipsum ipsa molestias reprehenderit ad?</p>
            <p className='pp'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quaerat repellat, <b>voluptatum</b> orro <span className="bold">perspicilaboriosam veritatis fugit</span> doloribus dolore ab ipsam voluptas provident corporis?</p>

            <div className='icon'>
              <div className='icon-I'>
                <a href="#">Instagram</a>
              </div>
              <div>
                <a href="#">Fale conosco</a>
              </div>
            </div>
          </div>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
