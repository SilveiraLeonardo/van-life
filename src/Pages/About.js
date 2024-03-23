import React from 'react';
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="about-page">
      <img className="about-image" src={require("../images/about-page.png")} />

      <div className="about-page-content">
        <h1>
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>

        <div className="about-box">
          <h3>
            Your destination is waiting.
          <br/>
            Your van is ready.
          </h3>
          <Link to="vans">
            <h5 className="about-page-explore-vans-button">
              Explore our vans
            </h5>
          </Link>
        </div>
      </div>
      <footer>
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </div>

  )
}